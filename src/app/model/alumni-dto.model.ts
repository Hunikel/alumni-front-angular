export class AlumniDTO {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  promotion: string;
  email: string;
  phone: string;
  paid: boolean;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    company: string,
    promotion: string,
    email: string,
    phone: string,
    paid: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.promotion = promotion;
    this.email = email;
    this.phone = phone;
    this.paid = paid;
  }
}
