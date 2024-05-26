import ValidateValue from "@/lib/ValidateValue";

export default class Validator {
    constructor(item) {
        this.errors = [];
        this.item = item;
    }

    validate(callback) {
        return new ValidateValue(this, callback(this.item));
    }

    addError(error) {
        this.errors.push(error);
    }

    getErrors() {
        return this.errors;
    }

    isSuccess() {
        return this.errors.length == 0;
    }
}