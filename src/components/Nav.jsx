export function Nav({ scrollToId }) {
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <nav className="nav">
      <a href="#hero" className="nav-wordmark" data-magnetic="true" data-cursor="" onClick={go('hero')}>
        SUKRIT SAHA
      </a>
      <div className="nav-links">
        <a href="#work" data-magnetic="true" data-cursor="" onClick={go('work')}>
          Work
        </a>
        <a href="#about" data-magnetic="true" data-cursor="" onClick={go('about')}>
          About
        </a>
        <a href="#contact" data-magnetic="true" data-cursor="" onClick={go('contact')}>
          Contact
        </a>
      </div>
    </nav>
  );
}
