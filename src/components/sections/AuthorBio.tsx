import { motion, useReducedMotion } from "motion/react";

function AuthorBio() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='author-bio-section'
      id='author'
      aria-labelledby='author-bio-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='author-bio-layout container'>
        <h2 className='author-bio-title' id='author-bio-title'>
          WRITTEN BY A PASTOR WHO HAS SAT WITH HURTING PEOPLE
        </h2>

        <div className='author-bio-copy'>
          <p>
            Ipaye Isaac is the Lead Pastor of The Household of Light (THOL) and
            the author of <em>Fearless Through Faith</em>, <em>Pneumatikos</em>,
            and <em>Training and Responsibility of Believers</em>.
          </p>
          <p>
            He has nearly two decades of ministry experience involving teaching,
            discipleship, and helping people navigate faith and life. Through
            counselling, mentorship, and conferences, he has counselled and
            mentored hundreds of people.
          </p>
        </div>

        <img
          className='author-bio-portrait'
          src='/Pastor%20Picture.png'
          alt='Pastor Ipaye Isaac'
        />

        <p className='author-bio-closing'>
          He wrote this book for the person who keeps showing up, keeps smiling,
          and keeps hurting in private.
        </p>
      </div>
    </motion.section>
  );
}

export default AuthorBio;
