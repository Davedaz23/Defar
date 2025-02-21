// // src/app/api/checkout/route.js
// import Stripe from "stripe";

// // Initialize Stripe with your secret key (use the key stored in your .env)
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { items } = await req.json(); // Receive the cart items from the frontend
    
//     // Create a Checkout session with Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"], // Define payment methods you accept
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: "usd", // Currency you are using (you can change to another currency)
//           product_data: { name: item.name }, // Set the product name
//           unit_amount: item.price * 100, // Convert to cents (Stripe expects this in cents)
//         },
//         quantity: item.quantity, // How many of this product are in the cart
//       })),
//       mode: "payment", // Payment mode: payment (single payment), subscription, or setup
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // URL on success
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // URL on cancel
//     });

//     // Return the URL for the client to redirect to Stripe Checkout
//     return Response.json({ url: session.url });
//   } catch (error) {
//     // If any errors occur, send an error message
//     return Response.json({ error: error.message }, { status: 500 });
//   }
// }
