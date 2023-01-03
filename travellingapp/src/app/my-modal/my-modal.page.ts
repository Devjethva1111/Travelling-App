import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  defaultDate = "";
  defaultTime = "";
  isenabled: boolean = false;

  // data: string[] = [];
  products = [];

  constructor(public modalCtrl: ModalController, private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      subname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      dob: ['', [Validators.required]],
      time: ['', [Validators.required]],

    });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorCtr() {
    return this.myForm.controls;
  }

  getDate(value1) {
    // eslint-disable-next-line prefer-const
    let date = new Date(value1.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(date, {
      onlyself: true,
    });
  }

  getTime() {
    this.myForm.get('time').setValue;
  }
  onCreateUser(uname) {
    this.products.push({
      name: uname.value

    });
  }

  deleteTask(index) {
    this.products.splice(index, 1);
  }

  async onSubmit() {
    this.submitted = true;

    if (!this.myForm.valid) {
      console.log('All Fields are  required');
      return false;
    } else {

      // eslint-disable-next-line prefer-const
      let obj = {
        name: this.myForm.value.name,
        dob: this.myForm.value.dob,
        time: this.myForm.value.time,
        sub_name: this.products
      }


      console.log(obj);
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(obj)
        }
      };
      this.router.navigate(['notes'], navigationExtras);
      await this.modalCtrl.dismiss();
    }
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
