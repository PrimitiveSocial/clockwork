import {Validator} from "./classes/Validator";
import * as rules from "./rules";

const _v = rules;

const VueClockwork = {
    install: function(Vue, options = {}) {
        Vue.mixin({
            data() {
                return {
                    validator: null
                }
            },
            methods: {
                initValidator() {
                    let sfc = this;
                    this.validator = new Validator();
                    this.validator.setComponentInstance(sfc);
                },
                hasError(dataKey) {
                    if(!this.validator.errorsBag)
                        return false

                    let errors =  this.validator.errorsBag.filter(error => error.dataKey === dataKey);
                    return !!(errors.length);
                },
                showError(dataKey) {
                    if(!this.validator.errorsBag) {
                        window.console.log('no errors to display');
                        return null;
                    }

                    let errors = this.validator.errorsBag.filter(error => error.dataKey === dataKey);
                    return (errors.length) ? errors[0].message : null;
                }
            }
        });
    }
}

module.exports = { 
    _v,
    VueClockwork
}