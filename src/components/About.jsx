import { TOOLKIT } from '../data/projects';

export function About({ reveal }) {
  return (
    <section id="about" className="about-section">
      <div data-reveal-id="about-block" style={reveal('about-block')}>
        <span className="overline">(02) ABOUT</span>
        <p className="about-statement">
          I'm a frontend engineer in Bengaluru, currently at Sumeru Inc. I build for web and mobile,
          most recently Aviary, a budgeting app on both. I care most about interfaces that feel
          instant.
        </p>
        <div className="toolkit-items">
          {TOOLKIT.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
