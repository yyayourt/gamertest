import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import BlockchainCarousel from "@/components/BlockchainCarousel"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Blockchain Explorer</CardTitle>
          <CardDescription>Discover the world of blockchain technologies</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Blockchain Explorer is your gateway to understanding the revolutionary world of blockchain technology. We provide comprehensive information on various blockchain platforms, helping you navigate through the complexities of this innovative field.
          </p>
          <Button asChild>
            <Link href="/blockchains">Explore Blockchains</Link>
          </Button>
        </CardContent>
      </Card>

      <BlockchainCarousel />
    </div>
  );
}