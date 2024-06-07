import React, { MouseEvent } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Button } from '../ui/button';
import { checkoutOrder } from '@/lib/actions/order.actions';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const Checkout = ({ event, userId }: { event: any; userId: string }) => {
  const onCheckout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Failed to load Stripe.');
      return;
    }

    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    try {
      // Call your action to checkout order
      await checkoutOrder(order);

      // Create a checkout session on the server
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event._id,
          userId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        console.error('Error redirecting to Checkout:', error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <form>
      <Button
        onClick={onCheckout}
        type="button"
        role="link"
        size="lg"
        className="button sm:w-fit"
      >
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  );
};

export default Checkout;
