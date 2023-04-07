class OrdenPersistence {
    constructor(table) {
      this._table = table;
    }
  
    // Generar una Orden de Compra
    async generarOrdenCompra(user, products, total) {
      try {            

        console.log(user.user.first_name);

        const orden = await this._table.create({
          first_name: user.user.first_name,
          email: user.user.email,
          products: products,
          total: total,
        });

        return orden;
      } catch (error) {
        console.log(error);
      }
    }
  
    // Traer una Orden de Compra por su Id
    async traerOrdenbyId(idOrder) {
      try {
        const orden = await this._table.findById({ _id: idOrder }).lean();
        
        return orden
      } catch (error) {
        console.log(error);
      }
    }  
  }
  
  export default OrdenPersistence;  