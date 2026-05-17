import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmarPasswordValidator(): ValidatorFn {

    return (formGroup: AbstractControl): ValidationErrors | null => {

        const password = formGroup.get('password');
        const repetirPassword = formGroup.get('repetirPassword');

        if (password?.value !== repetirPassword?.value) {

            repetirPassword?.setErrors({ passwordsDistintas: true });
            return { passwordsDistintas: true };
        }

        return null;
    };
}