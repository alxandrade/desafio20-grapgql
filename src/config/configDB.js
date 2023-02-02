
// Creamos el string connection a las diferentes Bases de Datos

export const configMysql = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce",
  },
  pool: { min: 0, max: 7 },
};

