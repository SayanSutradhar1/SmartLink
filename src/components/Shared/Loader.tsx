const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-black/90 rounded-xl animate-in fade-in duration-500">
      <div className="flex flex-col items-center">
        {/* Animated Music Note */}
        <svg
          className="animate-bounce mb-4"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="24" fill="#222" />
          <path
            d="M32 12v18.5a4.5 4.5 0 1 1-2-3.7V16h-8v10.5a4.5 4.5 0 1 1-2-3.7V12a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
            fill="#3ccbc6"
          />
        </svg>
        <span className="text-gray-300 text-lg font-medium tracking-wide animate-pulse">Loading music vibes...</span>
      </div>
    </div>
  );
};

export default Loader; 