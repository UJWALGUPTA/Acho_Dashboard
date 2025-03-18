import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommunityCard from "./community-card"

const communities = [
  {
    name: "Crypto Traders Hub",
    logo: "/placeholder.svg?height=100&width=100",
    members: "25.5K",
    category: "Cryptocurrency",
  },
  {
    name: "Tech Innovators",
    logo: "/placeholder.svg?height=100&width=100",
    members: "18.2K",
    category: "Technology",
  },
  {
    name: "Digital Artists United",
    logo: "/placeholder.svg?height=100&width=100",
    members: "12.8K",
    category: "Art & Design",
  },
  {
    name: "Web3 Developers",
    logo: "/placeholder.svg?height=100&width=100",
    members: "15.3K",
    category: "Development",
  },
  {
    name: "DeFi Analytics",
    logo: "/placeholder.svg?height=100&width=100",
    members: "20.1K",
    category: "Finance",
  },
  {
    name: "NFT Collectors",
    logo: "/placeholder.svg?height=100&width=100",
    members: "22.7K",
    category: "NFTs",
  },
]

export default function CommunitySection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Communities</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Discover thriving Telegram communities leveraging Younity AI for enhanced monetization strategies.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community, index) => (
          <CommunityCard
            key={index}
            name={community.name}
            logo={community.logo}
            members={community.members}
            category={community.category}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
          View All Communities
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

