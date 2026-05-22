// Decorative pink cherry blossom tree — fixed to the left side of the page
export default function GhibliTree() {
  return (
    <div
      className="fixed bottom-0 left-0 pointer-events-none select-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    >
      <svg
        viewBox="0 0 300 580"
        width="300"
        height="580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Roots ── */}
        <path d="M132 572 Q118 550 100 538 Q86 528 74 535" stroke="#6B3F1A" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M132 572 Q124 554 110 544 Q96 536 88 542" stroke="#6B3F1A" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M146 572 Q158 551 172 540 Q184 530 194 537" stroke="#6B3F1A" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M146 572 Q153 555 164 547 Q175 539 180 545" stroke="#6B3F1A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>

        {/* ── Main trunk ── */}
        <path d="M136 572 Q128 515 132 448 Q136 378 128 308 Q122 255 128 205 Q132 168 126 135" stroke="#5C3010" strokeWidth="26" strokeLinecap="round" fill="none"/>
        {/* trunk shading */}
        <path d="M142 572 Q134 515 138 448 Q142 378 134 308 Q128 255 134 205 Q138 168 132 135" stroke="#8B5A2B" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.4"/>

        {/* ── Branch right low ── */}
        <path d="M130 430 Q162 408 194 390 Q214 379 228 366" stroke="#5C3010" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d="M228 366 Q246 354 258 338 Q266 328 272 316" stroke="#5C3010" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <path d="M252 342 Q264 328 268 312" stroke="#5C3010" strokeWidth="5" strokeLinecap="round" fill="none"/>

        {/* ── Branch left low ── */}
        <path d="M128 395 Q98 372 70 355 Q50 342 36 328" stroke="#5C3010" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <path d="M36 328 Q20 314 12 298 Q6 286 8 274" stroke="#5C3010" strokeWidth="7" strokeLinecap="round" fill="none"/>

        {/* ── Branch right mid ── */}
        <path d="M128 318 Q158 292 186 274 Q204 262 216 248" stroke="#5C3010" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <path d="M216 248 Q230 234 236 218" stroke="#5C3010" strokeWidth="6" strokeLinecap="round" fill="none"/>

        {/* ── Branch left mid ── */}
        <path d="M126 288 Q100 264 76 248 Q58 236 46 220" stroke="#5C3010" strokeWidth="9" strokeLinecap="round" fill="none"/>
        <path d="M46 220 Q30 206 22 190" stroke="#5C3010" strokeWidth="5.5" strokeLinecap="round" fill="none"/>

        {/* ── Branch right high ── */}
        <path d="M126 208 Q152 182 176 164 Q192 152 204 136" stroke="#5C3010" strokeWidth="8" strokeLinecap="round" fill="none"/>

        {/* ── Branch left high ── */}
        <path d="M126 192 Q102 168 80 152 Q62 140 50 122" stroke="#5C3010" strokeWidth="7.5" strokeLinecap="round" fill="none"/>

        {/* ── Small top twigs ── */}
        <path d="M126 148 Q138 128 148 110" stroke="#5C3010" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M126 148 Q114 126 106 108" stroke="#5C3010" strokeWidth="5" strokeLinecap="round" fill="none"/>
        <path d="M148 110 Q158 96 162 80" stroke="#5C3010" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <path d="M106 108 Q96 94 90 78" stroke="#5C3010" strokeWidth="3.5" strokeLinecap="round" fill="none"/>

        {/* ══ BLOSSOM CLUSTERS ══ */}
        {/* — right low branch end — */}
        <ellipse cx="268" cy="310" rx="30" ry="24" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="272" cy="308" rx="26" ry="21" fill="#f8bfcf"/>
        <ellipse cx="258" cy="318" rx="28" ry="22" fill="#fbd0de"/>
        <ellipse cx="274" cy="298" rx="20" ry="16" fill="#fde4ed"/>

        {/* — left low branch end — */}
        <ellipse cx="8"   cy="272" rx="28" ry="23" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="10"  cy="270" rx="24" ry="20" fill="#f8bfcf"/>
        <ellipse cx="22"  cy="280" rx="26" ry="21" fill="#fbd0de"/>
        <ellipse cx="8"   cy="260" rx="18" ry="15" fill="#fde4ed"/>

        {/* — right mid branch end — */}
        <ellipse cx="234" cy="212" rx="34" ry="27" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="238" cy="210" rx="30" ry="24" fill="#f8bfcf"/>
        <ellipse cx="222" cy="220" rx="32" ry="26" fill="#fbd0de"/>
        <ellipse cx="240" cy="198" rx="22" ry="18" fill="#fde4ed"/>

        {/* — left mid branch end — */}
        <ellipse cx="20"  cy="184" rx="32" ry="26" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="18"  cy="182" rx="28" ry="22" fill="#f8bfcf"/>
        <ellipse cx="34"  cy="192" rx="30" ry="24" fill="#fbd0de"/>
        <ellipse cx="16"  cy="172" rx="20" ry="17" fill="#fde4ed"/>

        {/* — right high branch end — */}
        <ellipse cx="202" cy="128" rx="36" ry="29" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="206" cy="126" rx="32" ry="25" fill="#f8bfcf"/>
        <ellipse cx="190" cy="138" rx="34" ry="27" fill="#fbd0de"/>
        <ellipse cx="208" cy="114" rx="24" ry="20" fill="#fde4ed"/>

        {/* — left high branch end — */}
        <ellipse cx="48"  cy="116" rx="34" ry="27" fill="#f4a7bf" opacity="0.5"/>
        <ellipse cx="44"  cy="114" rx="30" ry="24" fill="#f8bfcf"/>
        <ellipse cx="60"  cy="126" rx="32" ry="25" fill="#fbd0de"/>
        <ellipse cx="40"  cy="104" rx="22" ry="18" fill="#fde4ed"/>

        {/* — top twig ends — */}
        <ellipse cx="164" cy="74"  rx="28" ry="22" fill="#f8bfcf"/>
        <ellipse cx="166" cy="72"  rx="22" ry="18" fill="#fde4ed"/>
        <ellipse cx="88"  cy="72"  rx="26" ry="21" fill="#f8bfcf"/>
        <ellipse cx="86"  cy="70"  rx="20" ry="17" fill="#fde4ed"/>

        {/* — main crown — */}
        <ellipse cx="126" cy="152" rx="58" ry="48" fill="#f4a7bf" opacity="0.45"/>
        <ellipse cx="126" cy="148" rx="62" ry="50" fill="#f8bfcf" opacity="0.8"/>
        <ellipse cx="104" cy="138" rx="42" ry="34" fill="#fbd0de"/>
        <ellipse cx="148" cy="135" rx="38" ry="31" fill="#fbd0de"/>
        <ellipse cx="126" cy="122" rx="50" ry="40" fill="#fde4ed"/>
        <ellipse cx="108" cy="112" rx="34" ry="28" fill="#fff0f5"/>
        <ellipse cx="146" cy="108" rx="30" ry="25" fill="#fff0f5"/>
        <ellipse cx="126" cy="96"  rx="38" ry="30" fill="#fff5f8"/>

        {/* ══ Individual 5-petal blossoms ══ */}
        {[
          [126, 88], [108, 100], [146, 96], [118, 112], [136, 108],
          [206, 116], [190, 128], [44, 104], [60, 116],
          [238, 198], [222, 210], [18, 172], [34, 182],
          [164, 62], [88, 62],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx}       cy={cy - 5.5}  r="4"   fill="#ffc8da" opacity="0.95"/>
            <circle cx={cx + 5.2} cy={cy - 1.8}  r="4"   fill="#ffc8da" opacity="0.95"/>
            <circle cx={cx + 3.2} cy={cy + 4.7}  r="4"   fill="#ffc8da" opacity="0.95"/>
            <circle cx={cx - 3.2} cy={cy + 4.7}  r="4"   fill="#ffc8da" opacity="0.95"/>
            <circle cx={cx - 5.2} cy={cy - 1.8}  r="4"   fill="#ffc8da" opacity="0.95"/>
            <circle cx={cx}       cy={cy}         r="2.5" fill="#f98ab0"/>
            <circle cx={cx}       cy={cy}         r="1"   fill="#fff"/>
          </g>
        ))}

        {/* ══ Falling petals ══ */}
        {[
          [230, 390, -28], [195, 432, 18], [258, 458, -42],
          [65,  368, 22],  [34,  408, -18],[88,  448, 38],
          [162, 468, -12], [128, 496, 24], [196, 508, -32],
          [52,  496, 12],  [268, 428, 20], [22,  476, -22],
          [142, 520, 16],  [220, 540, -14],[76,  530, 28],
        ].map(([cx, cy, rot], i) => (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="4.5" ry="7.5"
            fill="#f8bfcf"
            opacity={0.25 + (i % 5) * 0.07}
            transform={`rotate(${rot} ${cx} ${cy})`}
          />
        ))}

        {/* ══ Subtle petal glow highlights ══ */}
        <circle cx="120" cy="92"  r="2" fill="#fff" opacity="0.7"/>
        <circle cx="134" cy="88"  r="1.5" fill="#fff" opacity="0.65"/>
        <circle cx="126" cy="104" r="1.8" fill="#fff" opacity="0.6"/>
        <circle cx="204" cy="118" r="1.8" fill="#fff" opacity="0.55"/>
        <circle cx="46"  cy="106" r="1.8" fill="#fff" opacity="0.55"/>
      </svg>
    </div>
  );
}

