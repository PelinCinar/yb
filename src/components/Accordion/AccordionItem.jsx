// src/components/Accordion/AccordionItem.jsx
import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{question}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
