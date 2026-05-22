// Full-page cherry blossom background scene
export default function GhibliTree() {
  return (
    <div
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: -1 }}
    >
      <img
        src="/StockCake-Serene_Cherry_Blossoms-249691-small.jpg"
        alt=""
        className="w-full h-full"
        style={{
          opacity: 0.5,
          objectFit: 'cover',
          objectPosition: 'center top',
          filter: 'brightness(1.1) saturate(0.85) blur(2px)',
          transform: 'scale(1.04)', // hide blur edges
        }}
      />
      {/* soft white vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 20%, rgba(255,255,255,0.5) 100%)'
      }} />
    </div>
  );
}
