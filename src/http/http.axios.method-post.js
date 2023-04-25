import axios from "axios";

(async () => {
  try {
    const data = {
        codigo: "Tenis",
        descripcion: "NOOKNAK Tenis de correr para hombre, cómodos, ligeros, transpirables, antideslizantes, casuales, con suela suave",
        precio: 899,
        stock:100,
        foto: "https://m.media-amazon.com/images/I/71nixgRm1iL._AC_SL1500_.jpg",
    };
    const response = await axios.request({
      baseURL: `http://localhost:8080/`,
      url: "api/productos",
      proxy: undefined,
      method: "POST",
      data: data,
    });
           
    console.log({ statusResponse: response.status });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
})();
