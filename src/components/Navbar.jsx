function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-wrap">
        <h2 className="brand">မိုးကျော်အောင်</h2>
        <ul className="nav-links">
          <li><a href="#home">ပင်မ</a></li>
          <li><a href="#about">အကြောင်း</a></li>
          <li><a href="#skills">ကျွမ်းကျင်မှု</a></li>
          <li><a href="#services">ဝန်ဆောင်မှု</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#contact">ဆက်သွယ်ရန်</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

