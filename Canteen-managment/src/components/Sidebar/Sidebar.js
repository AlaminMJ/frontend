import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BiHomeAlt, BiFoodMenu } from "react-icons/bi";
// import { BsFolder } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineLocalPrintshop
} from "react-icons/md";
import { IoSettingsOutline, IoBookOutline } from "react-icons/io5";
import {
  AiOutlinePieChart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineLineChart,
  AiOutlineUser
} from "react-icons/ai";

const Sidebar = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [showSell, setShowSell] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showShoe, setShowShoe] = useState(false);
  const showSubmenu = (field) => {
    if (field === "sell") {
      setShowSell(!showSell);
    } else if (field === "purchase") {
      setShowPurchase(!showPurchase);
    } else if (field === "report") {
      setShowReport(!showReport);
    } else if (field === "product") {
      setShowProduct(!showProduct);
    } else if (field === "bill") {
      setShowBill(!showBill);
    } else if (field === "menu") {
      setShowMenu(!showMenu);
    } else if (field === "user") {
      setShowUser(!showUser);
    } else if (field === "shoe") {
      setShowShoe(!showShoe);
    }
  };
  return (
    <div className="l-navbar">
      <nav className="side_nav">
        <div>
          <div className="nav_list">
            <Link to="/" className="nav_link">
              <BiHomeAlt className="nav_icon" />
              <span>Dashboard</span>
            </Link>
            <Link to="/stock" className="nav_link">
              <AiOutlineLineChart className="nav_icon" />
              <span>Stock</span>
            </Link>

            <div className="nav_link collaps ">
              <IoBookOutline className="nav_icon" />
              <span>Products</span>
              <MdOutlineKeyboardArrowDown
                className="collapse__link "
                size={14}
                onClick={() => {
                  showSubmenu("product");
                }}
              />
              <div
                className={
                  showProduct ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/addproduct" className="collapse__sublink">
                  Add Product
                </Link>
                <Link to="/productlist" className="collapse__sublink">
                  Product List
                </Link>
              </div>
            </div>
            <div className="nav_link collaps ">
              <AiOutlineShoppingCart className="nav_icon" />
              <span>Purchase</span>
              <MdOutlineKeyboardArrowDown
                className="collapse__link "
                size={14}
                onClick={() => {
                  showSubmenu("purchase");
                }}
              />
              <div
                className={
                  showPurchase ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/purchase" className="collapse__sublink">
                  Purchase
                </Link>
                <Link to="/purchaselist" className="collapse__sublink">
                  Purchase List
                </Link>
                <Link to="/" className="collapse__sublink">
                  Return
                </Link>
                <Link to="/" className="collapse__sublink">
                  Return List
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <AiOutlineShopping className="nav_icon" />
              <span>Sell</span>
              <MdOutlineKeyboardArrowDown
                size={11}
                className="collapse__link"
                onClick={() => {
                  showSubmenu("sell");
                }}
              />
              <div
                className={
                  showSell ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/sell" className="collapse__sublink">
                  Sell
                </Link>
                <Link to="/selllist" className="collapse__sublink">
                  Sell List
                </Link>
                <Link to="/" className="collapse__sublink">
                  Return
                </Link>
                <Link to="/" className="collapse__sublink">
                  Return List
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <BiFoodMenu className="nav_icon" />
              <span>Food Menu</span>
              <MdOutlineKeyboardArrowDown
                size={11}
                className="collapse__link"
                onClick={() => {
                  showSubmenu("menu");
                }}
              />
              <div
                className={
                  showMenu ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/addmenu" className="collapse__sublink">
                  Add Menu
                </Link>
                <Link to="/break" className="collapse__sublink">
                  Breakfast Menu
                </Link>
                <Link to="/billlist" className="collapse__sublink">
                  O.T Menu
                </Link>
                <Link to="/billlist" className="collapse__sublink">
                  Launch Menu
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <AiOutlinePieChart className="nav_icon" />
              <span>Bill</span>
              <MdOutlineKeyboardArrowDown
                size={11}
                className="collapse__link"
                onClick={() => {
                  showSubmenu("bill");
                }}
              />
              <div
                className={
                  showBill ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/bill" className="collapse__sublink">
                  Bill
                </Link>
                <Link to="/billlist" className="collapse__sublink">
                  Bill List
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <MdOutlineLocalPrintshop className="nav_icon" />
              <span>Reports</span>
              <MdOutlineKeyboardArrowDown
                className="collapse__link"
                onClick={() => {
                  showSubmenu("report");
                }}
              />
              <div
                className={
                  showReport ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/" className="collapse__sublink">
                  Meal Rate
                </Link>
                <Link to="/" className="collapse__sublink">
                  Officer Breakfast
                </Link>
                <Link to="/" className="collapse__sublink">
                  Snack for O.T
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <AiOutlineUser className="nav_icon" />
              <span>Users</span>
              <MdOutlineKeyboardArrowDown
                className="collapse__link"
                onClick={() => {
                  showSubmenu("user");
                }}
              />
              <div
                className={
                  showUser ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/adduser" className="collapse__sublink">
                  Add user
                </Link>
                <Link to="/userlist" className="collapse__sublink">
                  User List
                </Link>
              </div>
            </div>
            <div className="nav_link collaps">
              <AiOutlineUser className="nav_icon" />
              <span>Shoe</span>
              <MdOutlineKeyboardArrowDown
                className="collapse__link"
                onClick={() => {
                  showSubmenu("shoe");
                }}
              />
              <div
                className={
                  showShoe ? "collapse__menu active" : "collapse__menu"
                }
              >
                <Link to="/shoe" className="collapse__sublink">
                  Shoe
                </Link>
                <Link to="/shoelist" className="collapse__sublink">
                  shoe List
                </Link>
              </div>
            </div>
            <Link to="/" className="nav_link">
              <IoSettingsOutline className="nav_icon" />
              <span>Setting</span>
            </Link>
          </div>
          {/* log out */}
          <div>
            <Link to="/" className="nav_link">
              <FiLogOut className="nav_icon" />
              <span>log Out</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
