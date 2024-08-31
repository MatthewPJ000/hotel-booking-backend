/**
 * @name Hotel Room Booking System
 * @author Kir Kalarash
 * @description Hotel Room Booking and Management System Software ~ Developed By Kir Kalarash
 * @copyright ©2023 ― Kir Kalarash. All rights reserved.
 * @version v0.0.1
 *
 */

const winston = require('winston');

const {
  combine, timestamp, printf, colorize
} = winston.format;

const logger = winston.createLogger({
  level: process.env.APP_LOG_LEVEL || 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A'
    }),
    printf((level) => `[${level.timestamp}] ${level.level}: ${level.message}`)
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;
