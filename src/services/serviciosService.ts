import serviciosData from "@/data/servicios.json";

export interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  publicoObjetivo: string;
  imagen: string;
  duracion?: string;
  modalidad?: string;
}

export const getServicios = (): Servicio[] => {
  return serviciosData;
};
