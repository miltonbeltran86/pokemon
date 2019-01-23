import {Component, EventEmitter, Output} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal-select-collection',
  templateUrl: './modal-select-collection.component.html',
  styleUrls: ['./modal-select-collection.component.css']
})
export class ModalSelectCollectionComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    console.log(this.dataInput);
    console.log("envio data");
    
  }
  
  @Output() submitted = new EventEmitter<any>();
  @Input() dataInput : any[] = [];

  
  loginForm = this.fb.group({
    name: [[], Validators.required]
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
      name: [[], Validators.required]
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
    console.log(Object.values(this.loginForm.value));
    this.modalService.dismissAll();
    this.submitted.emit(this.loginForm.value);
  }

  filterForeCasts(filterVal: any) {
    if (filterVal == "0")
        console.log(filterVal)
    else
        console.log(filterVal)
}
}
