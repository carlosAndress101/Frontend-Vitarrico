import Navbar from './components/sections/Navbar/Navbar';
import Customer from './components/pages/Customer';
import Orders from './components/pages/Orders';
import Products from './components/pages/Products';
import Providers from './components/pages/Providers';
import Vendors from './components/pages/Vendors';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' caseSensitive={false} element={<Navbar/>} />
        <Route path='/CUSTOMER' caseSensitive={false} element={<Customer/>}/>
        <Route path='/ORDERS' caseSensitive={false} element={<Orders/>}/>
        <Route path='/PRODUCTS' caseSensitive={false} element={<Products/>}/>
        <Route path='PROVIDERS' caseSensitive={false} element={<Providers/>}/>
        <Route path='VENDORS' caseSensitive={false} element={<Vendors/>}/>
      </Routes>
    </div>
  );
};

export default App;
