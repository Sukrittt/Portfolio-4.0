export function Contact({ reveal }) {
  return (
    <section id="contact" className="contact-section">
      <div data-reveal-id="contact-block" style={reveal('contact-block')}>
        <span className="overline">(03) CONTACT</span>
        <div className="contact-mail-row">
          <a
            href="mailto:sukritsaha27@gmail.com?subject=Hey%20Sukrit"
            data-magnetic="true"
            data-cursor="SAY HI"
            className="contact-mail"
          >
            sukritsaha27@gmail.com
          </a>
        </div>
        <div className="contact-links">
          <a href="/resume.pdf" target="_blank" rel="noopener" data-magnetic="true" data-cursor="">
            Résumé ↓
          </a>
          <a
            href="https://github.com/Sukrittt"
            target="_blank"
            rel="noopener"
            data-magnetic="true"
            data-cursor=""
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sukrit-saha-b6117a242/"
            target="_blank"
            rel="noopener"
            data-magnetic="true"
            data-cursor=""
          >
            LinkedIn ↗
          </a>
          <a
            href="https://x.com/SukritSaha11"
            target="_blank"
            rel="noopener"
            data-magnetic="true"
            data-cursor=""
          >
            X / Twitter ↗
          </a>
        </div>
      </div>
    </section>
  );
}
