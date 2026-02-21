export interface Program {
  id: number;
  name: string;
  price_per_year: number;
  /** Backend returns "Thesis" or "Without Thesis" */
  is_thesis?: string;
  degree: {
    id: number;
    name: string;
  };
  faculty: {
    id: number;
    name: string;
  };
}
