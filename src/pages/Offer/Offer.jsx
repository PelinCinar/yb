import React, { useState } from 'react';
import Offer from '../../components/OfferContainer/OfferForm';
import Footer from '../Footer/Footer';

const OfferContainer = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    subject: '',
    services: [],
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBlur = () => {
    // İsteğe bağlı olarak burayı doldurabilirsiniz
  };

  return (
 <div>
     <div>
      <Offer values={formValues} handleChange={handleChange} handleBlur={handleBlur} />
    </div>
    <Footer/>
 </div>

  );

};

export default OfferContainer;
