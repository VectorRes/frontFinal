// OrganoItem.tsx
import React from "react";
import { Organo } from "../types/types"; // Ajusta la ruta según tu estructura

interface OrganoItemProps {
  organo: Organo;
}

const OrganoItem: React.FC<OrganoItemProps> = ({ organo }) => {
  return (
    <div className="organo-item">
      <h3>{organo.tipoOrgano.toUpperCase()}</h3>
      <p>
        <strong>Procedencia:</strong> {organo.procedencia}
      </p>
      <p>
        <strong>Precio:</strong> ${organo.precio} USD
      </p>
    </div>
  );
};

export default OrganoItem;
