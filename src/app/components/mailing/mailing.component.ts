import { Component } from '@angular/core';
import {MailingService} from "../../service/mailing/mailing-service.service";
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent {
  recipients: string[] = [];
  subject: string = '';
  content: string = '';
  editor: Editor;

  constructor(private mailingService: MailingService) {
    this.editor = new Editor();
  }

  sendEmail() {
    this.mailingService.sendEmail(this.recipients, this.subject, this.content).subscribe(() => {
      // Reset form fields after successful email sending
      this.recipients = [];
      this.subject = '';
      this.content = '';
    });
  }
}
