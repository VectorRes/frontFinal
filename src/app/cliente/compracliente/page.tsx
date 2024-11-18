"use client";
import React, { useEffect, useState } from "react";
import OrganoList from "./OrganoList";
import { Organo } from "../types/types";

const OrganosPage: React.FC = () => {
  const [organos, setOrganos] = useState<Organo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrganos = async () => {
      try {
        const response = await fetch("http://localhost:3000/organos-disponibles"); // Endpoint para obtener los datos
        const data: Organo[] = await response.json();
        setOrganos(data);
      } catch (error) {
        console.error("Error fetching órganos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganos();
  }, []);

  if (loading) {
    return <p className="text-center">Cargando órganos...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="pt-6 text-3xl font-bold text-center mb-6">Lista de Órganos</h1>
      {organos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OrganoList organos={organos} />
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay órganos disponibles.</p>
      )}
    </div>
  );
};

export default OrganosPage;