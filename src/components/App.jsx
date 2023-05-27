import  { SharedLayout } from './SharedLayout/SharedLayout';
import  Home   from './pages/home'
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <>
  
      <Routes>

      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<div></div>} />
        <Route path="/movies/:movieId" element={<div>movies/:movieId</div>} />
        <Route path="cast" element={<div>Cast</div>} />
        <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Routes>
    </>
  );
};
  
   

