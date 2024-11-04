import React from 'react';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer p-4"
        onClick={onToggle} // Tıklama olayını çağır
      >
        <h2 className="font-semibold text-lg">{question}</h2> {/* Soru metni büyütüldü */}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>&#9654;</span> {/* Ok işareti */}
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
