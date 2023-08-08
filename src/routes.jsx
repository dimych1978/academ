import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MyTracks from "./pages/my-tracks/my-tracks";
import Login from "./pages/login/login";
import Hits from "./pages/hits";
import PlayDay from "./pages/playlist-day";
import Indi from "./pages/indi";

export const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/mytracks"} element={<MyTracks />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/indi"} element={<Indi />} />
        <Route path={"/playlist-day"} element={<PlayDay />} />
        <Route path={"/hits"} element={<Hits />} />
        <Route
          path={"*"}
          element={<div style={{ color: "red" }}>Page was not found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};
