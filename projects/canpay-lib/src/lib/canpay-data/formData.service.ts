import { Injectable } from '@angular/core';

import { FormData, Personal } from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid = false;
    private isConfirmationFormValid = false;
    private isAddressFormValid = false;

    constructor() {
    }

    getPersonal(): Personal {
        // Return the Personal data
        const personal: Personal = {
            currency: this.formData.currency,
            address: this.formData.address,
            email: this.formData.email,
            amount: this.formData.amount,
            usd: this.formData.usd,
            hash: this.formData.hash,
            date: this.formData.date
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.currency = data.currency;
        this.formData.address = data.address;
        this.formData.email = data.email;
        this.formData.amount = data.amount;
        this.formData.hash = data.hash;
    }

    getConfirmation(): boolean {
        // Return the work type
        return this.formData.accept;
    }

    setConfirmation(data: boolean) {
        // Update the work type only when the Work Form had been validated successfully
        this.isConfirmationFormValid = true;
        this.formData.accept = data;
        // Validate Work Step in Workflow
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isConfirmationFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isConfirmationFormValid &&
            this.isAddressFormValid;
    }
}
