import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Service Not Found</h2>
        <p className="text-gray-400 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
            <Link href="/services">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Services
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Link href="/">
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
