export function Cursor({ dotRef, ringRef, cursorLabel }) {
  const cursorActive = cursorLabel !== null;
  const cursorScale = cursorLabel ? 2.4 : cursorActive ? 1.6 : 1;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ transform: `translate(-50%,-50%) scale(${cursorScale})` }}
      >
        <span className="cursor-ring-label">{cursorLabel || ''}</span>
      </div>
    </>
  );
}
