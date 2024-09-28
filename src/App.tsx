import Labs from "./Labs";
import { HashRouter, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import HomePage from "./Homepage";
export default function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
            {/* <Route path='/' element={<Navigate to='kanbas' />} /> */}
            {/* <Route path='/' element={<Navigate to='homepage' />} /> */}
            <Route path='/' element={<HomePage />} />
            <Route path='/Labs/*' element={<Labs />} />
            <Route path='/Kanbas/*' element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
