const services = [
  {
    title: "Frontend Development",
    desc: "Responsive နှင့် modern website များ ရေးသားတည်ဆောက်ပေးနိုင်ပါသည်။",
  },
  {
    title: "Portfolio Website",
    desc: "ကိုယ်ပိုင် portfolio နှင့် personal branding website များ ဖန်တီးနိုင်ပါသည်။",
  },
  {
    title: "UI Design",
    desc: "အသုံးပြုရလွယ်ကူပြီး လှပသော UI layout များ တည်ဆောက်ပေးနိုင်ပါသည်။",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title center">ဝန်ဆောင်မှုများ</h2>
        <div className="card-grid">
          {services.map((service, index) => (
            <div className="glass-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

