import passport from "passport";
import local from "passport-local";
import { userSchema } from "../models/modeloUser.js";
import { createHash, isValid } from "../utils/bcrypt.js";

const LocalStrategy = local.Strategy;

export const initializePassport = () => {
  passport.use(
    "login",
    new LocalStrategy({usernameField:'email'}, async (email, password, done) => {
      if(!email||!password) return done(null,false,{message:"Valores incompletos"});
      let user = await userSchema.findOne({ email });
      if (!user) return done(null, false, { message: "No existe usuario regitrado con ese Email" });
      const isValidPassword = await isValid(user.password,password);
      if (!isValidPassword) return done(null, false, { message: "Contraseña incorrecta" });
      return done(null, user);      
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    userSchema.findById(id, done);
  });

  
};
