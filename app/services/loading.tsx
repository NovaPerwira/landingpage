import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f9f9]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-12 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>
            <div className="relative h-[300px]">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tiles Skeleton */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-40 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section Skeleton */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-1/2" />
                  <Skeleton className="h-24 w-full" />
                </div>
                {index % 2 === 0 && <Skeleton className="h-48 w-full rounded-lg" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Skeleton */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-1/3 mx-auto" />
            <Skeleton className="h-8 w-1/4 mx-auto mt-2" />
            <Skeleton className="h-4 w-1/5 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-96 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
