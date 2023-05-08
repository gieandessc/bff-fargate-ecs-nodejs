declare namespace Express {
  export interface Request {
    cliente?: { cnpj: string };
  }
}
