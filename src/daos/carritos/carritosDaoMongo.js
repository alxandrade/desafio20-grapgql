import Manager from "../../controllers/contenedorCarritoMongo.js";
import { carritosSchema } from "../../models/modeloCarritos.js";

export class CarritosDaoMongo extends Manager {
  constructor() {
    super(carritosSchema);
  }
}
