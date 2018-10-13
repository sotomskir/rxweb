import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-leapYear-message-validator',
    templateUrl: './leap-year-message.component.html'
})
export class LeapYearMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.formGroup({
										joiningYear:['',RxwebValidators.leapYear({message:'{{0}} is not a leap year' })], 
								});
    }
}
