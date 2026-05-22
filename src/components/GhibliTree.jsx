// Decorative Ghibli-style tree — fixed to the left side of the page
export default function GhibliTree() {
  return (
    <div
      className="fixed bottom-0 left-0 pointer-events-none select-none"
      style={{ zIndex: 0, opacity: 0.55 }}
    >
      <svg
        viewBox="0 0 260 520"
        width="260"
        height="520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Roots ── */}
        <path d="M118 510 Q105 490 90 480 Q80 472 70 478" stroke="#8B6343" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M118 510 Q112 495 100 490 Q88 486 82 492" stroke="#8B6343" strokeWidth="4" strokeLinecap="round" fill="none"/>
        <path d="M130 510 Q138 492 148 485 Q158 478 165 483" stroke="#8B6343" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M130 510 Q135 498 142 494 Q152 490 156 496" stroke="#8B6343" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

        {/* ── Main trunk ── */}
        <path
          d="M115 510 Q108 460 112 400 Q116 340 108 280 Q104 240 110 200"
          stroke="#7A5230"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        {/* trunk highlight */}
        <path
          d="M120 510 Q114 460 118 400 Q122 340 114 280 Q110 240 116 200"
          stroke="#A0703F"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* ── Branch right 1 ── */}
        <path d="M112 380 Q140 360 168 345 Q185 337 195 328" stroke="#7A5230" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <path d="M195 328 Q210 320 218 308" stroke="#7A5230" strokeWidth="6" strokeLinecap="round" fill="none"/>

        {/* ── Branch left 1 ── */}
        <path d="M110 320 Q82 300 60 285 Q44 274 36 262" stroke="#7A5230" strokeWidth="9" strokeLinecap="round" fill="none"/>
        <path d="M36 262 Q22 254 18 242" stroke="#7A5230" strokeWidth="5" strokeLinecap="round" fill="none"/>

        {/* ── Branch right 2 (higher) ── */}
        <path d="M110 250 Q135 228 158 215 Q172 207 180 196" stroke="#7A5230" strokeWidth="8" strokeLinecap="round" fill="none"/>

        {/* ── Branch left 2 (higher) ── */}
        <path d="M110 230 Q88 210 68 198 Q54 190 46 178" stroke="#7A5230" strokeWidth="7" strokeLinecap="round" fill="none"/>

        {/* ── Leaf clusters — back layer (darker) ── */}
        {/* far right low */}
        <ellipse cx="210" cy="308" rx="38" ry="32" fill="#5a8c4a" opacity="0.7"/>
        <ellipse cx="232" cy="296" rx="26" ry="22" fill="#4e7e40" opacity="0.7"/>
        {/* far left low */}
        <ellipse cx="26" cy="248" rx="34" ry="28" fill="#5a8c4a" opacity="0.7"/>
        <ellipse cx="10" cy="236" rx="22" ry="19" fill="#4e7e40" opacity="0.7"/>
        {/* right mid */}
        <ellipse cx="185" cy="192" rx="40" ry="33" fill="#5a8c4a" opacity="0.75"/>
        {/* left mid */}
        <ellipse cx="42" cy="175" rx="36" ry="30" fill="#5a8c4a" opacity="0.75"/>

        {/* ── Leaf clusters — mid layer ── */}
        <ellipse cx="196" cy="318" rx="44" ry="36" fill="#6aab58"/>
        <ellipse cx="218" cy="302" rx="30" ry="25" fill="#72b860"/>
        <ellipse cx="22"  cy="256" rx="38" ry="31" fill="#6aab58"/>
        <ellipse cx="8"   cy="243" rx="24" ry="20" fill="#72b860"/>
        <ellipse cx="180" cy="200" rx="46" ry="37" fill="#6aab58"/>
        <ellipse cx="200" cy="185" rx="30" ry="26" fill="#72b860"/>
        <ellipse cx="46"  cy="182" rx="40" ry="33" fill="#6aab58"/>
        <ellipse cx="28"  cy="168" rx="26" ry="22" fill="#72b860"/>

        {/* ── Top crown — main cluster ── */}
        <ellipse cx="108" cy="175" rx="52" ry="44" fill="#5a8c4a" opacity="0.8"/>
        <ellipse cx="108" cy="155" rx="56" ry="46" fill="#6aab58"/>
        <ellipse cx="88"  cy="148" rx="38" ry="32" fill="#78c063"/>
        <ellipse cx="128" cy="145" rx="34" ry="29" fill="#78c063"/>
        <ellipse cx="108" cy="132" rx="44" ry="38" fill="#82cc6e"/>
        <ellipse cx="92"  cy="122" rx="30" ry="26" fill="#8ed47a"/>
        <ellipse cx="124" cy="118" rx="28" ry="24" fill="#8ed47a"/>
        <ellipse cx="108" cy="108" rx="36" ry="30" fill="#96dc82"/>

        {/* ── Highlight dots on leaves (Ghibli sparkle) ── */}
        <circle cx="96"  cy="120" r="4" fill="#c8f0b0" opacity="0.7"/>
        <circle cx="118" cy="112" r="3" fill="#c8f0b0" opacity="0.6"/>
        <circle cx="108" cy="130" r="2.5" fill="#daf5c0" opacity="0.65"/>
        <circle cx="82"  cy="145" r="3" fill="#c8f0b0" opacity="0.55"/>
        <circle cx="134" cy="140" r="2.5" fill="#c8f0b0" opacity="0.55"/>
        <circle cx="195" cy="190" r="3" fill="#c8f0b0" opacity="0.5"/>
        <circle cx="44"  cy="178" r="3" fill="#c8f0b0" opacity="0.5"/>
        <circle cx="212" cy="308" r="3" fill="#c8f0b0" opacity="0.45"/>
        <circle cx="20"  cy="250" r="2.5" fill="#c8f0b0" opacity="0.45"/>

        {/* ── A few tiny leaves falling ── */}
        <ellipse cx="235" cy="370" rx="5" ry="8" fill="#82cc6e" opacity="0.5" transform="rotate(-30 235 370)"/>
        <ellipse cx="50"  cy="340" rx="4" ry="7" fill="#78c063" opacity="0.45" transform="rotate(20 50 340)"/>
        <ellipse cx="200" cy="420" rx="4" ry="6" fill="#6aab58" opacity="0.4" transform="rotate(-15 200 420)"/>
        <ellipse cx="30"  cy="410" rx="3.5" ry="6" fill="#72b860" opacity="0.4" transform="rotate(25 30 410)"/>
      </svg>
    </div>
  );
}
