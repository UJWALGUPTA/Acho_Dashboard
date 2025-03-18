import { Card, CardContent } from "@/components/ui/card"

export default function CommunityCardSkeleton() {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-800 animate-pulse" />
          <div className="flex-1">
            <div className="h-4 w-2/3 bg-gray-800 rounded animate-pulse mb-2" />
            <div className="h-3 w-1/2 bg-gray-800 rounded animate-pulse" />
          </div>
          <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  )
}

