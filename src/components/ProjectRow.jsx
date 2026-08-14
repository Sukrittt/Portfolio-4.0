export function ProjectRow({ project, index, isExpanded, isHovered, isRevealed, onToggle, onEnter, onLeave }) {
  return (
    <div>
      <div
        className="project-row"
        data-reveal-id={`row-${index}`}
        data-cursor="VIEW"
        onClick={onToggle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
          background: isHovered ? 'var(--wash)' : 'transparent',
          paddingLeft: isHovered ? '14px' : '0px',
          transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${index * 0.04}s, transform .7s cubic-bezier(.16,1,.3,1) ${index * 0.04}s, background .35s ease, padding-left .35s ease`,
        }}
      >
        <div className="project-row-left">
          <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-title" style={{ color: isHovered ? 'var(--accent)' : 'var(--text)' }}>
            {project.title}
          </span>
        </div>
        <span
          className="project-toggle"
          style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </div>

      <div
        className="project-panel"
        style={{
          maxHeight: isExpanded ? '480px' : '0px',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="project-panel-inner">
          <div className="project-meta">{project.meta}</div>
          <p className="project-blurb">{project.blurb}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener"
                data-magnetic="true"
                data-cursor=""
                className="project-code-link"
              >
                Live ↗
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener"
                data-magnetic="true"
                data-cursor=""
                className="project-code-link"
              >
                {project.codeLabel || 'Code ↗'}
              </a>
            )}
            {project.extraLinks?.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                data-magnetic="true"
                data-cursor=""
                className="project-code-link"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
