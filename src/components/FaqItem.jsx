import { ChevronDown, ChevronUp } from "lucide-react";
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-card px-3 py-2  rounded-3 mb-3">
      <div
        className="question-card d-flex justify-content-between"
        onClick={onToggle}>
        <h6 className="mb-0 fw-light">{question}</h6>
        {isOpen ? (
          <ChevronUp size={18} color="black" />
        ) : (
          <ChevronDown size={18} color="black" />
        )}
      </div>
      {isOpen && <p className="mb-0 mt-2 fs-14">{answer}</p>}
    </div>
  );
}
export default FaqItem;
