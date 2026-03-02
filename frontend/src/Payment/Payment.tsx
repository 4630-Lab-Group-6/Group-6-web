import React from "react";
import CheckoutSteps from "./CheckoutSteps";

export default function Payment() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment processing...");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                  value="paypal"
                  defaultChecked
                />
                <label htmlFor="paypal">Paypal</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="bitcoin"
                  value="bitcoin"
                />
                <label htmlFor="bitcoin">Bitcoin</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
