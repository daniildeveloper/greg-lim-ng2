import { FormControl } from '@angular/forms';

/**
 * include all validation rules for the password field
 */
export class PasswordValidator {
    static cannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }
        return {
            cannotContainSpace: false
        };
    }
}