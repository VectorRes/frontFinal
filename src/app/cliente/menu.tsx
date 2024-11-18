"use client";

import React from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <ul className="flex justify-around">
        <li>
          <Link href="/cliente/homecliente" className="hover:text-yellow-300 transition-colors">
            Home Cliente
          </Link>
        </li>
        <li>
          <Link href="/cliente/compracliente" className="hover:text-yellow-300 transition-colors">
            Comprar Cliente
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
