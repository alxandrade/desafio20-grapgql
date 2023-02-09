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
        const resultnvoProducto = await this._table.create(obj);               
        return resultnvoProducto;
      } catch (error) {
        console.log(error.message);
      }
    }
    
    // Actualizar los datos de un producto de un Id especifico
    actualizarProductoId(id, params) {      
      let {codigo, descripcion, precio,stock,foto} = params;

      const resultado = this._table.updateOne({ _id: id }, 
        {$set: { codigo, descripcion, precio,stock,foto}},
        function(error, info) {
          if (error) {
            return true
          } else {
            return false
          }
        })        
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
  