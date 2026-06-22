import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users, transactions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { walletAddress, type, asset, amount, txHash, toAddress } = await request.json();

    if (!walletAddress || !type || !asset || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const validTypes = ["deposit", "withdrawal", "transfer_out", "transfer_in"];
    if (!validTypes.includes(type)) {
      return NextResponse.json({ error: "Invalid transaction type" }, { status: 400 });
    }

    let user = await db.select().from(users).where(eq(users.walletAddress, walletAddress)).limit(1);

    if (user.length === 0) {
      const result = await db.insert(users).values({ walletAddress }).returning();
      user = result;
    }

    const userId = user[0].id;

    const transaction = await db.insert(transactions).values({
      userId,
      txHash,
      type,
      asset,
      amount: parseFloat(amount),
      status: txHash ? "completed" : "pending",
      address: toAddress,
    }).returning();

    return NextResponse.json({ transaction: transaction[0] }, { status: 201 });
  } catch (error) {
    console.error("Transfer error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletAddress = searchParams.get("walletAddress");
    const txId = searchParams.get("id");

    if (txId) {
      const transaction = await db.select().from(transactions).where(eq(transactions.id, parseInt(txId))).limit(1);
      return NextResponse.json({ transaction: transaction[0] || null });
    }

    if (walletAddress) {
      const user = await db.select().from(users).where(eq(users.walletAddress, walletAddress)).limit(1);
      if (user.length === 0) {
        return NextResponse.json({ transactions: [] });
      }

      const txList = await db.select().from(transactions).where(eq(transactions.userId, user[0].id));
      return NextResponse.json({ transactions: txList });
    }

    return NextResponse.json({ error: "Provide walletAddress or id parameter" }, { status: 400 });
  } catch (error) {
    console.error("Get transaction error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}