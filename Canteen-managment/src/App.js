import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
// import AuthContext from "./components/Context/AuthContext";
import Purchase from "./pages/Purchase/Purchase";
import Sell from "./pages/Sell/Sell";
import SellList from "./pages/Sell/SellList";
import PurchaseList from "./pages/Purchase/PurchaseList";
import Dashboard from "./pages/Dashboard/Dashboard";
import LogIn from "./pages/LogIn/LogIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Bill from "./pages/Bill/Bill";
import BillList from "./pages/Bill/BillList";
import ProductList from "./pages/ProductList/ProductList";
import AddProduct from "./pages/ProductList/AddProduct";
import Shoe from "./pages/Shoe/Shoe";
import ShoeList from "./pages/Shoe/ShoeList";
import UpdateShoe from "./pages/Shoe/UpdateShoe";
import AddUser from "./pages/User/AddUser";
import UserList from "./pages/User/UserList";
import UpdateUser from "./pages/User/UpdateUser";
import Stock from "./pages/Stock/Stock";
import UpdateProductList from "./pages/ProductList/UpdateProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="*" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="purchaselist" element={<PurchaseList />} />
            <Route path="sell" element={<Sell />} />
            <Route path="selllist" element={<SellList />} />
            <Route path="bill" element={<Bill />} />
            <Route path="billlist" element={<BillList />} />
            <Route path="shoe" element={<Shoe />} />
            <Route path="shoelist" element={<ShoeList />} />
            <Route path="updateshoe/:id" element={<UpdateShoe />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="updateuser" element={<UpdateUser />} />
            <Route path="stock" element={<Stock />} />

            <Route path="updateProductlist" element={<UpdateProductList />} />

            <Route
              path="updateProductlist/:id"
              element={<UpdateProductList />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
