export default class ValidateValue {
    constructor(validator, value) {
        this.validator = validator;
        this.value = value;
        this.field = null;
    }

    setField(field) {
        this.field = field;
        return this;
    }

    getField() {
        return this.field;
    }

    regex(regex, message) {
        if (!this.value) return this;
        if (!regex.test(this.value))
            this.validator.addError(message, this);
        return this;
    }

    custom(callback, message) {
        if (!this.value) return this;
        if (!callback(this.value, this))
            this.validator.addError(message, this);
        return this;
    }

    required(message) {
        if (!this.value)
            this.validator.addError(message, this);
        return this;
    }

    isPhone(message) {
        this.regex(/^\+7 \d{3} \d{3} \d{2} \d{2}$/, message);
        return this;
    }

    isFloat(message) {
        this.regex(/^\d+(\.\d+)?$/, message);
        return this;
    }

    isInt(message) {
        this.regex(/^\d+$/, message);
        return this;
    }

    min(min, message) {
        if (!this.value) return this;
        switch (typeof this.value) {
            case "number":
                if (this.value < min)
                    this.validator.addError(message);
                break;
            case "string":
                if (this.value.length < min)
                    this.validator.addError(message);
                break;
        }
        return this;
    }

    max(max, message) {
        if (!this.value) return this;
        switch (typeof this.value) {
            case "number":
                if (this.value > max)
                    this.validator.addError(message);
                break;
            case "string":
                if (this.value.length > max)
                    this.validator.addError(message);
                break;
        }

        return this;
    }
}