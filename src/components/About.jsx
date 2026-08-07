import { TOOLKIT } from '../data/projects';

export function About({ reveal }) {
  return (
    <section id="about" className="about-section">
      <div data-reveal-id="about-block" style={reveal('about-block')}>
        <span className="overline">(02) ABOUT</span>
        <p className="about-statement">
          I'm a frontend engineer from India, currently building at Sumeru Inc. I care about
          interfaces that feel instant — considered motion, no wasted clicks, code that ships.
          Lately most of that shipping happens with Claude Code — prototyping fast with agentic
          tooling, then layering in the fallbacks and validation that make it production-ready.
        </p>
        <div className="toolkit-list">
          {TOOLKIT.map((col) => (
            <div className="toolkit-row" key={col.label}>
              <span className="toolkit-label">{col.label}</span>
              <div className="toolkit-items">
                {col.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
