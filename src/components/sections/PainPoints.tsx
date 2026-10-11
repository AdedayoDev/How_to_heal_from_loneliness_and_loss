import { motion, useReducedMotion } from "motion/react";
import { SELAR_CHECKOUT_URL } from "../../config/book";

const painPoints = [
  "You laugh with everyone, then cry when you get home",
  "You say 'I'm fine' because explaining how you really feel is exhausting",
  "Someone you loved is gone, or gone from your life, and everyone expects you to be over it by now",
  "You've pulled away from people because it feels safer than risking more hurt",
  "You're tired in a way sleep doesn't fix",
  "You feel behind while everyone else seems to be moving forward",
  "You keep praying, and the ache is still there",
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function PainPoints() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className='pain-points-section'
      id='pain-points'
      aria-labelledby='pain-points-title'
    >
      <div className='pain-points-content container'>
        <motion.h2
          className='pain-points-title'
          id='pain-points-title'
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
        >
          THIS MIGHT BE YOU
        </motion.h2>

        <motion.ul
          className='pain-points-list'
          initial={reduceMotion ? false : "hidden"}
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          variants={listVariants}
        >
          {painPoints.map((painPoint) => (
            <motion.li
              className='pain-points-list__item'
              key={painPoint}
              variants={itemVariants}
              transition={reduceMotion ? { duration: 0 } : undefined}
            >
              <span className='pain-points-list__mark' aria-hidden='true'>
                ✓
              </span>
              <span className='pain-points-list__text'>{painPoint}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className='pain-points-close'
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
        >
          <p className='pain-points-close__statement'>
            That isn't weakness. It's pain nobody has given you permission to
            name.
          </p>
          {SELAR_CHECKOUT_URL ? (
            <a
              className='btn btn-primary pain-points-cta'
              href={SELAR_CHECKOUT_URL}
            >
              Yes, This Is Me. Show Me the Book
            </a>
          ) : (
            <button
              className='btn btn-primary pain-points-cta'
              type='button'
              disabled
              title='Checkout link coming soon'
            >
              Yes, This Is Me. Show Me the Book
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default PainPoints;
