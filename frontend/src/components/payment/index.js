import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const Payment = () => {
  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };
  return(
  <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51OuUubSGWIKCsaAKNCRti2yCmh0VQU675Wzo8d4SkqvkhgTKBr71jGQatJdkVEs38A0rYjoKmtkiDadgVsBBOArS00vWrQghDZ"
      />
  );
  };

export default Payment;