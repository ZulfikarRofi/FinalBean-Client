import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';

//pages here!
import Landing from "./pages/Landing";
import Detail from "./pages/Detail";
import ListProduct from "./pages/ListProduct";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/list-product" element={<ListProduct />} />
      <Route exact path="/user/:id" element={<Profile />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/add-product" element={<AddProduct />} />
      <Route exact path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
