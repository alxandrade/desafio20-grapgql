const typeDefs = `#graphql

    type Product {
        _id: ID
        codigo: String
        descripcion: String
        precio: Float
        stock: Int
        foto: String
    }

    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        avatar: String        
    }

    type Query {        
        getProducts: [Product]
        getUsers: [User]
    }

    type Mutation {
        registerUser(first_name: String, last_name: String, email: String, password: String): User
    }

`;

export default typeDefs;