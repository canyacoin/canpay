import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import * as globals from '../globals';

export interface ConfirmModel {
    title: string;
    message: string;
}

@Component({
    selector: 'canyalib-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.css']
})
export class HomeComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

    // Flags
    loading = true;
    message: string;
    title = 'Enter details.';
    currStep: globals.Step = 0;
    Step = globals.Step;
    error: any;

    stepChanger(step) {
        if (step === 4) {
            this.close();
        }
        this.currStep = step;
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute, dialogService: DialogService) {
        super(dialogService);
    }

}