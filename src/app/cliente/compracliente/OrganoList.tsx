// src/components/OrganoList.tsx
import React from "react";
import OrganoItem from "./OrganoItem";
import { Organo } from "../types/types"; // Importando el tipo Organo

interface OrganoListProps {
  organos: Organo[];  // El prop 'organos' es un array de objetos de tipo Organo
}

const OrganoList: React.FC<OrganoListProps> = ({ organos }) => {
  return (
    <div className="organo-list">
      {organos.map((organo) => (
        <OrganoItem key={organo.id} organo={organo} /> // Usando el tipo Organo
      ))}
    </div>
  );
};

export default OrganoList;

