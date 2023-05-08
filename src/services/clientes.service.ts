import axios from "axios";
import { Service } from "typedi";
import { ContratoDTO, ResponseData } from "../dtos/contrato.dto";

@Service()
export class ClientesService {
  async getContratos(idCliente: string): Promise<ResponseData<ContratoDTO[]>> {
    return axios.get(`http://localhost:3003/clientes/${idCliente}/contratos`);
  }
}
