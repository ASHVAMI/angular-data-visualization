import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface DataEntry {
  datetime: string;
  temperature: number;
}

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent {
  dataForm: FormGroup;
  dataEntries: DataEntry[] = [];

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      datetime: ['', [Validators.required, this.pastDateValidator]],
      temperature: ['', [Validators.required, Validators.min(-50), Validators.max(50)]],
    });
  }

  pastDateValidator(control: any) {
    const inputDate = new Date(control.value);
    const today = new Date();
    if (inputDate > today) {
      return { 'pastDate': true };
    }
    return null;
  }

  addData() {
    if (this.dataForm.valid) {
      this.dataEntries.push(this.dataForm.value);
      this.dataForm.reset();
    }
  }
}
