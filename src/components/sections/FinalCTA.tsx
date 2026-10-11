import { motion, useReducedMotion } from "motion/react";
import { BOOK_LAUNCH_PRICE, SELAR_CHECKOUT_URL } from "../../config/book";

function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='final-cta-section'
      id='final-cta'
      aria-labelledby='final-cta-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='final-cta-content container'>
        <h2 className='final-cta-title' id='final-cta-title'>
          YOU DON'T HAVE TO CARRY THIS ALONE ANY LONGER.
        </h2>
        <p className='final-cta-copy'>
          Peace was never found by hiding. It starts with one honest step. Start
          with Chapter One tonight.
        </p>

        {SELAR_CHECKOUT_URL ? (
          <a
            className='btn btn-primary final-cta-button'
            href={SELAR_CHECKOUT_URL}
          >
            Get How to Heal from Loneliness and Loss: {BOOK_LAUNCH_PRICE}
          </a>
        ) : (
          <button
            className='btn btn-primary final-cta-button'
            type='button'
            disabled
            aria-describedby='final-cta-checkout-status'
            title='Official Selar checkout link has not been configured'
          >
            Get How to Heal from Loneliness and Loss: {BOOK_LAUNCH_PRICE}
          </button>
        )}
        {!SELAR_CHECKOUT_URL && (
          <p
            className='final-cta-checkout-status'
            id='final-cta-checkout-status'
          >
            Official Selar checkout link to be added.
          </p>
        )}
      </div>
    </motion.section>
  );
}

export default FinalCTA;
