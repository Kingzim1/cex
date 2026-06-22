import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Polygon CEX</h1>
        <p className="text-neutral-400 mb-6">Trade cryptocurrencies on Polygon Network</p>
        <Link href="/exchange" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium">
          Enter Exchange
        </Link>
      </div>
    </main>
  );
}
