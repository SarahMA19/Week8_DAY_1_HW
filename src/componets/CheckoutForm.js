// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useState } from "react";
// import "../static/StripeElements.css";

// const CheckoutForm = ()  => {
//     const stripe = useStripe();
//     const elements = useElements();

//     /*
//     What are the steps/flow here
//     1. Create payment intent = check on the back with the cart
//     2. If stripe has loaded, user submits payment info
//     3. We process that info,  aka sent api call to stripe
//     4. Show status - has it been submitted? Processing? 
//     5. Show confirmation or clear cart or whatever we want to do when the payment is done
//     */

//     // set some state hooks that will aid us in conditional handling
//     const [showPay, setShowPay] = useState(true);
//     const [showForm, setShowForm] = useState(true);
//     const [errorMessage, setErrorMessage] = useState('');

//     // handlePay --> this is our api call to Stripe
//     const handlePay = async (event) => {
//         event.preventDefault();
//         setShowPay(false); // disable form submission
//         //make the api call to confirm payment to strip
//         const data = await stripe.confirmPayment({
//             elements,
//             redirect : 'if_required'
//         });
//         console.log('payment intenet recieved', data);
//         if (data['error']) {
//             console.log(data['error']['code']);
//             setErrorMessage(data['error']['message']);
//             setShowForm('error');

//         } else {
//             setErrorMessage(false)
//         }

//     }
//     return (
//         <div className="container">
//             {
//                 showForm === true?
//                 <form id="payment-form" onSubmit={handlePay}>
//                     <PaymentElement id="payment-element"></PaymentElement>
//                     <button id="submit" disabled={!showPay || !elements || !stripe} className="btn btn-primary m-auto">
//                         <span id="btn-text">
//                             {showPay ? 'Submit Payment' : 'Processing . . .'}
//                         </span>
//                     </button>
//                 </form>
//                 : showForm === 'error' ?
//                 <>
//                 <h3>Something went wrong processing your payment please try again!</h3>
//                 <h4>{errorMessage}</h4>
//                 </>
//                 :
//                 <h2> Payment Success, thanks for all the fish!</h2>
//             }
//         </div>
//     )
// }

// export default CheckoutForm;