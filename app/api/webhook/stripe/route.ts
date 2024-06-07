import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { createOrder } from '@/lib/actions/order.actions';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'] as string;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
      console.log('Event:', event);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      res.status(400).send(`Webhook error: ${errorMessage}`);
      return;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      const order = {
        stripeId: session.id,
        eventId: session.metadata?.eventId || '',
        buyerId: session.metadata?.buyerId || '',
        totalAmount: session.amount_total
          ? (session.amount_total / 100).toString()
          : '0',
        createdAt: new Date(),
      };

      try {
        const newOrder = await createOrder(order);
        res
          .status(200)
          .json({ message: 'Order created successfully', order: newOrder });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
        res
          .status(500)
          .json({ message: 'Error creating order', error: errorMessage });
      }
    } else {
      res.status(200).send('Received unknown event type');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
