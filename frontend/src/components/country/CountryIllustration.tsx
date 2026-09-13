import React from "react";

interface CountryIllustrationProps {
  countrySlug: string;
  countryName: string;
  className?: string;
}

export const CountryIllustration: React.FC<CountryIllustrationProps> = ({
  countrySlug,
  countryName,
  className = "w-full h-full max-h-[380px]",
}) => {
  switch (countrySlug) {
    case "dubai":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of Dubai skyline and landmarks`}
        >
          <defs>
            <linearGradient id="dubaiSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#E93F61" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="dubaiGold" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="dubaiAccent" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#E93F61" />
              <stop offset="1" stopColor="#9B1B30" />
            </linearGradient>
          </defs>
          {/* Background aura */}
          <circle cx="250" cy="200" r="160" fill="url(#dubaiSky)" />
          <circle cx="340" cy="110" r="45" fill="#FEF08A" fillOpacity="0.15" />
          
          {/* Dubai Frame Outline */}
          <rect x="60" y="160" width="70" height="150" rx="6" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="4" />
          <rect x="72" y="174" width="46" height="122" rx="3" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />

          {/* Background buildings */}
          <rect x="150" y="180" width="40" height="150" fill="#ffffff" fillOpacity="0.12" rx="3" />
          <rect x="160" y="140" width="20" height="40" fill="#ffffff" fillOpacity="0.15" />
          <rect x="290" y="190" width="45" height="140" fill="#ffffff" fillOpacity="0.1" rx="3" />
          <rect x="360" y="210" width="55" height="120" fill="#ffffff" fillOpacity="0.12" rx="3" />

          {/* Burj Al Arab Sail Shape */}
          <path
            d="M 370 330 C 370 240, 425 210, 445 200 C 420 250, 415 300, 415 330 Z"
            fill="url(#dubaiAccent)"
            fillOpacity="0.8"
          />
          <line x1="415" y1="180" x2="415" y2="330" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.6" />
          <line x1="390" y1="240" x2="430" y2="240" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.5" />

          {/* Burj Khalifa silhouette in center */}
          <line x1="250" y1="20" x2="250" y2="330" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.9" />
          {/* Spire top */}
          <polygon points="250,20 247,70 253,70" fill="#ffffff" />
          {/* Tier 1 */}
          <polygon points="246,70 244,120 256,120 254,70" fill="#ffffff" fillOpacity="0.9" />
          {/* Tier 2 */}
          <polygon points="243,120 240,180 260,180 257,120" fill="#ffffff" fillOpacity="0.85" />
          {/* Tier 3 stepped */}
          <polygon points="238,180 234,240 266,240 262,180" fill="#ffffff" fillOpacity="0.8" />
          {/* Tier 4 base */}
          <polygon points="232,240 224,330 276,330 268,240" fill="#ffffff" fillOpacity="0.75" />
          {/* Balconies / lights */}
          <circle cx="250" cy="65" r="3" fill="#E93F61" />
          <circle cx="250" cy="115" r="3" fill="#E93F61" />
          <circle cx="250" cy="175" r="3" fill="#F59E0B" />
          <circle cx="250" cy="235" r="3.5" fill="#E93F61" />

          {/* Ground / Waterline */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M 40 345 Q 120 338 200 345 T 360 345 T 460 345" stroke="#38BDF8" strokeWidth="2.5" strokeOpacity="0.6" fill="none" />
          <path d="M 60 355 Q 150 350 240 355 T 440 355" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

          {/* Floating badge */}
          <g transform="translate(300, 70)">
            <rect width="140" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#E93F61" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">★</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">Tax-Free Hub</text>
          </g>
        </svg>
      );

    case "usa":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of USA landmarks`}
        >
          <defs>
            <linearGradient id="usaSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="usaTorch" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#E93F61" />
            </linearGradient>
          </defs>
          <circle cx="250" cy="200" r="160" fill="url(#usaSky)" />

          {/* Capitol Dome Silhouette (Left) */}
          <path d="M 60 330 L 60 270 L 140 270 L 140 330 Z" fill="#ffffff" fillOpacity="0.15" />
          <path d="M 75 270 C 75 220 125 220 125 270 Z" fill="#ffffff" fillOpacity="0.25" />
          <rect x="96" y="195" width="8" height="25" fill="#ffffff" fillOpacity="0.6" />
          <circle cx="100" cy="190" r="5" fill="#ffffff" fillOpacity="0.8" />
          {/* Columns */}
          <line x1="75" y1="270" x2="75" y2="330" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <line x1="90" y1="270" x2="90" y2="330" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <line x1="110" y1="270" x2="110" y2="330" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <line x1="125" y1="270" x2="125" y2="330" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />

          {/* Empire State Building Silhouette (Center) */}
          <rect x="235" y="140" width="30" height="190" fill="#ffffff" fillOpacity="0.2" rx="2" />
          <rect x="242" y="90" width="16" height="50" fill="#ffffff" fillOpacity="0.3" rx="1" />
          <line x1="250" y1="40" x2="250" y2="90" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" />
          <circle cx="250" cy="38" r="4" fill="#E93F61" />
          {/* Window grids */}
          <line x1="240" y1="160" x2="260" y2="160" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="240" y1="180" x2="260" y2="180" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="240" y1="200" x2="260" y2="200" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />
          <line x1="240" y1="220" x2="260" y2="220" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1.5" />

          {/* Golden Gate Bridge towers (Right) */}
          <path d="M 360 120 L 372 120 L 376 330 L 356 330 Z" fill="#E93F61" fillOpacity="0.6" />
          <path d="M 410 120 L 422 120 L 426 330 L 406 330 Z" fill="#E93F61" fillOpacity="0.6" />
          {/* Suspension cable */}
          <path d="M 330 200 Q 388 280 450 210" stroke="#E93F61" strokeWidth="3" fill="none" />
          <line x1="360" y1="170" x2="422" y2="170" stroke="#E93F61" strokeWidth="2" strokeOpacity="0.7" />
          <line x1="360" y1="220" x2="422" y2="220" stroke="#E93F61" strokeWidth="2" strokeOpacity="0.7" />

          {/* Ground / Water */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M 40 345 Q 130 338 220 345 T 400 345" stroke="#60A5FA" strokeWidth="2" strokeOpacity="0.5" fill="none" />

          {/* Floating badge */}
          <g transform="translate(290, 60)">
            <rect width="160" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#3B82F6" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">OPT</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">3-Year STEM Work</text>
          </g>
        </svg>
      );

    case "uk":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of UK landmarks`}
        >
          <defs>
            <linearGradient id="ukSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#E93F61" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <circle cx="250" cy="200" r="160" fill="url(#ukSky)" />

          {/* Big Ben Clock Tower */}
          <rect x="140" y="110" width="48" height="220" fill="#ffffff" fillOpacity="0.2" rx="2" />
          {/* Spire */}
          <polygon points="164,30 138,110 190,110" fill="#ffffff" fillOpacity="0.75" />
          {/* Clock face */}
          <circle cx="164" cy="140" r="16" fill="#ffffff" stroke="#253A7B" strokeWidth="3" />
          <line x1="164" y1="140" x2="164" y2="130" stroke="#253A7B" strokeWidth="2" strokeLinecap="round" />
          <line x1="164" y1="140" x2="171" y2="140" stroke="#253A7B" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="170" x2="188" y2="170" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />

          {/* London Eye Wheel */}
          <circle cx="340" cy="190" r="75" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" fill="none" />
          <circle cx="340" cy="190" r="6" fill="#E93F61" />
          {/* Wheel Spokes */}
          <line x1="340" y1="115" x2="340" y2="265" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
          <line x1="265" y1="190" x2="415" y2="190" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
          <line x1="287" y1="137" x2="393" y2="243" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
          <line x1="287" y1="243" x2="393" y2="137" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
          {/* Wheel Support legs */}
          <line x1="340" y1="190" x2="310" y2="330" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
          <line x1="340" y1="190" x2="370" y2="330" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />

          {/* Double Decker Bus Silhouette */}
          <rect x="210" y="275" width="70" height="45" rx="5" fill="#E93F61" fillOpacity="0.85" />
          <rect x="215" y="280" width="16" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <rect x="235" y="280" width="16" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <rect x="255" y="280" width="18" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <rect x="215" y="296" width="16" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <rect x="235" y="296" width="16" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <rect x="255" y="296" width="18" height="12" rx="2" fill="#ffffff" fillOpacity="0.6" />
          <circle cx="225" cy="324" r="7" fill="#1F2937" />
          <circle cx="265" cy="324" r="7" fill="#1F2937" />

          {/* Ground */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />

          {/* Floating badge */}
          <g transform="translate(280, 50)">
            <rect width="170" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#E93F61" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">PSW</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">2-Year Graduate Visa</text>
          </g>
        </svg>
      );

    case "canada":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of Canadian landmarks`}
        >
          <defs>
            <linearGradient id="canadaSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#EF4444" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <circle cx="250" cy="200" r="160" fill="url(#canadaSky)" />

          {/* Mountain Silhouettes */}
          <polygon points="40,330 140,160 240,330" fill="#ffffff" fillOpacity="0.1" />
          <polygon points="120,195 140,160 160,195" fill="#ffffff" fillOpacity="0.3" />
          <polygon points="160,330 260,180 360,330" fill="#ffffff" fillOpacity="0.15" />
          <polygon points="245,205 260,180 275,205" fill="#ffffff" fillOpacity="0.35" />

          {/* CN Tower */}
          <line x1="380" y1="40" x2="380" y2="330" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.85" />
          {/* Observation Pod */}
          <ellipse cx="380" cy="140" rx="26" ry="12" fill="#E93F61" fillOpacity="0.85" stroke="#ffffff" strokeWidth="1.5" />
          <ellipse cx="380" cy="130" rx="14" ry="7" fill="#ffffff" fillOpacity="0.75" />
          <polygon points="370,330 378,152 382,152 390,330" fill="#ffffff" fillOpacity="0.3" />
          <circle cx="380" cy="38" r="3.5" fill="#E93F61" />

          {/* Maple Leaf outline in backdrop */}
          <path
            d="M 170 120 L 175 105 L 185 112 L 195 95 L 205 112 L 215 105 L 220 120 L 235 125 L 225 138 L 230 150 L 215 152 L 218 175 L 208 175 L 204 158 L 195 160 L 186 158 L 182 175 L 172 175 L 175 152 L 160 150 L 165 138 L 155 125 Z"
            fill="#EF4444"
            fillOpacity="0.25"
            stroke="#EF4444"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />

          {/* Pine trees along base */}
          <polygon points="70,330 85,280 100,330" fill="#10B981" fillOpacity="0.3" />
          <polygon points="100,330 115,270 130,330" fill="#10B981" fillOpacity="0.4" />
          <polygon points="290,330 305,275 320,330" fill="#10B981" fillOpacity="0.35" />

          {/* Ground */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />

          {/* Floating badge */}
          <g transform="translate(40, 70)">
            <rect width="165" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#EF4444" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">🍁</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">3-Year PGWP Work</text>
          </g>
        </svg>
      );

    case "australia":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of Australian landmarks`}
        >
          <defs>
            <linearGradient id="ausSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#0284C7" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="250" cy="200" r="160" fill="url(#ausSky)" />

          {/* Sydney Harbour Bridge Arch */}
          <path
            d="M 60 330 C 120 180 300 180 360 330"
            stroke="#ffffff"
            strokeOpacity="0.5"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M 75 330 C 130 215 290 215 345 330"
            stroke="#ffffff"
            strokeOpacity="0.3"
            strokeWidth="4"
            fill="none"
          />
          {/* Bridge roadway */}
          <line x1="40" y1="300" x2="380" y2="300" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="4" />
          {/* Bridge pylons */}
          <rect x="55" y="260" width="22" height="70" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="340" y="260" width="22" height="70" fill="#ffffff" fillOpacity="0.3" rx="2" />

          {/* Sydney Opera House Sails */}
          <path
            d="M 280 330 C 290 270 330 240 370 240 C 370 280 350 330 340 330 Z"
            fill="#ffffff"
            fillOpacity="0.8"
          />
          <path
            d="M 330 330 C 340 260 380 230 420 230 C 420 270 400 330 390 330 Z"
            fill="#ffffff"
            fillOpacity="0.7"
          />
          <path
            d="M 380 330 C 390 280 420 255 450 255 C 450 290 440 330 430 330 Z"
            fill="#ffffff"
            fillOpacity="0.6"
          />

          {/* Water waves */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />
          <path d="M 40 345 Q 120 336 200 345 T 360 345 T 460 345" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6" fill="none" />
          <path d="M 60 358 Q 150 350 240 358 T 440 358" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

          {/* Floating badge */}
          <g transform="translate(290, 60)">
            <rect width="170" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#0284C7" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">☀️</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">Post-Study Work 485</text>
          </g>
        </svg>
      );

    case "germany":
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of German landmarks`}
        >
          <defs>
            <linearGradient id="gerSky" x1="250" y1="0" x2="250" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="1" stopColor="#EAB308" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <circle cx="250" cy="200" r="160" fill="url(#gerSky)" />

          {/* Brandenburg Gate */}
          {/* Top Entablature */}
          <rect x="120" y="160" width="260" height="24" fill="#ffffff" fillOpacity="0.4" rx="2" />
          <rect x="140" y="145" width="220" height="15" fill="#ffffff" fillOpacity="0.3" rx="1" />
          {/* Quadriga on top */}
          <path d="M 230 145 C 230 110 270 110 270 145 Z" fill="#EAB308" fillOpacity="0.7" />
          <circle cx="250" cy="110" r="8" fill="#EAB308" />

          {/* 6 Classical Columns */}
          <rect x="140" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="180" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="220" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="262" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="302" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />
          <rect x="342" y="184" width="18" height="146" fill="#ffffff" fillOpacity="0.3" rx="2" />

          {/* Berlin TV Tower (Fernsehturm) in distance */}
          <line x1="80" y1="50" x2="80" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.7" />
          <circle cx="80" cy="140" r="16" fill="#ffffff" fillOpacity="0.4" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="80" cy="48" r="3" fill="#E93F61" />

          {/* Ground */}
          <line x1="30" y1="330" x2="470" y2="330" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" />

          {/* Floating badge */}
          <g transform="translate(270, 60)">
            <rect width="180" height="42" rx="21" fill="#1E293B" fillOpacity="0.85" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="22" cy="21" r="10" fill="#10B981" />
            <text x="22" y="25" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">€0</text>
            <text x="40" y="25" fill="#ffffff" fontSize="11" fontWeight="600">Zero Tuition in Public Unis</text>
          </g>
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          aria-label={`Illustration of ${countryName}`}
        >
          <circle cx="250" cy="200" r="160" fill="#ffffff" fillOpacity="0.08" />
          <circle cx="250" cy="200" r="100" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />
          <text x="250" y="210" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" opacity="0.6">
            {countryName}
          </text>
        </svg>
      );
  }
};

export default CountryIllustration;
