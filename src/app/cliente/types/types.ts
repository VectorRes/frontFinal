export interface Organo {
    id: string;         // Identificador único del órgano
    procedencia: string; // Procedencia o lugar de origen del órgano
    tipoOrgano: string;  // Tipo de órgano (testículo, riñón, etc.)
    precio: string;      // Precio del órgano como string (aunque en realidad podría ser un número, lo dejaremos como string para que coincida con los datos)
  }