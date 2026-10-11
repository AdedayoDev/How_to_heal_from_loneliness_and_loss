import { motion, useReducedMotion } from "motion/react";

const excerpts = [
  "Not every silence means peace. And not every person who says 'I'm fine' knows how to say 'I need help.'",
  "You are not weak because you are struggling. You are human.",
  "What happened to you is part of your story. It does not have to become the definition of your story.",
  "You are still here. There is still more to your story than what you lost.",
];

function BookPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='book-preview-section'
      id='preview'
      aria-labelledby='book-preview-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='book-preview-content container'>
        <h2 className='book-preview-title' id='book-preview-title'>
          A FEW LINES YOU MAY NEED TO HEAR
        </h2>

        <ul className='book-preview-grid'>
          {excerpts.map((excerpt) => (
            <li className='book-preview-item' key={excerpt}>
              <blockquote className='book-preview-quote'>
                <span className='book-preview-quote__mark' aria-hidden='true'>
                  “
                </span>
                <p>{excerpt}</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default BookPreview;
