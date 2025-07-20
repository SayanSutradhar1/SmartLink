import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Shared/Footer.tsx";
import Loader from "./components/Shared/Loader.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Artist = lazy(() => import("./pages/Artist.tsx"));
const Song = lazy(() => import("./pages/Song.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"))
const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-gradient-to-br min-h-screen from-gray-900 via-black to-black/90 relative">
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:uniqueUsername" element={<Artist />} />
            <Route path="/songs/:trackName" element={<Song/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </main>
    </BrowserRouter>
  );
};

export default App;
