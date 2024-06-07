import React, { MouseEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '../ui/button';
import { checkoutOrder } from '@/lib/actions/order.actions';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const Checkout = ({ event, userId }: { event: any; userId: string }) => {
  const onCheckout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
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
