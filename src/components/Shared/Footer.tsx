export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center md:flex-row items-center">
          {/* Company Logo/Name */}
          <div className="flex items-center  space-x-3 mb-4 md:mb-0">
            <div>
              <h3 className="text-gray-400 font-thin">Powered By <span className="text-white font-semibold">SwaLay</span></h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
