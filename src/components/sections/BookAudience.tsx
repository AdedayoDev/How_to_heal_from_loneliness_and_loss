import { motion, useReducedMotion } from "motion/react";

const audienceStatements = [
  "You are grieving a death, breakup, friendship, job, or season of life.",
  "You feel lonely even when you are not alone.",
  "You want gentle, practical help rooted in faith.",
  "You love someone who has gone quiet and want to understand what they may be experiencing.",
];

function BookAudience() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='book-audience-section'
      id='audience'
      aria-labelledby='book-audience-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='book-audience-content container'>
        <h2 className='book-audience-title' id='book-audience-title'>
          THIS BOOK IS FOR YOU IF...
        </h2>

        <ul className='book-audience-list'>
          {audienceStatements.map((statement, index) => (
            <li className='book-audience-item' key={statement}>
              <span className='book-audience-item__index' aria-hidden='true'>
                0{index + 1}
              </span>
              <span className='book-audience-item__text'>{statement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default BookAudience;