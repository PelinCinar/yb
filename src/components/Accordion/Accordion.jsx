// src/components/Accordion/Accordion.jsx
import React from 'react';
import AccordionItem from './AccordionItem'; // AccordionItem bileşenini içe aktar

const Accordion = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;
