import { Injectable }                        from '@angular/core';

import { FormData, Personal }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isConfirmationFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
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
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.details);
    }

    getConfirmation() : boolean {
        // Return the work type
        return this.formData.accept;
    }
    
    setConfirmation(data: boolean) {
        // Update the work type only when the Work Form had been validated successfully
        this.isConfirmationFormValid = true;
        this.formData.accept = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.payment);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
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