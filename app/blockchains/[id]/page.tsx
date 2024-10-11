import { notFound } from 'next/navigation'
import BlockchainBanner from '@/components/BlockchainBanner'
import ResourceSection from '@/components/ResourceSection'

const blockchains = {
  bitcoin: {
    name: "Bitcoin",
    description: "Bitcoin is the first and most well-known cryptocurrency, created by an anonymous person or group under the pseudonym Satoshi Nakamoto in 2009. It introduced the concept of a decentralized digital currency that operates on a peer-to-peer network without the need for intermediaries. Bitcoin's blockchain technology has inspired numerous other cryptocurrencies and blockchain applications.",
    color: "bg-orange-500",
    textColor: "text-orange-950",
    logo: "bitcoin",
  },
  ethereum: {
    name: "Ethereum",
    description: "Ethereum is a decentralized, open-source blockchain featuring smart contract functionality, proposed in 2013 by programmer Vitalik Buterin. It provides a platform for developers to build and deploy decentralized applications (dApps) and has its own cryptocurrency called Ether (ETH). Ethereum's smart contracts have enabled the creation of decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and more.",
    color: "bg-blue-500",
    textColor: "text-blue-950",
    logo: "ethereum",
  },
  cardano: {
    name: "Cardano",
    description: "Cardano is a proof-of-stake blockchain platform founded by Charles Hoskinson, one of the co-founders of Ethereum. It focuses on sustainability, scalability, and transparency. Cardano aims to provide a more balanced and sustainable ecosystem for cryptocurrencies and is developed using peer-reviewed research and evidence-based methods.",
    color: "bg-teal-500",
    textColor: "text-teal-950",
    logo: "cardano",
  },
  polkadot: {
    name: "Polkadot",
    description: "Polkadot is a multi-chain network that allows various blockchains to transfer messages and value in a trust-free fashion, created by Ethereum co-founder Gavin Wood. It aims to solve the interoperability problem between different blockchains, allowing them to communicate and share information securely. Polkadot's architecture includes a main relay chain and multiple parallel chains called parachains.",
    color: "bg-pink-500",
    textColor: "text-pink-950",
    logo: "polkadot",
  },
  solana: {
    name: "Solana",
    description: "Solana is a high-performance blockchain supporting smart contracts and decentralized applications, known for its fast transaction speeds and low costs. It uses a unique combination of proof-of-stake and proof-of-history mechanisms to achieve high throughput and quick finality. Solana has gained popularity in the DeFi and NFT spaces due to its scalability and low transaction fees.",
    color: "bg-purple-500",
    textColor: "text-purple-950",
    logo: "solana",
  },
}

export function generateStaticParams() {
  return Object.keys(blockchains).map((id) => ({ id }))
}

export default function BlockchainPage({ params }: { params: { id: string } }) {
  const blockchain = blockchains[params.id as keyof typeof blockchains]

  if (!blockchain) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlockchainBanner {...blockchain} />

      <ResourceSection title="Websites" resources={[]} />
      <ResourceSection title="Articles" resources={[]} />
      <ResourceSection title="Social Media" resources={[]} />
      <ResourceSection title="Developer Resources" resources={[]} />
    </div>
  )
}