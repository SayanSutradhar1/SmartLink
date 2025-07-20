import { SWALAY_MAIN } from "@/utils/constants";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <>
      <Helmet>
        <title>SwaLay SmartLink</title>
        <meta name="description" content="SwaLay SmartLink is your all-in-one music landing page. Share a single link and let your fans discover your songs, albums, and streaming platforms—everywhere, instantly." />
        <meta name="keywords" content="SwaLay SmartLink, music, landing page, streaming platforms, artist, label" />
        <meta name="author" content="SwaLay" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3ccbc6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-amber-900/20 via-black to-black">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black/80 to-black/90 z-10" />

        {/* Glassmorphism Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-20 w-full max-w-[1000px] mx-auto">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 md:p-16 flex flex-col items-center w-full animate-in fade-in duration-700" style={{ boxShadow: '0 8px 40px 0 #0008' }}>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
              Unlock Your <span className="text-[#3ccbc6]">Music Universe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              One Link. Every Platform. Infinite Reach.
            </h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
              <span className="font-bold text-white">SwaLay SmartLink</span> is your all-in-one music landing page. Share a single link and let your fans discover your songs, albums, and streaming platforms—everywhere, instantly. <br className="hidden md:block" />
              <span className="text-[#3ccbc6] font-semibold">Grow your audience. Simplify your sharing. Stand out as an artist or label.</span>
            </p>
            <Link
              to={SWALAY_MAIN}
              target="_blank"
              className="bg-[#3ccbc6] hover:bg-[#2aaea0] text-black font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-200"
              style={{ boxShadow: '0 4px 32px 0 #3ccbc688' }}
            >
              swalay.talantoncore.in
            </Link>
            <div className="mt-8 text-gray-300 text-sm">
              Try <span className="bg-gray-800 px-2 py-1 rounded text-white">/artistusername</span> in the URL to see a live SmartLink!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;