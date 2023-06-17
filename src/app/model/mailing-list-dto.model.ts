export class MailingListDTO {
  id: number;
  name: string;
  emails: string[];

  constructor(id: number, name: string, emails: string[]) {
    this.id = id;
    this.name = name;
    this.emails = emails;
  }
}
