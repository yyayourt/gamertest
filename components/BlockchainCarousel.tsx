"use client"

import * as React from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blockchains = [
  { id: "bitcoin", name: "Bitcoin", description: "The first and most well-known cryptocurrency", color: "bg-orange-500" },
  { id: "ethereum", name: "Ethereum", description: "A decentralized platform that runs smart contracts", color: "bg-blue-500" },
  { id: "cardano", name: "Cardano", description: "A proof-of-stake blockchain platform", color: "bg-teal-500" },
  { id: "polkadot", name: "Polkadot", description: "A multi-chain network for Web3", color: "bg-pink-500" },
  { id: "solana", name: "Solana", description: "A high-performance blockchain supporting smart contracts", color: "bg-purple-500" },
]

export default function BlockchainCarousel() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {blockchains.map((blockchain) => (
          <CarouselItem key={blockchain.id}>
            <Card className={`${blockchain.color}`}>
              <CardHeader>
                <CardTitle className="text-white">{blockchain.name}</CardTitle>
                <CardDescription className="text-white opacity-80">{blockchain.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white">Learn more about {blockchain.name} and its unique features.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <Link href={`/blockchains/${blockchain.id}`}>Explore {blockchain.name}</Link>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}