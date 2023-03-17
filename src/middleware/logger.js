import winston from 'winston';

const customLevelsOptions = {
    levels:{        
        error:0,
        warning:1,
        info:2,
    }
}

const logger = winston.createLogger({
    levels:customLevelsOptions.levels,
    transports:[
        new winston.transports.Console({
            level:"info"
        }),
        new winston.transports.File({filename: './error.log'})
    ]
})

export const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.info(`${req.method} en ${req.url} + ${new Date().toLocaleTimeString} `)
    next();
}