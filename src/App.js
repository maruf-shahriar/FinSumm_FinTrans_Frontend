import Home from "./Home";
import EngSumm from "./EngSumm";
import BanglaSumm from "./BanglaSumm";
import E2B from "./E2B";
import B2E from "./B2E";
import TextSummarizer from "./all";
import SideNav from "./SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Textbox from "./textbox";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/engSummary" element={<EngSumm />}></Route>
      <Route path="/banglaSummary" element={<BanglaSumm />}></Route>
      <Route path="/e2bTranslation" element={<E2B />}></Route>
      <Route path="/b2eTranslation" element={<B2E />}></Route>
      <Route path="/all" element={<TextSummarizer />}></Route>
      <Route path="/SideNav" element={<SideNav/>}></Route>
      <Route path="/textbox" element={<Textbox/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
