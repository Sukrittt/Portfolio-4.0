export function Preloader({ loaded }) {
  return (
    <div
      className="preloader"
      style={{
        transform: loaded ? 'translateY(-100%)' : 'translateY(0)',
        pointerEvents: loaded ? 'none' : 'all',
      }}
    >
      <span className="preloader-text" style={{ opacity: loaded ? 0 : 1 }}>
        SS
      </span>
    </div>
  );
}
