"use client";

import React, { useState } from "react";

const AgregarOrgano: React.FC = () => {
  // Estados para almacenar los valores de los campos
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");

  const handleAgregar = () => {
    // Lógica para manejar el evento del botón (puedes personalizar esto)
    alert(`Órgano agregado: \nNombre: ${campo1}\nTipo: ${campo2}\nDescripción: ${campo3}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Agregar Órgano</h1>

      <div className="w-full max-w-md space-y-4">
        {/* Campo 1 */}
        <div className="flex items-center">
          <label className="w-32 text-gray-700 font-medium">Procedencia:</label>
          <input
            type="text"
            placeholder="Ingrese la procedencia"
            className="flex-1 p-3 border text-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={campo1}
            onChange={(e) => setCampo1(e.target.value)}
          />
        </div>

        {/* Campo 2 */}
        <div className="flex items-center">
          <label className="w-32 text-gray-700 font-medium">Tipo:</label>
          <input
            type="text"
            placeholder="Ingrese el tipo"
            className="flex-1 p-3 border text-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={campo2}
            onChange={(e) => setCampo2(e.target.value)}
          />
        </div>

        {/* Campo 3 */}
        <div className="flex items-center">
          <label className="w-32 text-gray-700 font-medium">Precio:</label>
          <input
            type="text"
            placeholder="Ingrese el precio"
            className="flex-1 p-3 border text-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={campo3}
            onChange={(e) => setCampo3(e.target.value)}
          />
        </div>

        {/* Botón */}
        <button
          onClick={handleAgregar}
          className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Agregar Órgano
        </button>
      </div>
    </div>
  );
};

export default AgregarOrgano;
