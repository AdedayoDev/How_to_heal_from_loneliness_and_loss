import { motion, useReducedMotion } from "motion/react";
import {
  BOOK_LAUNCH_PRICE,
  BOOK_POST_LAUNCH_PRICE,
  SELAR_CHECKOUT_URL,
} from "../../config/book";

function OfferSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='offer-section'
      id='offer'
      aria-labelledby='offer-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='offer-content container'>
        <h2 className='offer-title' id='offer-title'>
          GET HOW TO HEAL FROM LONELINESS AND LOSS TODAY
        </h2>

        <div className='offer-layout'>
          <div className='offer-product'>
            <figure className='offer-cover'>
              <img
                className='offer-cover__image'
                src='/Front%20Cover%20(2.0).png'
                alt='Cover of How to Heal from Loneliness and Loss by Ipaye Isaac'
              />
            </figure>

            <div className='offer-product__details'>
              <h3>How to Heal from Loneliness and Loss</h3>
              <p className='offer-product__author'>Ipaye Isaac</p>
              <ul className='offer-inclusions'>
                <li>The full e-book: 10 chapters from pain to peace</li>
                <li>Reflection and Prayer Guide at the end</li>
              </ul>
            </div>
          </div>

          <div className='offer-pricing'>
            <p className='offer-pricing__label'>Launch price</p>
            <p className='offer-pricing__current'>{BOOK_LAUNCH_PRICE}</p>
            <p className='offer-pricing__after'>
              After-launch price: <strong>{BOOK_POST_LAUNCH_PRICE}</strong>
            </p>

            {SELAR_CHECKOUT_URL ? (
              <a
                className='btn btn-primary offer-purchase'
                href={SELAR_CHECKOUT_URL}
              >
                Get My Copy Now
              </a>
            ) : (
              <button
                className='btn btn-primary offer-purchase'
                type='button'
                disabled
                aria-describedby='offer-checkout-status'
                title='Official Selar checkout link has not been configured'
              >
                Get My Copy Now
              </button>
            )}

            <p className='offer-checkout-reassurance'>
              Secure checkout on Selar
            </p>
            {!SELAR_CHECKOUT_URL && (
              <p className='offer-checkout-status' id='offer-checkout-status'>
                Official Selar checkout link to be added.
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default OfferSection;
