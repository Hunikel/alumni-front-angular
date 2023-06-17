export class PaymentDTO {
  name: string;
  number: string;
  expirationDate: string;
  amount: number;
  promotion: string;
  cvc: string;
  email: string;
  address: string;

  constructor(
    name: string,
    number: string,
    expirationDate: string,
    amount: number,
    promotion: string,
    cvc: string,
    email: string,
    address: string
  ) {
    this.name = name;
    this.number = number;
    this.expirationDate = expirationDate;
    this.amount = amount;
    this.promotion = promotion;
    this.cvc = cvc;
    this.email = email;
    this.address = address;
  }

  static createEmptyInstance() {
    return new PaymentDTO('', '', '', 0, '', '', '', '');
  }
}
