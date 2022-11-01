import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo (6).png";
import dashboardIcon from "../images/ic_dashboard.svg";
import wallet from "../images/ic_wallet.svg";
import transactioin from "../images/ic_transcation.svg";
import invoices from "../images/ic_invoices.svg";
import cardIcocn from "../images/ic_card.svg";

const Dashboard = () => {
  return (
    <div>
      <div className="invoice-container">
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col  ">
            {/* Page content here */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <div className="mb-12 mt-9">
                <Link to="/">
                  {" "}
                  <img src={logo} alt="" />
                </Link>
              </div>
              <p className="text-dark text-lg leading-[25px] font-bold mb-8">
                Main Menu
              </p>
              {/* Sidebar content here  */}
              {/* <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li> */}
              <li>
                {" "}
                <Link className="flex gap-6 items-center ">
                  <span>
                    <img src={dashboardIcon} alt="" />
                  </span>
                  <span className="text-lg leading-[25px] text-gray-20 font-bold">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                {" "}
                <Link className="flex gap-6 items-center ">
                  <span>
                    <img src={wallet} alt="" />
                  </span>
                  <span className="text-lg leading-[25px] text-gray-20 font-bold">
                    My Wallet
                  </span>
                </Link>
              </li>
              <li>
                <Link className="flex gap-6 items-center ">
                  <span>
                    <img src={transactioin} alt="" />
                  </span>
                  <span className="text-lg leading-[25px] text-gray-20 font-bold">
                    Transactions
                  </span>
                  <span className="bg-primary text-sm  font-bold text-[#FBFBFB] rounded-full py-[6px] px-[7px]">
                    75
                  </span>
                </Link>
              </li>
              <li>
                {" "}
                <NavLink to="invoices" className="flex gap-6 items-center ">
                  <span>
                    <img src={invoices} alt="" />
                  </span>
                  <span className="text-lg leading-[25px] text-gray-20 font-bold">
                    Invoices
                  </span>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="cards" className="flex gap-6 items-center ">
                  <span>
                    <img src={cardIcocn} alt="" />
                  </span>
                  <span className="text-lg leading-[25px] text-gray-20 font-bold">
                    Cards
                  </span>
                </NavLink>
              </li>
              {/* <NavLink>Home</NavLink> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
