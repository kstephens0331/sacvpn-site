require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Raw body only for Stripe webhook
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body, // raw body buffer
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('⚠️  Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('✅ Stripe event type:', event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('🎉 Checkout completed session:', session);
  }

  res.status(200).send('Received!');
});

// ✅ Use JSON + other middleware AFTER the webhook route
app.use(express.json());

// Optional routes (if needed later)
app.get('/', (req, res) => {
  res.send('SACVPN webhook server is running.');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Webhook server running on port ${process.env.PORT}`);
});