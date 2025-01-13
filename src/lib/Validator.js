import ValidateValue from "@/lib/ValidateValue";

export default class Validator {
    constructor(item) {
        this.errors = [];
        this.errorFields = {};
        this.item = item;
    }

    validate(callback) {
        return new ValidateValue(this, callback(this.item));
    }

    addError(error, validator) {
        this.errors.push(error);
        if (validator.getField())
            this.errorFields[validator.getField()] = true;
    }

    getErrorFields() {
        return this.errorFields;
    }

    getErrors() {
        return this.errors;
    }

    isSuccess() {
        return this.errors.length == 0;
    }
}