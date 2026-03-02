import React from "react";
import CheckoutSteps from "./CheckoutSteps";

export default function Payment() {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <h2>Payment</h2>
      <p>Payment screen goes here.</p>
    </div>
  );
}