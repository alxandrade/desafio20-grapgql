import supertest from "supertest";
import { expect } from "chai";

const request = supertest(`http://localhost:8080`);

let testID = "63c4379fcf23ee959d49b3e4";
let testIDfalse = "63c4379fcf23ee959d49b3e4false";
let exampleProduct = [
  {
    // Producto a Insertar
    codigo: "Tenis",
    descripcion: "NOOKNAK Tenis de correr para hombre, cómodos, ligeros, transpirables, antideslizantes, casuales, con suela suave",
    precio: 899,
    stock:100,
    foto: "https://m.media-amazon.com/images/I/71nixgRm1iL._AC_SL1500_.jpg",
  },
  {
    // Producto que faltan datos
    codigo: "Tenis",
    precio: 1500,
  },
  {
    // Producto a modificar
    codigo: "Tenis Hombre",
    descripcion: "NOOKNAK Tenis de correr para hombre, cómodos, ligeros, transpirables, antideslizantes, casuales, con suela suave",
    precio: 999,
    stock:50,
    foto: "https://m.media-amazon.com/images/I/81NcIszayFL._AC_SL1500_.jpg",
  },
];

describe("Test API REST FULL", () => {
  describe("GET /api/productos", () => {
    it("La peticion deberia retornar status 200 y retornar todos los productos", async () => {
      let res = await request.get("/api/productos");
      console.log(res.status);
      expect(res.status).to.equal(200);
    });
  });

  describe("GET-BY-ID /api/productos/:id", () => {
    it("Envio de ID Valido: Retorna status 200 y retorna el producto", async () => {
      let res = await request.get(`/api/productos/${testID}`);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido: Retorna status 400 y mensaje de error", async () => {
      let res = await request.get(`/api/productos/${testIDfalse}`);
      expect(res.status).to.equal(400);
      expect(res.body).to.include.keys("message");
    });
  });

  describe("POST /api/productos", () => {
    it("Parametros correctos: Retorna status 201 y guarda el producto", async () => {
      let res = await request.post("/api/productos").send(exampleProduct[0]);
      expect(res.status).to.equal(201);
      const resBody = res.body;
      expect(resBody).to.include.keys("codigo", "descripcion", "precio", "stock", "foto", "_id");
      testID = res.body._id;
    });
    it("Parametros incorrectos/faltantes: Retorna status 400 y mensaje de error", async () => {
      let res = await request.post("/api/productos").send(exampleProduct[1]);
      expect(res.status).to.equal(400);
      expect(res.body).to.include.keys("message");
    });
  });

  describe("PUT /api/productos/:id", () => {
    it("Envio de ID Valido: Retornar status 200 y retornar el producto modificado", async () => {
      let res = await request.put(`/api/productos/${testID}`).send(exampleProduct[2]);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido o no encuentra el producto: Retornar status 204 y mensaje de error", async () => {
      let res = await request.put(`/api/productos/${testIDfalse}`).send(exampleProduct[1]);
      expect(res.status).to.equal(204);
    });
  });

  describe("DELETE /api/productos/:id", () => {
    it("Envio de ID Valido: Retornar status 200 y haber eliminado el producto", async () => {
      let res = await request.delete(`/api/productos/${testID}`);
      expect(res.status).to.equal(200);
    });
    it("Envio de ID Invalido o no existe el producto: Retorna status 204 y mensaje de error", async () => {
      let res = await request.delete(`/api/productos/${testIDfalse}`);
      expect(res.status).to.equal(204);
    });
  });
});
