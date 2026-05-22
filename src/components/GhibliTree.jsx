// Cherry blossom tree — uses the real photo, fixed bottom-left
export default function GhibliTree() {
  return (
    <div
      className="fixed bottom-0 left-0 pointer-events-none select-none"
      style={{ zIndex: 0, width: '340px', opacity: 0.82 }}
    >
      <img
        src="/StockCake-Serene_Cherry_Blossoms-249691-small.jpg"
        alt=""
        className="w-full h-auto object-contain object-bottom"
        style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }}
      />
    </div>
  );
}
