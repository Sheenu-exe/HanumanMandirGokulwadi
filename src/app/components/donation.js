"use client"
import { loadStripe } from "@stripe/stripe-js";


export async function StripeDonation({donation}) {
    let stripePromise = null;

    const getstripe = () => {
      if(!stripePromise){
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
      }
      return stripePromise;
    }
      const Stripe = await getstripe()
      await stripePromise.redirectToDonation(
        {
          mode:"payment",
          donation,
          successUrl: process.env.SUCCESS,
          successURL:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
          cancelURL:window.location.origin
        }
      )
    return(
        <div></div>
    )
}