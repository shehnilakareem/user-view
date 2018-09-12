import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  senderEmail: String;
  comment: String;
  fileNameDialogRef: MatDialogRef<DialogComponent>;

  constructor(public userService: UserService) {

  }

  ngOnInit() {
  }
  sendmail() {
    var data = {
      senderEmail: this.senderEmail,
      message: this.comment
    }
    this.userService.sendMail(data).subscribe(res => {
      Swal("Done!", "Your Message has been sent.", "success");

    }, err => {
      console.log(err);
      Swal("Oops!", err, "error");
    }
    )
  }

}
