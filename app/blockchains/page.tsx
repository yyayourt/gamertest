import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blockchains = [
  { id: "bitcoin", name: "Bitcoin", description: "The first and most well-known cryptocurrency", color: "bg-orange-500" },
  { id: "ethereum", name: "Ethereum", description: "A decentralized platform that runs smart contracts", color: "bg-blue-500" },
  { id: "cardano", name: "Cardano", description: "A proof-of-stake blockchain platform", color: "bg-teal-500" },
  { id: "polkadot", name: "Polkadot", description: "A multi-chain network for Web3", color: "bg-pink-500" },
  { id: "solana", name: "Solana", description: "A high-performance blockchain supporting smart contracts", color: "bg-purple-500" },
]

export default function Blockchains() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Blockchains</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blockchains.map((blockchain) => (
          <Card key={blockchain.id} className={`${blockchain.color}`}>
            <CardHeader>
              <CardTitle className="text-white">{blockchain.name}</CardTitle>
              <CardDescription className="text-white opacity-80">{blockchain.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary">
                <Link href={`/blockchains/${blockchain.id}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}