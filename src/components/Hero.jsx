const HERO_LINES = ['Sukrit Saha', 'builds interactive'];

function metaStyle(loaded, delay) {
  return {
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(16px)',
    transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,
  };
}

export function Hero({ loaded, word, wordPhase, pauseWord, resumeWord }) {
  const line3Delay = 0.15 + 2 * 0.09;

  return (
    <section id="hero" className="hero">
      <div className="hero-eyebrow" style={metaStyle(loaded, 0.1)}>
        SOFTWARE ENGINEER — BENGALURU, INDIA
      </div>

      <div className="hero-headline">
        {HERO_LINES.map((text, i) => {
          const delay = 0.15 + i * 0.09;
          return (
            <div className="hero-line-mask" key={text}>
              <div
                className="hero-line"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(100%)',
                  transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${delay}s, transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
                }}
              >
                {text}
              </div>
            </div>
          );
        })}
        <div className="hero-line-mask">
          <div
            className="hero-line3"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(100%)',
              transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${line3Delay}s, transform .9s cubic-bezier(.16,1,.3,1) ${line3Delay}s`,
            }}
          >
            <span className="hero-line">products with </span>
            <span
              className="hero-word"
              style={{
                opacity: wordPhase === 'out' ? 0 : 1,
                transform: wordPhase === 'out' ? 'translateY(10px)' : 'translateY(0)',
              }}
              onMouseEnter={pauseWord}
              onMouseLeave={resumeWord}
            >
              {word}
            </span>
            <span className="hero-line">.</span>
          </div>
        </div>
      </div>

      <div className="hero-subtext" style={metaStyle(loaded, 0.3)}>
        Currently building at Sumeru Inc. Selected work below.
      </div>

      <div className="hero-availability" style={metaStyle(loaded, 0.45)}>
        <span className="availability-dot" />
        <span>Available for select freelance work</span>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="scroll-cue-arrow">↓</span>
      </div>
    </section>
  );
}
