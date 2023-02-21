import bcrypt from "bcrypt";

export const createHash = async (password) => {    
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const isValid = async (passwordUser, password) => {    
    return bcrypt.compare(password, passwordUser);
}
