const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern UI design ပါသော personal portfolio project တစ်ခု။",
  },
  {
    title: "React Dashboard",
    desc: "Reusable components များဖြင့် တည်ဆောက်ထားသော dashboard project။",
  },
  {
    title: "Landing Page",
    desc: "Business promotion အတွက် responsive landing page design။",
  },
];

function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title center">Project များ</h2>
        <div className="card-grid">
          {projects.map((project, index) => (
            <div className="glass-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button className="btn small-btn">ကြည့်ရန်</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

