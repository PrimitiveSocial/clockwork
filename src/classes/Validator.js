import * as definedRules from "./../rules";
import {find} from "../utils/Eloquent";
import {hasArg} from "../utils/Helper";

export class Validator {
    errorsBag;
    customMessages;
    availableRules;
    componentInstance;

    setComponentInstance(instance) {
        this.errorsBag = [];
        this.customMessages = {};
        this.componentInstance = instance;
        this.availableRules = definedRules;

        return this;
    }

    /**
     * Check if the validations option is set on the component instance.
     *
     * @returns {boolean}
     */
    validationsNotDefined() {
        if(!this.componentInstance.$options.validations) {
            window.console.warn("The validations options is not defined.");
            return true;
        }

        return false;
    }

    /**
     * Return the default error messages.
     *
     * @returns {object}
     */
    getDefaultErrorMessages() {
        return {
            after: 'This field must be a date after "{param}"',
            after_or_equal: 'This field must be a date after or equal to "{param}"',
            alpha: 'This field must only contain letters',
            alpha_dash: 'This field must only contain letters, dashes and underscores',
            alpha_numeric: 'This field must only contain letters and numbers',
            before: 'This field must be a date before "{param}"',
            before_or_equal: 'This field must be a date before or equal to "{param}"',
            boolean: 'This field must be boolean',
            date: 'This field must be a valid date with the format YYYY-MM-DD',
            different: 'This field must be different than "{param}"',
            email: 'This field must be a valid email.',
            ens_with: 'This field must end with "{param}"',
            integer: 'This field must be a number.',
            is_array: 'This field must be an array',
            is_in: 'This field must be one of "{param}"',
            is_string: 'This field must be a string',
            json: 'This field must be a json object',
            length: 'The field length must be "{param}"',
            matches_regex: 'This field must match the regex "{param}"',
            max: 'This field must not be greater than "{param}"',
            min: 'This field must not be less than "{param}"',
            not_in: 'This field must not be one of "{param}"',
            numeric: 'This field must be numeric',
            required: 'This field is required',
            same: 'This field must be the same as "{param}"',
            starts_with: 'This field must start with "{param}"',
            url: 'This field must be a valid url',
            uuid: 'This field must be a valid uuid',
        };
    }

    /**
     * Get the error message.
     *
     * @param dataKey
     * @param rule
     * @param param
     * @returns {*}
     */
    getErrorMessage(dataKey, rule, param) {
        let message = null;
        let key = dataKey + '.' + rule;
        let messages = this.getDefaultErrorMessages();

        //get custom error message if exists
        if(this.customMessages.hasOwnProperty(key)) {
            message = this.customMessages[key];
        }
        else {
            message = messages[rule];
        }

        return message.replace('{param}', param);
    }

    /**
     * Set custom error messages.
     *
     * @param _customMessages
     * @returns {Validator}
     */
    setCustomErrorMessages(_customMessages) {
        if(typeof _customMessages !== 'object') {
            window.console.warn('The validator customMessages must be an object');
            return this;
        }

        this.customMessages = _customMessages;
        return this;
    }

    /**
     * Add a message to the errorBag.
     *
     * @param dataKey
     * @param rule
     * @param errorMessage
     */
    addError(dataKey, rule, errorMessage) {
        let key = dataKey + '.' + rule;

        this.errorsBag.push({
            key: key,
            dataKey: dataKey,
            message: errorMessage
        });
    }

    /**
     * Validate a set of defined rules.
     *
     * @returns {Validator}
     */
    validate() {
        if(this.validationsNotDefined()) {
            return this;
        }

        this.errorsBag = [];

        let validationRules = this.componentInstance.$options.validations;
        let data = this.componentInstance.$data;

        for (let [_dataKey, _rules] of Object.entries(validationRules)) {
            let value = find(data, _dataKey);
            let rules = _rules.split('|');

            rules.forEach( (rule, k) => {
                rules[k] = rule.trim();
            });

            if(rules.includes('when_present') && !value) {
                continue;
            }

            rules.forEach( (rule) => {
                if(rule === 'when_present')
                    return;

                this.executeRule(rule.trim(), value, _dataKey);
            });
        }

        this.componentInstance.$data.errorsBag = this.errorsBag;
        return this;
    }

    /**
     * Execute a rule and fill the errorBag.
     *
     * @param rule
     * @param value
     * @param dataKey
     *
     * @returns {boolean}
     */
    executeRule(rule, value, dataKey) {
        let arg = null;
        let data = this.componentInstance.$data;

        // for example: min:minLength (min is the rule and minLength is the component defined data property)
        if(hasArg(rule)) {
            let str = rule.split(':');
            rule = str[0].trim();
            arg = str[1].trim();
            arg =  find(data, arg);
        }

        if(!this.availableRules[rule]) {
            window.console.warn('The rule "' + rule + '" for the data property "' + dataKey + '" is not defined.\n it will be ignored.');
            return false;
        }

        let errorMessage = this.getErrorMessage(dataKey, rule, arg);

        if(!this.availableRules[rule](value, arg)) {
            this.addError(dataKey, rule, errorMessage);
            return false;
        }

        return true;
    }

    /**
     * Check if the validation passes.
     *
     * @returns {boolean}
     */
    passes() {
        this.validate();
        return (!this.errorsBag.length);
    }

    /**
     * Check if the validation fails.
     *
     * @returns {boolean}
     */
    fails() {
        return !this.passes();
    }

    /**
     * Add new rules at rune time for the Validator.
     *
     * @param name
     * @param closure
     * @returns {Validator}
     */
    extend(name, closure) {
        if(!name || !closure) {
            window.console.warn('Please pass a rule name as first argument and a closure function as a second argument for the extend() method');
            return this;
        }

        if(definedRules.hasOwnProperty(name)) {
            window.console.warn('The rule "' + name + '" exists.');
            return this;
        }

        if(typeof closure !== 'function') {
            window.console.warn('The closure of the rule "' + name + '" should be a function.');
            return this;
        }

        definedRules[name] = closure;
        this.availableRules = definedRules;

        return this;
    }
}