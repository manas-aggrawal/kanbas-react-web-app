import store from "./Kanbas/store";
import { Provider } from "react-redux";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Labs/*' element={<Labs />} />
            <Route path='/Kanbas/*' element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
