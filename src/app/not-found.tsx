import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0f1a]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Could not find the requested resource
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-[#30C59B] to-[#00A3FF] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
