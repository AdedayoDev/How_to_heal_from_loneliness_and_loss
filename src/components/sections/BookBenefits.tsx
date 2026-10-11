import { motion, useReducedMotion } from "motion/react";

const benefits = [
  "Understand the different types of loneliness and recognise what you may be experiencing.",
  "Navigate grief and the pain of losing someone or something important.",
  "Recognise the effects of rejection, betrayal, and emotional wounds.",
  "Understand the pressure of feeling that you should be further along in life.",
  "Explore how emotional pain can affect the body.",
  "Recognise the isolation spiral and understand when to seek help.",
  "Find practical, faith-anchored steps towards healing.",
];

function BookBenefits() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='book-benefits-section'
      id='benefits'
      aria-labelledby='book-benefits-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='book-benefits-content container'>
        <h2 className='book-benefits-title' id='book-benefits-title'>
          INSIDE THIS BOOK, YOU'LL LEARN
        </h2>

        <ul className='book-benefits-grid'>
          {benefits.map((benefit, index) => (
            <li className='book-benefit' key={benefit}>
              <span className='book-benefit__index' aria-hidden='true'>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className='book-benefit__text'>{benefit}</span>
            </li>
          ))}
        </ul>

        <p className='book-benefits-closing'>
          No quick fixes. No pretending. Just an honest path from pain to peace.
        </p>
      </div>
    </motion.section>
  );
}

export default BookBenefits;
