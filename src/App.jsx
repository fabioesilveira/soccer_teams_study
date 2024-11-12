import { Route, Routes } from "react-router-dom";
import Teams from "./pages/teams";
import Team from "./pages/team";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Teams />} />
      <Route path="/team/:id" element={< Team />} />
    </Routes>
  )
}

export default App;
