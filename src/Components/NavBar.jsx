import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar(){
    return(
     <>
        <div className="flex px-4 justify-between items-center py-2 bg-slate-500">
            <Link to={"/"} className="navbar-brand text-white font-semibold text-xl p-2">GymRat</Link>
            <div className="flex space-x-5">
                <Link to={"/Home"} className="text-white font-semibold text-xl p-2">Inicio</Link>
                <Link to={"/SobreNosotros"} className="text-white font-semibold text-xl p-2">Sobre Nosotros</Link>
                <Link to={"/Productos"} className="text-white font-semibold text-xl p-2">Productos</Link>
                <Link to={"/Contacto"} className="text-white font-semibold text-xl p-2">Contacto</Link>
                <CartWidget />
            </div>
        </div>


     </>
    );
}