import { motion, useReducedMotion } from "motion/react";

function AuthorStory() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='author-story-section'
      id='story'
      aria-labelledby='author-story-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='author-story-layout container'>
        <h2 className='author-story-title' id='author-story-title'>
          I THOUGHT BEING ALONE WOULD GIVE ME PEACE. IT GAVE ME A SMALLER WORLD.
        </h2>

        <div className='author-story-copy'>
          <p>
            There was a season I stopped answering calls, ignored messages, and
            found an excuse for every invitation. No questions. No pressure to
            explain.
          </p>
          <p>
            At first, it felt like peace. Then the silence started to feel
            lonely. I realised I could shut my door, but I couldn't shut out
            what was happening inside me.
          </p>
        </div>

        <blockquote className='author-story-quote'>
          <span className='author-story-quote__mark' aria-hidden='true'>
            “
          </span>
          <p>
            There is a strange thing about isolation: it can feel like freedom
            when you first enter it, and like a prison after you have stayed too
            long.
          </p>
        </blockquote>

        <p className='author-story-closing'>
          That's the road this book walks, from hiding to healing, with the
          honesty, Scripture and practical steps that helped me and the many
          people I have walked with.
        </p>

        <a className='btn btn-primary author-story-cta' href='#offer'>
          Read the Story Behind the Book
        </a>
      </div>
    </motion.section>
  );
}

export default AuthorStory;
