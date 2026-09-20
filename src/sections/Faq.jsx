import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import FaqItem from "../components/FaqItem";
function Faq() {
  const faqs = [
    {
      id: 1,
      question: "Is Taskly really free to start?",
      answer:
        "Yes, Taskly offers a free plan that includes essential task management features. No credit card is required.",
    },
    {
      id: 2,
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade to the Pro plan at any time as your needs or team grow.",
    },
    {
      id: 3,
      question: "Do you offer a refund?",
      answer:
        "Yes, we offer a 14-day money-back guarantee if you are not satisfied with your Pro plan.",
    },
    {
      id: 4,
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard security measures to keep your tasks and personal information safe.",
    },
  ];
  const [openId, setOpenId] = useState(null);
  function handleToggle(id) {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  }
  return (
    <section className="py-3">
      <div className="container">
        <SectionTitle title="faq" description="Frequently asked questions" />
        <div>
          {faqs.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId===item.id}
              onToggle={()=>handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Faq;
