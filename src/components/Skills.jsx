const skills = [
  { name: "HTML5", level: "95%" },
  { name: "CSS3", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "Bootstrap", level: "92%" },
  { name: "React", level: "80%" },
];

function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title center">ကျွမ်းကျင်မှုများ</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

