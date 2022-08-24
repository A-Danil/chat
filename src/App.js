import { Route, Routes } from 'react-router-dom';

import {Auth} from "pages";
import {Home} from "pages";


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="*" element={<Auth />}/>
        <Route path="/im" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;