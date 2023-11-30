import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51KMlY1AJk2314JcUkJONWtVYCtAek9c8QL68v2GpQXzGODu6cM7HoCnPEjYn09zNQaMO1nwrxn1uUU0Ne6wpDgSr00CoXXm5Fq";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
