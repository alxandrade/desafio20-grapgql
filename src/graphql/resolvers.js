import { productService, userService } from "../services/index.service.js";

const resolvers = {
    Query:{
        getProducts: async () => {
            const products = await productService.get();
            return products 
        },

        getUsers: async () => {
            const users = await userService.get();
            return users
        }
    },

    Mutation: {
        registerUser: async(_, args) => {
            const user = {
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                password: args.password                
            }
            const result = await userService.save(user)
            return result
        }
    }
}

export default resolvers;