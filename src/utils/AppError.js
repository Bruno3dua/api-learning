class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) { // Função  que é executada quando se instancia a classe
        this.message = message
        this.statusCode = statusCode
    }
}

module.exports = AppError