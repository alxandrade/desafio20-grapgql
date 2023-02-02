class ContenedorProductosMongo {
    constructor(table) {
      this._table = table;
    }
    
    // Listar TODOS los productos
    async listarProductos() {
      return await this._table.find();
    }

    // Listar un producto enviando su Id
    async listarProductoPorId(id) {
      try {
        return await this._table.find({ _id: id });
      } catch (error) {
        return {
          status: "error",
          mensaje: "No existe producto con ese ID o es un formato invalido",
        };
      }
    }
    
    // Insertar un Producto en la Tabla productos
    async insertarProductos(obj) {
      try {        
        const resultnvoProducto = await this._table.insertOne(obj);               
        return resultnvoProducto;
      } catch (error) {
        console.log(error.message);
      }
    }
    
    // Actualizar los datos de un producto de un Id especifico
    async actualizarProductoId(id, params) {
      try {
        return this._table.findByIdAndUpdate(id, { params });
      } catch (error) {
        console.log(error.message);
      }
    }
    
    // Borrar un producto de la tabla productos enviando su Id
    async borrarProductoPorId(id) {
      try {
        return this._table.findByIdAndDelete({ _id: id });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export default ContenedorProductosMongo;
  