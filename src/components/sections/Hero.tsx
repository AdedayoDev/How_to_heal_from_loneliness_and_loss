import { motion, useReducedMotion } from "motion/react";
import { BOOK_PRICE, SELAR_CHECKOUT_URL } from "../../config/book";

const DELIVERY_MICROCOPY =
  "Instant download • Read on your phone • Secure checkout on Selar";

function Hero() {
  const reduceMotion = useReducedMotion();
  const entranceTransition = {
    duration: reduceMotion ? 0 : 0.65,
    ease: "easeOut" as const,
  };

  return (
    <section className='hero-section' id='book' aria-labelledby='hero-title'>
      <div className='hero-layout container'>
        <div className='hero-copy'>
          <motion.h1
            className='hero-title'
            id='hero-title'
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entranceTransition}
          >
            YOU'RE SURROUNDED BY PEOPLE. SO WHY DOES IT STILL FEEL LIKE NOBODY
            KNOWS YOU?
          </motion.h1>

          <motion.p
            className='hero-description'
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...entranceTransition,
              delay: reduceMotion ? 0 : 0.1,
            }}
          >
            If loneliness or loss has been following you home, this book shows
            you how to name it, understand it, and walk from pain to peace, one
            honest step at a time.
          </motion.p>

          <motion.div
            className='hero-purchase'
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...entranceTransition,
              delay: reduceMotion ? 0 : 0.18,
            }}
          >
            {SELAR_CHECKOUT_URL ? (
              <a
                className='btn btn-primary hero-purchase__button'
                href={SELAR_CHECKOUT_URL}
              >
                Get My Copy: {BOOK_PRICE}
              </a>
            ) : (
              <button
                className='btn btn-primary hero-purchase__button'
                type='button'
                disabled
                title='Checkout link coming soon'
              >
                Get My Copy: {BOOK_PRICE}
              </button>
            )}
            <p className='hero-purchase__microcopy'>{DELIVERY_MICROCOPY}</p>
          </motion.div>

          <motion.div
            className='author-video-placeholder'
            role='group'
            aria-label="Author video placeholder; replace with Pastor Ipaye Isaac's captioned video"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...entranceTransition,
              delay: reduceMotion ? 0 : 0.25,
            }}
          >
            <span className='author-video-placeholder__label'>
              Author video placeholder
            </span>
            <span className='author-video-placeholder__note'>
              Pastor Ipaye Isaac · Captioned introduction
            </span>
          </motion.div>
        </div>

        <motion.div
          className='hero-book-column'
          aria-label='Book cover'
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...entranceTransition, delay: reduceMotion ? 0 : 0.12 }}
        >
          <img
            className='hero-book-image'
            src='/mock-how-to-heal-from-loneliness-and-loss-3.png'
            alt='How to Heal from Loneliness and Loss by Pastor Ipaye Isaac'
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
