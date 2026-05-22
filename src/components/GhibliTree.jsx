// Decorative Ghibli-style cherry blossom tree — fixed to the left side of the page
export default function GhibliTree() {
  return (
    <div
      className="fixed bottom-0 left-0 pointer-events-none select-none"
      style={{ zIndex: 0, opacity: 0.65 }}
    >
      <svg
        viewBox="0 0 280 560"
        width="280"
        height="560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Roots ── */}
        <path d="M125 552 Q110 532 94 520 Q82 511 72 518" stroke="#5C3A1E" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d="M125 552 Q118 536 106 528 Q93 521 86 528" stroke="#5C3A1E" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M138 552 Q148 533 160 522 Q171 513 178 520" stroke="#5C3A1E" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d="M138 552 Q144 538 153 531 Q163 524 168 530" stroke="#5C3A1E" strokeWidth="4" strokeLinecap="round" fill="none"/>

        {/* ── Main trunk ── */}
        <path
          d="M122 552 Q114 500 118 438 Q122 375 114 312 Q108 265 114 218 Q118 185 112 155"
          stroke="#4A2E10"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
        {/* trunk texture highlight */}
        <path
          d="M128 552 Q120 500 124 438 Q128 375 120 312 Q114 265 120 218 Q124 185 118 155"
          stroke="#7A4F28"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
        {/* dark groove */}
        <path
          d="M116 500 Q110 460 114 410"
          stroke="#3A2008"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* ── Branch right 1 (low) ── */}
        <path d="M116 410 Q148 388 178 370 Q196 360 208 348" stroke="#4A2E10" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <path d="M208 348 Q224 338 234 324 Q240 316 248 310" stroke="#4A2E10" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M224 332 Q238 322 244 308" stroke="#4A2E10" strokeWidth="5" strokeLinecap="round" fill="none"/>

        {/* ── Branch left 1 (low) ── */}
        <path d="M114 375 Q86 352 62 336 Q44 323 32 310" stroke="#4A2E10" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <path d="M32 310 Q18 298 12 284 Q6 274 8 264" stroke="#4A2E10" strokeWidth="6" strokeLinecap="round" fill="none"/>

        {/* ── Branch right 2 (mid) ── */}
        <path d="M114 298 Q142 272 168 256 Q184 246 196 234" stroke="#4A2E10" strokeWidth="9" strokeLinecap="round" fill="none"/>
        <path d="M196 234 Q212 222 220 208" stroke="#4A2E10" strokeWidth="5.5" strokeLinecap="round" fill="none"/>

        {/* ── Branch left 2 (mid) ── */}
        <path d="M112 270 Q88 248 66 234 Q50 224 40 210" stroke="#4A2E10" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <path d="M40 210 Q26 198 20 184" stroke="#4A2E10" strokeWidth="5" strokeLinecap="round" fill="none"/>

        {/* ── Branch right 3 (high) ── */}
        <path d="M112 190 Q136 168 158 152 Q172 142 182 128" stroke="#4A2E10" strokeWidth="7" strokeLinecap="round" fill="none"/>

        {/* ── Branch left 3 (high) ── */}
        <path d="M112 178 Q90 158 70 144 Q54 134 44 118" stroke="#4A2E10" strokeWidth="6.5" strokeLinecap="round" fill="none"/>

        {/* ══ BLOSSOM CLUSTERS — back layer (deeper pink) ══ */}
        <ellipse cx="250" cy="300" rx="34" ry="28" fill="#e8a0b8" opacity="0.6"/>
        <ellipse cx="10"  cy="264" rx="30" ry="25" fill="#e8a0b8" opacity="0.6"/>
        <ellipse cx="222" cy="200" rx="36" ry="30" fill="#e8a0b8" opacity="0.6"/>
        <ellipse cx="18"  cy="178" rx="32" ry="27" fill="#e8a0b8" opacity="0.6"/>
        <ellipse cx="110" cy="148" rx="50" ry="42" fill="#e8a0b8" opacity="0.65"/>

        {/* ══ BLOSSOM CLUSTERS — mid layer ══ */}
        <ellipse cx="242" cy="310" rx="40" ry="33" fill="#f2b8ce"/>
        <ellipse cx="262" cy="296" rx="28" ry="24" fill="#f5c4d8"/>
        <ellipse cx="8"   cy="272" rx="36" ry="30" fill="#f2b8ce"/>
        <ellipse cx="218" cy="208" rx="42" ry="35" fill="#f2b8ce"/>
        <ellipse cx="238" cy="192" rx="28" ry="24" fill="#f5c4d8"/>
        <ellipse cx="16"  cy="186" rx="38" ry="32" fill="#f2b8ce"/>
        <ellipse cx="110" cy="155" rx="56" ry="46" fill="#f2b8ce"/>
        <ellipse cx="86"  cy="145" rx="36" ry="30" fill="#f5c4d8"/>
        <ellipse cx="134" cy="142" rx="32" ry="28" fill="#f5c4d8"/>

        {/* ══ BLOSSOM CLUSTERS — front layer (lightest pink / white-pink) ══ */}
        <ellipse cx="246" cy="302" rx="32" ry="26" fill="#fce4ee"/>
        <ellipse cx="12"  cy="266" rx="28" ry="23" fill="#fce4ee"/>
        <ellipse cx="226" cy="200" rx="34" ry="27" fill="#fce4ee"/>
        <ellipse cx="20"  cy="180" rx="30" ry="25" fill="#fce4ee"/>
        <ellipse cx="108" cy="148" rx="48" ry="40" fill="#fce4ee"/>
        <ellipse cx="90"  cy="136" rx="32" ry="28" fill="#fff0f5"/>
        <ellipse cx="128" cy="132" rx="30" ry="26" fill="#fff0f5"/>
        <ellipse cx="108" cy="118" rx="40" ry="34" fill="#fff0f5"/>

        {/* ══ Individual blossoms (5-petal flowers) ══ */}
        {/* helper: small 5-petal flower using circles */}
        {[
          [108, 106], [88, 118], [128, 114], [100, 128], [118, 124],
          [246, 292], [260, 302], [14, 258], [220, 192], [232, 202],
          [22, 172], [36, 182],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx}      cy={cy - 6}  r="4.5" fill="#ffd6e7" opacity="0.9"/>
            <circle cx={cx + 5.7} cy={cy - 1.9} r="4.5" fill="#ffd6e7" opacity="0.9"/>
            <circle cx={cx + 3.5} cy={cy + 5}  r="4.5" fill="#ffd6e7" opacity="0.9"/>
            <circle cx={cx - 3.5} cy={cy + 5}  r="4.5" fill="#ffd6e7" opacity="0.9"/>
            <circle cx={cx - 5.7} cy={cy - 1.9} r="4.5" fill="#ffd6e7" opacity="0.9"/>
            <circle cx={cx}      cy={cy}       r="3"   fill="#ffb8d0"/>
            <circle cx={cx}      cy={cy}       r="1.2" fill="#fff0f5"/>
          </g>
        ))}

        {/* ══ Falling petals ══ */}
        {[
          [210, 380, -25], [175, 420, 15], [240, 450, -40],
          [60,  360, 20],  [30,  400, -15],[80,  440, 35],
          [155, 460, -10], [120, 490, 20], [190, 500, -30],
          [50,  490, 10],  [260, 420, 18], [20,  470, -20],
        ].map(([cx, cy, rot], i) => (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="5" ry="8"
            fill="#f9c8dc"
            opacity={0.35 + (i % 4) * 0.07}
            transform={`rotate(${rot} ${cx} ${cy})`}
          />
        ))}

        {/* ══ Sparkle dots ══ */}
        <circle cx="102" cy="112" r="2.5" fill="#fff" opacity="0.8"/>
        <circle cx="120" cy="108" r="2"   fill="#fff" opacity="0.75"/>
        <circle cx="110" cy="124" r="2"   fill="#fff" opacity="0.7"/>
        <circle cx="248" cy="294" r="2"   fill="#fff" opacity="0.65"/>
        <circle cx="18"  cy="262" r="2"   fill="#fff" opacity="0.65"/>
        <circle cx="224" cy="196" r="2"   fill="#fff" opacity="0.6"/>
      </svg>
    </div>
  );
}
