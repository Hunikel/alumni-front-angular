import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import {PaymentDTO} from "../../model/payment-dto.model";
import {PaymentService} from "../../service/payment/payment-service.service";

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.css']
})
export class CotisationComponent {
  payment: PaymentDTO = PaymentDTO.createEmptyInstance();
  stripe: any;

  constructor(private paymentService: PaymentService) {
    this.loadStripe();
  }

  loadStripe() {
    const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your Stripe public key
    stripePromise.then((stripe) => {
      this.stripe = stripe;
    });
  }

  processPayment() {
    this.paymentService.processPayment(this.payment).subscribe((response) => {
      this.stripe.redirectToCheckout({ sessionId: response.sessionId });
    });
  }
}
