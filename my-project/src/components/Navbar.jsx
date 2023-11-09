import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar flex justify-between   h-20 p-5  ">
                <div className="flex ml-10 ">
                    <img src="./asset/react.svg" alt="image load here" />

                </div>
                <ul className="flex gap-20 text-lg  ">

                    <li className="rounded-xl w-20 pl-2 pt-1"><Link to="/Product" >Product</Link></li>
                    <li className="rounded-xl w-20 pl-2 pt-1"> <Link to="/Client">Client</Link></li>
                    <li className="rounded-xl w-40 pl-2 pt-1"> <Link to="/Creative">Creative Gallery</Link></li>
                    <li className="rounded-xl w-20 pl-2 pt-1"> <Link to="/Resourse">Resourse</Link></li>
                    <li className="rounded-xl  w-35 pl-2 pt-1"> <Link to="/Company">Company</Link></li>
                </ul>
                <button className="flex text-lg rounded-xl h-15 bg-blue-200 pt-1 w-40  justify-center">Login</button>
            </div>


        </React.Fragment>
    );
}
export default Navbar;