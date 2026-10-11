import { motion, useReducedMotion } from "motion/react";

const testimonials = [
  {
    id: "reader-1",
    content: "Approved reader testimonial will appear here.",
    attribution: "Reader name to be added",
  },
  {
    id: "reader-2",
    content: "Approved reader testimonial will appear here.",
    attribution: "Reader name to be added",
  },
  {
    id: "reader-3",
    content: "Approved reader testimonial will appear here.",
    attribution: "Reader name to be added",
  },
];

function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='testimonials-section'
      id='testimonials'
      aria-labelledby='testimonials-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='testimonials-content container'>
        <h2 className='testimonials-title' id='testimonials-title'>
          WHAT EARLY READERS ARE SAYING
        </h2>

        <ul className='testimonials-grid'>
          {testimonials.map((testimonial) => (
            <li className='testimonials-grid__item' key={testimonial.id}>
              <article className='testimonial-card'>
                <span className='testimonial-card__status'>
                  Development placeholder
                </span>
                <p className='testimonial-card__content'>
                  {testimonial.content}
                </p>
                <p className='testimonial-card__attribution'>
                  {testimonial.attribution}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div
          className='testimonials-video-placeholder'
          role='group'
          aria-label='Testimonial video placeholder'
        >
          <p>Approved reader testimonial video to be added</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
