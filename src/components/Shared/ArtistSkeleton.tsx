const ArtistSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900/20 via-black to-black text-white max-w-md mx-auto lg:max-w-lg xl:max-w-xl flex flex-col animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative h-100 overflow-hidden">
        <div className="absolute w-full inset-0 bg-gray-800/60 h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="h-8 w-2/3 bg-gray-700 rounded mb-2" />
        </div>
      </div>
      <div className="px-6">
        {/* Bio Section Skeleton */}
        <div className="pb-3">
          <div className="h-4 w-full bg-gray-800 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-800 rounded mb-4" />
          {/* Social Icons Skeleton */}
          <div className="flex gap-4 mb-4">
            <div className="w-10 h-10 bg-gray-700 rounded-full" />
            <div className="w-10 h-10 bg-gray-700 rounded-full" />
            <div className="w-10 h-10 bg-gray-700 rounded-full" />
          </div>
        </div>
        {/* Popular Section Skeleton */}
        <div className="pb-3">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-24 bg-gray-700 rounded" />
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 group p-2 rounded-lg">
                <div className="w-12 h-12 bg-gray-700 rounded object-cover" />
                <div className="flex-1">
                  <div className="h-4 w-2/3 bg-gray-800 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-gray-900 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Singles Section Skeleton */}
        <div className="pb-3">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-24 bg-gray-700 rounded" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 ">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative mb-2 ">
                  <div className="aspect-square w-full bg-gray-700 rounded object-cover" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="h-3 w-full bg-gray-800 rounded mb-1" />
                <div className="h-2 w-2/3 bg-gray-900 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Albums Section Skeleton */}
        <div className="pb-3">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-24 bg-gray-700 rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 w-full cursor-pointer gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="relative mb-2">
                  <div className="w-full aspect-square bg-gray-700 rounded object-cover" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="h-4 w-2/3 bg-gray-800 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistSkeleton; 