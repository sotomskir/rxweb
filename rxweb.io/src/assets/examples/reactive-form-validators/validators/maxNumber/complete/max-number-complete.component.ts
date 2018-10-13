import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder,RxwebValidators 
} from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-maxNumber-complete-validator',
    templateUrl: './max-number-complete.component.html'
})
export class MaxNumberCompleteValidatorComponent implements OnInit {
    subjectDetailsFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.subjectDetailsFormGroup = this.formBuilder.formGroup({
																maximumMarks:['',RxwebValidators.maxNumber({value:100  ,conditionalExpression:(x,y) =>{ return   x.subjectCode == "8CS5A" } })], 
													obtainedMarks:['',RxwebValidators.maxNumber({value:100  ,conditionalExpression:x => x.subjectCode == "8CS5A" })], 
													passingMarks:['',RxwebValidators.maxNumber({value:50  ,message:'{{0}} exceeds the Maximum marks Limit' })], 
								});
    }
}
