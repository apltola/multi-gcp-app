import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.prettyPrint(),
  defaultMeta: {},
  transports: [
    new winston.transports.Console({
      format: winston.format.prettyPrint()
    })
  ]
});

const logMessage = (
  level: 'info' | 'debug' | 'error',
  message: string,
  messageInfo?: object
) => {
  const entry: any = { message };
  if (messageInfo) {
    entry.messageInfo = messageInfo;
  }

  logger.log({ level, ...entry });
};

export const logDebug = (message: string, messageInfo?: object) => {
  logMessage('debug', message, messageInfo);
};

export const logInfo = (message: string, messageInfo?: object) => {
  logMessage('info', message, messageInfo);
};

export const logError = (message: string, messageInfo?: object) => {
  logMessage('error', message, messageInfo);
};

export default logger;
