import Navbar from './components/sections/Navbar/Navbar';
import Customer from './components/pages/Customer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' caseSensitive={false} element={<Navbar/>} />
        <Route path='/CUSTOMER' caseSensitive={false} element={<Customer/>}/>
      </Routes>
    </div>
  );
};

export default App;
