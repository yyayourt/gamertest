"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bitcoin, Ethereum, CircleDollarSign, Cpu, BarChart3, Clock } from 'lucide-react'

interface BlockchainBannerProps {
  name: string
  description: string
  color: string
  textColor: string
  logo: 'bitcoin' | 'ethereum' | 'cardano' | 'polkadot' | 'solana'
}

const logos = {
  bitcoin: Bitcoin,
  ethereum: Ethereum,
  cardano: CircleDollarSign,
  polkadot: Cpu,
  solana: BarChart3,
}

export default function BlockchainBanner({ name, description, color, textColor, logo }: BlockchainBannerProps) {
  const [stats, setStats] = useState({
    price: 0,
    marketCap: 0,
    volume: 0,
    supply: 0,
  })

  useEffect(() => {
    // Simulating API call to get real-time data
    const fetchData = () => {
      setStats({
        price: Math.random() * 10000,
        marketCap: Math.random() * 1000000000000,
        volume: Math.random() * 10000000000,
        supply: Math.random() * 100000000,
      })
    }

    fetchData()
    const interval = setInterval(fetchData, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const Logo = logos[logo]

  return (
    <Card className={`${color} ${textColor} mb-8`}>
      <CardContent className="p-6">
        <div className="flex h-[70vh]">
          <div className="w-[70%] pr-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold">{name}</h1>
              <div className="text-right">
                <p className="text-2xl font-semibold">${stats.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                <p className="text-sm opacity-80">Market Cap: ${stats.marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <p className="text-lg mb-4 flex-grow">{description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">24h Volume</p>
                <p>${stats.volume.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="font-semibold">Circulating Supply</p>
                <p>{stats.supply.toLocaleString(undefined, { maximumFractionDigits: 0 })} {name}</p>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col items-center">
            <Logo size={64} className="mb-4" />
            <Separator className="mb-4 w-full" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
              <p className="font-semibold">Price:</p>
              <p>${stats.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
              <p className="font-semibold">Market Cap:</p>
              <p>${stats.marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className="font-semibold">Volume:</p>
              <p>${stats.volume.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className="font-semibold">Supply:</p>
              <p>{stats.supply.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className="font-semibold">Difficulty:</p>
              <p>{(Math.random() * 10000).toFixed(2)}</p>
              <p className="font-semibold">Block Time:</p>
              <p>{(Math.random() * 60).toFixed(2)} s</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}