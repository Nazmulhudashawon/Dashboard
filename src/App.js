import Home from "./components/home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
