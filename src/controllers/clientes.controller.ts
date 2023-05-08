import { Request, Response } from "express";
import { Service } from "typedi";
import { HTTP_CODES } from "../constants/http-codes";
import { Controller } from "../decorators/controller.decorator";
import { Get } from "../decorators/router.decorator";
import { ClientesService } from "../services/clientes.service";

@Controller("/clientes")
@Service()
export default class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Get("/:id_cliente/contratos")
  async getContratos(req: Request, res: Response) {
    try {
      const { data } = await this.clientesService.getContratos(
        req.params.id_cliente
      );
      res.send(data);
    } catch (error: any) {
      res
        .status(error.statusCode || HTTP_CODES.INTERNAL_SERVER_ERROR)
        .send({ message: error.message });
    }
  }
}
