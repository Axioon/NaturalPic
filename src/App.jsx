import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState,Context } from "react";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import ImageProvider from "./context/ImagesContext";


const App = () => {
  return (
    


<div>
<Navbar />

<Routes>
  <Route
    path="/"
    element={<Home />}
  />
  <Route
    path="/favoritos"
    element={<Favorites />}
  />
</Routes>
</div>



  );
};
export default App;
