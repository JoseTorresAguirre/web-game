import React from "react";
import { FaQuestion, FaRegUser } from "react-icons/fa"; // Usa FaComments en lugar de FaForum
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import logo2 from "../assets/logo2.png";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      {/* Primera fila: Iconos y logo */}
      <div className="h-[12vh]">
        <section className="flex h-[50%] bg-[#10024D] justify-end items-center px-[5vw]">
          <div className="flex ">
            <div className="flex justify-end items-center space-x-6 mr-8 text-white">
              <FaRegUser size={24} />
              <FaQuestion size={24} />
            </div>
            <div>
              <img src={logo2} alt="Logo2" className="h-12" />
            </div>
          </div>
        </section>

        {/* Segunda fila: Menú de navegación y botón */}
        <section className="flex h-[50%] justify-between items-center bg-[#1B0289] px-[5vw]">
          <div>
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <div className="flex space-x-6">
            {/* Enlaces de navegación usando Link */}
            <nav className="flex space-x-6">
              <Link
                to="/"
                className="cursor-pointer text-white hover:text-yellow-500"
              >
                Home
              </Link>
              <Link
                to="/foro"
                className="cursor-pointer text-white hover:text-yellow-500"
              >
                Foro
              </Link>
              <Link
                to="/noticias"
                className="cursor-pointer text-white hover:text-yellow-500"
              >
                Noticias
              </Link>
              <Link
                to="/tienda"
                className="cursor-pointer text-white hover:text-yellow-500"
              >
                Tienda
              </Link>
            </nav>
          </div>
          <div>
            <Link
              className="bg-[#2CD4E1] text-[#1B0089 font-semibold] py-2 px-20 rounded hover:bg-yellow-400"
              to="/login"
            >
              Juega ya
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NavBar;
