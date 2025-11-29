import { getProductos } from "../services/productosService";

describe("Servicio de productos", function () {
  it("define la función getProductos", function () {
    expect(typeof getProductos).toBe("function");
  });
});
