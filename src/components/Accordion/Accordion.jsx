import React, { useState } from 'react';
import AccordionItem from './AccordionItem'; // AccordionItem bileşenini içe aktar

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null); // Açık olan indeks

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Tıklananı aç, diğerlerini kapat
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index} // Açık olan öğe kontrolü
          onToggle={() => handleToggle(index)} // Tıklama olayını geçir
        />
      ))}
    </div>
  );
};

export default Accordion;
