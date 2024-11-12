// src/pages/ContactPage.jsx
import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import ContactView from "../../components/Contact/ContactView";


function Contact() {
  const [formData, setFormData] = useState(null);

  const yourSubmitFunction = (data) => {
    setFormData(data);
  };

  return (
    <div>
     <ContactForm onSubmit={yourSubmitFunction} />

      {formData && <ContactView data={formData} />}
    </div>
  );
}

export default Contact;
