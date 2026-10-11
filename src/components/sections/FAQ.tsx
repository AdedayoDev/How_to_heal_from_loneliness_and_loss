import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const faqItems = [
  {
    id: "loss",
    question: "What kinds of loss does this book cover?",
    answer:
      "The book addresses different forms of loss, including death, relationships, friendships, jobs, plans, and seasons of life.",
  },
  {
    id: "faith",
    question: "Is this a Christian book?",
    answer:
      "Yes. The book is rooted in Christian faith and Scripture. Its approach is intended to be gentle and supportive, without pressure or judgement.",
  },
  {
    id: "professional-care",
    question: "Can this book replace therapy or professional medical care?",
    answer:
      "No. This book is intended as supportive reading and does not replace therapy, medical advice, or professional care. Faith and professional help do not have to be alternatives to one another.",
  },
  {
    id: "delivery",
    question: "How will I receive the book after payment?",
    answer:
      "The delivery process has not been confirmed yet. Verified delivery details will be provided when available.",
    requiresConfirmation: true,
  },
  {
    id: "phone-reading",
    question: "Can I read the book on my phone?",
    answer:
      "Phone compatibility depends on the final digital format, which has not been confirmed yet. Please check the product information for compatibility details before purchasing.",
    requiresConfirmation: true,
  },
  {
    id: "support",
    question: "How can I contact support?",
    answer:
      "Verified support contact details are not available yet. Please check this page for confirmed contact information before purchasing.",
    requiresConfirmation: true,
  },
];

function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className='faq-section'
      id='faq'
      aria-labelledby='faq-title'
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className='faq-content container'>
        <h2 className='faq-title' id='faq-title'>
          Frequently asked questions
        </h2>

        <div className='faq-list'>
          {faqItems.map((item) => {
            const expanded = openItem === item.id;
            const triggerId = `faq-question-${item.id}`;
            const panelId = `faq-answer-${item.id}`;

            return (
              <div
                className='faq-item'
                key={item.id}
                data-requires-confirmation={
                  item.requiresConfirmation ? "true" : undefined
                }
              >
                <h3 className='faq-item__heading'>
                  <button
                    className='faq-item__trigger'
                    type='button'
                    id={triggerId}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenItem((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    <span>{item.question}</span>
                    <span
                      className={`faq-item__indicator${expanded ? " faq-item__indicator--open" : ""}`}
                      aria-hidden='true'
                    />
                  </button>
                </h3>
                <div
                  className='faq-item__panel'
                  id={panelId}
                  role='region'
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
