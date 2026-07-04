const TICK_COUNT = 40;

/**
 * SealMark — the page's signature element.
 * A certificate-style seal built from a low-poly wolf mark, a ring of
 * registration ticks, and circular text carrying the society's registry
 * line. Reused (at different sizes) in the navbar, hero, and every
 * compliance badge, so trust and brand read as one continuous idea.
 */
export default function SealMark({ size = 96, tone = 'emerald', className = '' }) {
  const toneMap = {
    emerald: { ring: '#0B4433', fill: '#0B4433', accent: '#B8902E', text: '#0B4433' },
    cream: { ring: '#F7F3E9', fill: '#F7F3E9', accent: '#B8902E', text: '#F7F3E9' },
    rust: { ring: '#C1521A', fill: '#C1521A', accent: '#F7F3E9', text: '#C1521A' }
  };
  const c = toneMap[tone] ?? toneMap.emerald;

  const ticks = Array.from({ length: TICK_COUNT }, (_, i) => {
    const angle = (i / TICK_COUNT) * 2 * Math.PI;
    const inner = 44;
    const outer = i % 5 === 0 ? 39 : 41.5;
    const x1 = 50 + inner * Math.cos(angle);
    const y1 = 50 + inner * Math.sin(angle);
    const x2 = 50 + outer * Math.cos(angle);
    const y2 = 50 + outer * Math.sin(angle);
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.ring} strokeWidth={i % 5 === 0 ? 1.1 : 0.6} />;
  });

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="CLSSBE registered society seal"
    >
      <defs>
        <path id="sealTopArc" d="M 14,50 A 36,36 0 0 1 86,50" fill="none" />
        <path id="sealBottomArc" d="M 20,68 A 32,32 0 0 0 80,68" fill="none" />
      </defs>

      <circle cx="50" cy="50" r="47.5" fill="none" stroke={c.ring} strokeWidth="1" />
      <circle cx="50" cy="50" r="36" fill="none" stroke={c.ring} strokeWidth="0.75" />
      {ticks}

      <text fontSize="4.6" fill={c.text} fontFamily="'IBM Plex Mono', monospace" letterSpacing="0.5">
        <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
          CANIS LUPUS SOCIETY
        </textPath>
      </text>
      <text fontSize="3.4" fill={c.text} fontFamily="'IBM Plex Mono', monospace" letterSpacing="0.5">
        <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
          EST. · MP ACT 1973
        </textPath>
      </text>

      {/* Low-poly wolf head mark */}
      <g>
        <polygon points="32,42 39,17 46,40" fill={c.fill} />
        <polygon points="68,42 61,17 54,40" fill={c.fill} />
        <polygon points="31,41 69,41 63,60 50,74 37,60" fill={c.fill} />
        <circle cx="43" cy="49" r="1.8" fill={c.accent} />
        <circle cx="57" cy="49" r="1.8" fill={c.accent} />
        <polygon points="47,58 53,58 50,63" fill={c.accent} />
      </g>
    </svg>
  );
}
