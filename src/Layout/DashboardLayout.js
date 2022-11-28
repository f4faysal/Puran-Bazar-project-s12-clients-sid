import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const menuItem = (
    <>
      {/* <!-- Navbar menu content here --> */}
      <li className="btn btn-primary text-white rounded-3xl">
        {/* Shudhu user dekhbe */}
        <Link to={"/dashboard/my-orders"}> My orders</Link>
      </li>

      {true && (
        <>
          {isSeller && (
            <>
              <li className="btn btn-primary text-white rounded-3xl">
                {/* Shudhu sellar dekhbe */}
                <Link to={"/dashboard/add-a-product"}>Add A Product</Link>
              </li>
              <li className="btn btn-primary text-white rounded-3xl">
                <Link to={"/dashboard/my-product"}>My Products</Link>
              </li>
            </>
          )}
          {/* -----------------addmin view------------------ */}
          {isAdmin && (
            <>
              <li className="btn btn-primary text-white rounded-3xl">
                <Link to={'/dashboard/all-bauyers'}>All Buyers</Link>
              </li>
              <li className="btn btn-primary text-white rounded-3xl">
                <Link to={'/dashboard/all-sellers'}>All Sellers</Link>
              </li>
            </>
          )}
        </>
      )}
    </>
  );

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-secondary text-white mb-10">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"> Puran Bazar Dashboard </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menuItem}
              </ul>
            </div>
          </div>
          {/* <!-- Page content here -->? */}
        
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
