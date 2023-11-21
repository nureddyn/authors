import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import Authors from "./pages/Authors";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/authors" element={<Authors/>} />
      </Routes>
    </div>
  )
}