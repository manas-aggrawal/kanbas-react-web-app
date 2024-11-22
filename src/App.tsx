import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LabWork from "./Labs";
import Kanbas from "./Kanbas";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import HomePage from "./Homepage";

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Provider store={store}>
          <div>
            <Routes>
              {/* Default route to landing page */}
              <Route path='/' element={<HomePage />} />
              <Route
                path='/'
                element={<Navigate to='/Labs' replace={true} />}
              />

              {/* Route for LabWork */}
              <Route path='/Labs/*' element={<LabWork />} />

              {/* Route for Kanbas */}
              <Route path='/kanbas/*' element={<Kanbas />} />
            </Routes>
          </div>
        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
