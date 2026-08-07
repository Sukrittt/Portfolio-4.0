export function Footer({ scrollToId }) {
  return (
    <footer className="footer">
      <span className="footer-copy">© 2026 Sukrit Saha</span>
      <a
        href="#hero"
        data-magnetic="true"
        data-cursor=""
        className="footer-top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId('hero');
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}
