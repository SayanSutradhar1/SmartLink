import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/context.tsx";

// const Home = lazy(() => import("./pages/Home.tsx"));
const Artist = lazy(() => import("./pages/Artist.tsx"));
const Song = lazy(() => import("./pages/Song.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"))
const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/:uniqueUsername" element={<Artist />} />
          <Route path="/songs/:trackName" element={<Song/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
