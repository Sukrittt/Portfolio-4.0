import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectRow } from './ProjectRow';

export function Work({ reveal, revealedIds, previewRef, isTouch }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const hoverProject = hoverIndex !== null ? PROJECTS[hoverIndex] : null;

  return (
    <section id="work" className="work-section">
      <div className="work-header" style={reveal('work-header')}>
        <span className="overline">({String(PROJECTS.length).padStart(2, '0')}) SELECTED WORK</span>
        <span className="work-header-range">2023 — 2026</span>
      </div>

      {PROJECTS.map((project, i) => (
        <ProjectRow
          key={project.title}
          project={project}
          index={i}
          isExpanded={expandedIndex === i}
          isHovered={hoverIndex === i}
          isRevealed={revealedIds.has(`row-${i}`)}
          onToggle={() => setExpandedIndex((cur) => (cur === i ? null : i))}
          onEnter={() => setHoverIndex(i)}
          onLeave={() => setHoverIndex(null)}
        />
      ))}

      {!isTouch && (
        <div ref={previewRef} className="preview-swatch-wrap">
          <div
            className="preview-swatch"
            style={{
              opacity: hoverProject ? 1 : 0,
              transform: hoverProject ? 'scale(1)' : 'scale(0.85)',
            }}
          >
            {hoverProject?.media.type === 'video' && (
              <video
                className="preview-media"
                src={hoverProject.media.src}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
            {hoverProject?.media.type === 'image' && (
              <img
                className={hoverProject.media.fit === 'icon' ? 'preview-media preview-media-icon' : 'preview-media'}
                src={hoverProject.media.src}
                alt=""
              />
            )}
            {hoverProject?.media.type === 'placeholder' && <div className="preview-stripes" />}
          </div>
        </div>
      )}
    </section>
  );
}
