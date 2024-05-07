import dotenv from 'dotenv'
import Stripe from "stripe";

dotenv.config()

const stripe = Stripe(process.env.SK_LIVE)


export const checkout = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'jai singh'
                    },
                    unit_amount: 50 * 100
                },
                quantity: 1
            },
          
        ],
        mode: 'payment',
        shipping_address_collection: {
            allowed_countries: ['US', 'BR']
        },
        success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`
    })

    res.status(200).json({sessionUrl: session.url})
}



export const complete = async (req, res) => {
    const result = Promise.all([
        stripe.checkout.sessions.retrieve(req.query.session_id, { expand: ['payment_intent.payment_method'] }),
        stripe.checkout.sessions.listLineItems(req.query.session_id)
    ])

    console.log(JSON.stringify(await result))

    res.send('Your payment was successful')
}

export const cancel = (req, res) => {
    res.redirect('/')
}
