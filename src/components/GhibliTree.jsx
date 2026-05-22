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
        className="w-full h-full object-cover"
        style={{ opacity: 0.55, filter: 'brightness(1.08) saturate(0.9)' }}
      />
      {/* soft white vignette so edges don't look harsh */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.55) 100%)'
      }} />
    </div>
  );
}
