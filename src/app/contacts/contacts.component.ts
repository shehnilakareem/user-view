import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { ifStmt } from '../../../node_modules/@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
name;phone;comment;

fileNameDialogRef: MatDialogRef<DialogComponent>;

constructor(private dialog: MatDialog) {
  
}

  ngOnInit() {
  }
  sendmail(name,phone,comment){
    this.name=name;
    this.phone=phone;
    this.comment=comment;

if(!this.name || !this.phone || !this.comment){
  console.log("true");
  this.openDialog();

  
}else if(!this.phone){
  console.log( "false");
}

  }
openDialog(){
  
  this.fileNameDialogRef = this.dialog.open(DialogComponent,{
    hasBackdrop: true,
    height: '40%',
    width: '20%',
    panelClass: 'app-full-bleed-dialog', 

    // box-shadow:''
    
  });
}
}
