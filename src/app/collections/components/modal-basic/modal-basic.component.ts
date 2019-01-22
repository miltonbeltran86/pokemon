import {Component, EventEmitter, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.component.html'
})
export class ModalBasicComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}
  
  @Output() submitted = new EventEmitter();

  
  loginForm = this.fb.group({
    name: ['', Validators.required],
    desc: ['',Validators.required]
  });
  

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['',Validators.required]
    });
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submit() {
    console.log("submit");
    this.modalService.dismissAll();
    this.submitted.emit(this.loginForm.value);
  }
}
