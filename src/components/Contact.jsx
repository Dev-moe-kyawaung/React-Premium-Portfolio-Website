import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("ကျေးဇူးပြု၍ အချက်အလက်အားလုံးဖြည့်ပါ။");
      return;
    }

    setStatus("သင့် message ကို အောင်မြင်စွာပို့ပြီးပါပြီ။");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title center">ဆက်သွယ်ရန်</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="သင့်နာမည်"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="သင့်အီးမေးလ်"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="သင့် message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn">ပို့မည်</button>
          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

