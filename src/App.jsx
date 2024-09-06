import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { createContext } from 'react';
import Home from "./Components/Home";
import Hello from "./Components/Hello";
import Counter from './Components/Counter';
import Input from './Components/Input';

export const MyContext = createContext();
const h = "Hello";
const App = () => (
  <MyContext.Provider value={{h}}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/h' element={<Hello />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/i' element={<Input />} />
      </Routes>
    </Router>
  </MyContext.Provider>
)
export default App
