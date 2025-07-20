const SongSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex items-center justify-between min-h-screen py-8 px-2 bg-gradient-to-b from-amber-900/20 via-black to-black animate-pulse">
        <div className="flex flex-col max-w-xl w-full m-auto">
          {/* Hero Section Skeleton */}
          <div className="relative flex flex-1 flex-col px-2 pb-8">
            {/* Hero Card */}
            <div className="relative">
              <div className="w-full h-56 bg-gray-800 rounded-t-2xl" />
              {/* Profile Image Skeleton */}
              <div className="absolute -bottom-8 left-3 md:left-5">
                <div className="w-28 h-28 lg:w-40 lg:h-40 bg-gray-700 rounded-2xl border-4 border-black" />
              </div>
              <div className="absolute right-0 -bottom-12">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
              </div>
            </div>
            {/* Song Info Skeleton */}
            <div className="mt-12">
              <div className="h-8 w-2/3 bg-gray-700 rounded mb-2" />
              <div className="flex gap-2 flex-wrap mb-2">
                <div className="h-4 w-20 bg-gray-800 rounded" />
                <div className="h-4 w-16 bg-gray-800 rounded" />
              </div>
              <div className="h-4 w-full bg-gray-800 rounded mb-2" />
              <div className="h-4 w-5/6 bg-gray-900 rounded" />
            </div>
          </div>
          {/* Streaming Platforms Skeleton */}
          <div className="px-2 space-y-3 pb-8 mt-8 overflow-y-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-14 bg-gray-800 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongSkeleton; 