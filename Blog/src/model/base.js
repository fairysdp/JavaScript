class Base {
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

class Success extends Base {
    constructor(data, message) {
        super(data, message)
        this.code = 0
    }
}

class Error extends Base {
    constructor(data, message) {
        super(data, message)
        this.code = -1
    }
}

module.exports = {
    Success,
    Error
}