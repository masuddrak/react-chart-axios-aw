import { useState } from "react";
import Links from "./Links";
import { FaAlignJustify } from "react-icons/fa";

import { IoMdClose } from "react-icons/io";

const Navber = () => {
    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/contact", name: "Contact", id: 3 },
        { path: "/services", name: "Services", id: 4 },
        { path: "*", name: "NotFound", id: 5 } // "*" represents any unmatched path
    ];
const [open,setOpen]=useState(false)
console.log(open)
    return (
        <nav className="p-4 md:p-0">
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open?<IoMdClose />:<FaAlignJustify />
                }
                
            </div>
            <ul className={`md:flex gap-10 absolute md:static bg-slate-500 duration-1000 w-1/2  md:w-full ${open?"top-16":"-top-60"}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav>
    );
};

export default Navber;