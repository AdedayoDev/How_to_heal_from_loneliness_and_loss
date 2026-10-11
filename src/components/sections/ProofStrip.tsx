import { motion, useReducedMotion } from "motion/react";

const statistics = [
  {
    value: "24%",
    description:
      "Approximately 24% of adults worldwide (Over one billion people) report feeling very or fairly lonely",
    source: "Meta-Gallup survey, 142 countries, 2023",
  },
  {
    value: "15 cigarettes a day",
    description:
      "is the premature-death risk the U.S. Surgeon General compares to lacking social connection.",
    source:
      "U.S. Surgeon General's Advisory on the Epidemic of Loneliness and Isolation, 2023",
  },
];

function ProofStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='proof-strip-section'
      id='proof'
      aria-labelledby='proof-strip-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='proof-strip-content container'>
        <h2 className='proof-strip-title' id='proof-strip-title'>
          YOU'RE NOT THE ONLY ONE, AND IT'S NOT "JUST IN YOUR HEAD"
        </h2>

        <div className='proof-strip-grid'>
          {statistics.map((statistic) => (
            <article className='proof-card' key={statistic.value}>
              <h3 className='proof-card__statistic'>{statistic.value}</h3>
              <p className='proof-card__description'>{statistic.description}</p>
              <cite className='proof-card__source'>{statistic.source}</cite>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProofStrip;
