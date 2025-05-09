const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Stripe = require("stripe");
require('dotenv').config();
admin.initializeApp();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata?.userId;

    if (!userId) {
      console.error("No userId found in metadata.");
      return res.status(400).send("Missing userId.");
    }

    const userRef = admin.firestore().collection("users").doc(userId);
    await userRef.set(
      {
        plan: session.display_items?.[0]?.price?.nickname || "Unknown Plan",
        stripeCustomerId: session.customer,
        stripeSubscriptionId: session.subscription,
        lastPayment: new Date(),
      },
      { merge: true }
    );

    console.log(`✅ User ${userId} upgraded to ${session.display_items?.[0]?.price?.nickname}`);
  }

  res.json({ received: true });
});
