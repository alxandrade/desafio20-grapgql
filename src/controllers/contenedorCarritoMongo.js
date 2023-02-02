class ContenedorCarritoMongo {
    constructor(table) {
      this._table = table;
    }
  
    // Crear Carrito
    async crearCarrito(obj) {
      try {        
        const resultnvoCarrito = await this._table.insertOne(obj);               
        return resultnvoCarrito;
      } catch (error) {
        console.log(error.message);
      }      
    }
    
    // Listar TODOS los carritos existentes
    async listarCarritos() {
      try{
        return await this._table.find();
      } catch (error) {
        console.log(error.message);
      }        
    }

    // Listar un carrito de un ID en especifico
    async listarCarritoId(id) {
      try {
        return await this._table.findById({ _id: id });
      } catch (error) {
        return {
          status: "error",
          mensaje: "No existe el carrito con ese ID o es un formato invalido",
        };
      }
    }


    async agregarProducto(id, params) {
      try {
        let list = [];
        const dataObj = await this.getById(id);
        list.push(...dataObj.productos);
        list.push(params);
        return this._table.findByIdAndUpdate(id, { productos: list });
      } catch (error) {}
    }


    async deleteProducto(id, idProd) {
      try {
        let list = [];
        let newList = [];
        const dataObj = await this.getById(id);
        list.push(...dataObj.productos);
        for (let i = 0; i <= list.length - 1; i++) {
          if (list[i]._id.toString() != idProd) {
            newList.push(list[i]);
          }
        }
        return this._table.findByIdAndUpdate(id, { productos: newList });
      } catch (error) {
        console.log(error.message);
      }
    }


    async updateById(id, params) {
      try {
        return this._table.findByIdAndUpdate(id, { params });
      } catch (error) {
        console.log(error.message);
      }
    }

    
    async deleteById(id) {
      try {
        return this._table.findByIdAndDelete({ _id: id });
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export default ContenedorCarritoMongo;
  