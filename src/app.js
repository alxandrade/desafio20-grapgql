import express from "express";
import cors from "cors";
import msgFlash from "connect-flash";
import http from "http";
import serverRoutes from "./routes/index.js";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.js';
import userRouter from './routes/auth/sessions.js';
import { initializePassport } from "./strategies/passport.strategy.js";
import passport from "passport";
import indexRouter from "./routes/index.routes.js";
import randomsRouter from "./routes/yargs/randoms.routes.js";
//import Socket from "./utils/sockets/index.js";

const app = express();
const PORT = process.env.PORT || 8080;
// Servidores
/* 1. HTTP SERVER */
const httpServer = http.createServer(app);

/* 2. Servidor WebSocket */
//const socket = new Socket(httpServer);
//socket.init();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(msgFlash());

app.use(session({
    store: MongoStore.create({mongoUrl:"mongodb://localhost:27017/ecommerce"}),
    key: "user_sid",
    secret: 'C0ntr4s3n4',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:600000, //10 min
    },
}));

initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.engine('hbs',handlebars.engine({extname:".hbs"}));
app.set('views', `${__dirname}/views`);
app.set('view engine','hbs');
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/", indexRouter);
// Metodo GET para Loggeo
app.use('/api/auth',viewsRouter);
app.use('/api/auth',userRouter);

// Para Productos y Carritos
app.use("/api",serverRoutes);

// Para numeros Randoms
app.use("/api/randoms", randomsRouter);




app.use(cors());

httpServer.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));


