// src/components/Contact/ContactView.jsx
import { useLocation } from "react-router-dom";

function ContactView() {
  const location = useLocation();
  const formData = location.state;

  if (!formData) {
    return (
      <div>
        <p>Form verisi bulunamadı. Lütfen geri dönüp tekrar deneyin.</p>
        <button className="bg-black" onClick={() => navigate(-1)}>Geri Dön</button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl space-y-3">
    <h2 className="text-2xl font-bold text-center mt-48">Gönderilen Bilgiler</h2>
    <div className="space-y-2">
      <p><strong>Ad Soyad:</strong> {formData.name}</p>
      <p><strong>E-posta Adresi:</strong> {formData.email}</p>
      <p><strong>Telefon Numarası:</strong> {formData.phone}</p>
      <p><strong>Mesaj:</strong> {formData.message}</p>
    </div>
  </div>
  
  );
}

export default ContactView;
