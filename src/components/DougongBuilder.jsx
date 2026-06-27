import { useState } from "react";

const steps = [
  {
    title: "放下栌斗",
    term: "栌斗",
    text: "栌斗：像斗拱的底座，先放在柱子上。"
  },
  {
    title: "架上第一层拱",
    term: "拱",
    text: "拱：横向伸出去，像一只小手托住上面。"
  },
  {
    title: "加上昂",
    term: "昂",
    text: "昂：斜斜伸出去，帮助屋檐挑得更远。"
  },
  {
    title: "再叠一层斗",
    term: "斗",
    text: "再叠一层斗：一层接一层，力量就能往上传。"
  },
  {
    title: "托住屋檐",
    term: "屋檐",
    text: "托住屋檐：斗拱把屋顶的重量传到柱子上，也让屋檐伸出去。"
  }
];

function pieceState(index, activeStep) {
  if (index > activeStep) {
    return "is-hidden";
  }

  return index === activeStep ? "is-current" : "is-complete";
}

function DougongSvg({ activeStep }) {
  return (
    <svg
      className="dougong-builder-svg"
      viewBox="0 0 760 520"
      role="img"
      aria-labelledby="dougong-builder-svg-title dougong-builder-svg-desc"
    >
      <title id="dougong-builder-svg-title">斗拱逐层搭建示意图</title>
      <desc id="dougong-builder-svg-desc">
        点击左侧步骤后，右侧示意图会按栌斗、拱、昂、斗、屋檐的顺序显示构件。
      </desc>

      <defs>
        <pattern id="dougongPaperGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M 26 0 H 0 V 26" fill="none" stroke="rgba(43, 42, 38, 0.05)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="760" height="520" fill="url(#dougongPaperGrid)" />

      <g className="dougong-guide" aria-hidden="true">
        <path d="M360 360 C348 392 346 445 356 492" />
        <path d="M420 360 C435 392 436 445 426 492" />
        <path d="M344 494 C362 506 416 507 438 494" />
        <path d="M332 365 C358 377 419 378 446 365" />
        <path d="M158 146 L596 95" />
        <path d="M184 181 L632 129" />
        <path d="M214 213 L584 170" />
        <path d="M174 389 L664 334" />
      </g>

      <g className={`dougong-piece ${pieceState(0, activeStep)}`}>
        <path className="piece-fill piece-warm" d="M312 337 L388 304 L464 337 L388 371 Z" />
        <path className="piece-fill piece-warm" d="M312 337 L312 368 L388 404 L388 371 Z" />
        <path className="piece-fill piece-warm" d="M464 337 L464 368 L388 404 L388 371 Z" />
        <path className="piece-line" d="M344 324 L420 357" />
        <path className="piece-line" d="M388 304 L388 371" />
        <path className="piece-line" d="M334 359 L388 385 L444 359" />
        <path className="piece-line" d="M352 344 C370 354 406 354 424 344" />
      </g>

      <g className={`dougong-piece ${pieceState(1, activeStep)}`}>
        <path
          className="piece-fill piece-cool"
          d="M176 316 C232 294 299 301 351 340 C314 378 236 386 174 358 C205 350 211 329 176 316 Z"
        />
        <path
          className="piece-fill piece-cool"
          d="M600 316 C544 294 477 301 425 340 C462 378 540 386 602 358 C571 350 565 329 600 316 Z"
        />
        <path className="piece-fill piece-cool" d="M226 286 L388 225 L550 286 L388 350 Z" />
        <path className="piece-fill piece-cool" d="M226 286 L226 318 L388 386 L388 350 Z" />
        <path className="piece-fill piece-cool" d="M550 286 L550 318 L388 386 L388 350 Z" />
        <path className="piece-line" d="M202 329 C247 318 305 326 345 356" />
        <path className="piece-line" d="M574 329 C529 318 471 326 431 356" />
        <path className="piece-line" d="M270 274 L432 340" />
        <path className="piece-line" d="M388 225 L388 350" />
      </g>

      <g className={`dougong-piece ${pieceState(2, activeStep)}`}>
        <path className="piece-fill piece-warm" d="M238 265 L334 224 L384 252 L288 294 Z" />
        <path className="piece-fill piece-warm" d="M288 294 L306 323 L404 282 L384 252 Z" />
        <path className="piece-fill piece-warm" d="M538 265 L442 224 L392 252 L488 294 Z" />
        <path className="piece-fill piece-warm" d="M488 294 L470 323 L372 282 L392 252 Z" />
        <path className="piece-line" d="M282 269 L340 244" />
        <path className="piece-line" d="M494 269 L436 244" />
        <path className="piece-line" d="M306 323 L388 286 L470 323" />
        <path className="piece-line" d="M356 238 L388 256 L420 238" />
      </g>

      <g className={`dougong-piece ${pieceState(3, activeStep)}`}>
        <path className="piece-fill piece-warm" d="M214 232 L270 208 L326 232 L270 258 Z" />
        <path className="piece-fill piece-warm" d="M214 232 L214 258 L270 286 L270 258 Z" />
        <path className="piece-fill piece-warm" d="M326 232 L326 258 L270 286 L270 258 Z" />

        <path className="piece-fill piece-warm" d="M332 218 L388 194 L444 218 L388 244 Z" />
        <path className="piece-fill piece-warm" d="M332 218 L332 245 L388 272 L388 244 Z" />
        <path className="piece-fill piece-warm" d="M444 218 L444 245 L388 272 L388 244 Z" />

        <path className="piece-fill piece-warm" d="M450 232 L506 208 L562 232 L506 258 Z" />
        <path className="piece-fill piece-warm" d="M450 232 L450 258 L506 286 L506 258 Z" />
        <path className="piece-fill piece-warm" d="M562 232 L562 258 L506 286 L506 258 Z" />

        <path className="piece-fill piece-warm" d="M268 176 L388 128 L508 176 L388 229 Z" />
        <path className="piece-fill piece-warm" d="M268 176 L268 200 L388 257 L388 229 Z" />
        <path className="piece-fill piece-warm" d="M508 176 L508 200 L388 257 L388 229 Z" />

        <path className="piece-line" d="M270 208 L270 258" />
        <path className="piece-line" d="M388 194 L388 244" />
        <path className="piece-line" d="M506 208 L506 258" />
        <path className="piece-line" d="M316 157 L436 210" />
        <path className="piece-line" d="M388 128 L388 229" />
      </g>

      <g className={`dougong-piece ${pieceState(4, activeStep)}`}>
        <path className="piece-fill piece-warm" d="M118 116 L584 66 L658 104 L190 158 Z" />
        <path className="piece-fill piece-warm" d="M190 158 L658 104 L640 146 L176 202 Z" />
        <path className="piece-fill piece-warm" d="M118 116 L190 158 L176 202 L106 160 Z" />
        <path className="piece-line" d="M146 132 L616 82" />
        <path className="piece-line" d="M180 151 L648 98" />
        <path className="piece-line" d="M198 181 L628 130" />
        <path className="piece-line" d="M225 177 L207 144" />
        <path className="piece-line" d="M292 169 L274 137" />
        <path className="piece-line" d="M359 162 L341 129" />
        <path className="piece-line" d="M426 154 L408 122" />
        <path className="piece-line" d="M493 147 L475 114" />
        <path className="piece-line" d="M560 139 L542 106" />
        <path className="piece-fill piece-cool" d="M280 164 L388 124 L496 164 L388 208 Z" />
        <path className="piece-line" d="M316 188 L460 188" />
      </g>
    </svg>
  );
}

export default function DougongBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  return (
    <section className="dougong-builder" aria-labelledby="dougong-builder-title">
      <style>{`
        .dougong-builder {
          --dougong-paper: var(--paper, #f8f8f6);
          --dougong-paper-warm: #fffdf6;
          --dougong-ink: #2d2c28;
          --dougong-muted: #6d675d;
          --dougong-line: #343330;
          --dougong-hairline: var(--hairline, #d6d0c2);
          --dougong-ocher: #a15f35;
          --dougong-ocher-soft: rgba(161, 95, 53, 0.18);
          display: grid;
          gap: clamp(18px, 3vw, 30px);
          padding: clamp(24px, 4vw, 42px);
          border: 1px solid var(--dougong-hairline);
          background:
            linear-gradient(90deg, rgba(45, 44, 40, 0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(45, 44, 40, 0.025) 1px, transparent 1px),
            var(--dougong-paper);
          background-size: 34px 34px;
        }

        .dougong-builder-header {
          display: grid;
          gap: 8px;
          max-width: 820px;
        }

        .dougong-builder-header h2 {
          margin: 0;
          color: var(--dougong-ink);
          font-family: var(--font-title, "STKaiti", "KaiTi", serif);
          font-size: clamp(34px, 4.8vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: 0;
        }

        .dougong-builder-header p {
          margin: 0;
          color: var(--dougong-muted);
          font-size: clamp(15px, 1.7vw, 18px);
          line-height: 1.75;
        }

        .dougong-builder-workbench {
          display: grid;
          grid-template-columns: minmax(210px, 270px) minmax(0, 1fr);
          gap: clamp(18px, 3vw, 32px);
          align-items: stretch;
        }

        .dougong-builder-steps {
          display: grid;
          gap: 10px;
          align-content: start;
        }

        .dougong-builder-step {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 10px;
          align-items: center;
          min-height: 56px;
          padding: 10px 12px;
          border: 1px solid var(--dougong-hairline);
          border-radius: 0;
          background: rgba(255, 255, 255, 0.46);
          color: var(--dougong-muted);
          text-align: left;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease,
            transform 180ms ease;
        }

        .dougong-builder-step:hover {
          border-color: color-mix(in srgb, var(--dougong-ocher) 48%, var(--dougong-hairline));
          color: var(--dougong-ink);
          transform: translateX(2px);
        }

        .dougong-builder-step.is-active {
          border-color: var(--dougong-ocher);
          background: color-mix(in srgb, var(--dougong-ocher) 10%, #fffdf6);
          color: var(--dougong-ink);
        }

        .dougong-builder-step-number {
          display: inline-grid;
          place-items: center;
          width: 30px;
          height: 30px;
          border: 1px solid currentColor;
          color: inherit;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
        }

        .dougong-builder-step-text {
          min-width: 0;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.35;
        }

        .dougong-builder-stage {
          display: grid;
          gap: 14px;
          min-width: 0;
        }

        .dougong-builder-drawing {
          position: relative;
          min-height: 360px;
          overflow: hidden;
          border: 1px solid rgba(45, 44, 40, 0.18);
          background: var(--dougong-paper-warm);
        }

        .dougong-builder-svg {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 360px;
        }

        .dougong-guide path {
          fill: none;
          stroke: rgba(45, 44, 40, 0.34);
          stroke-width: 1.35;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 6 5;
          vector-effect: non-scaling-stroke;
        }

        .dougong-piece {
          transition:
            opacity 220ms ease,
            transform 220ms ease;
          transform-origin: 376px 320px;
        }

        .dougong-piece.is-hidden {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
        }

        .piece-fill,
        .piece-line {
          stroke-linecap: round;
          stroke-linejoin: round;
          vector-effect: non-scaling-stroke;
        }

        .piece-fill {
          stroke-width: 2.1;
        }

        .piece-line {
          fill: none;
          stroke-width: 1.5;
        }

        .dougong-piece.is-complete .piece-fill {
          fill: rgba(255, 253, 246, 0.16);
          stroke: var(--dougong-line);
        }

        .dougong-piece.is-complete .piece-line {
          stroke: var(--dougong-line);
        }

        .dougong-piece.is-current .piece-fill {
          fill: var(--dougong-ocher-soft);
          stroke: var(--dougong-ocher);
        }

        .dougong-piece.is-current .piece-line {
          stroke: var(--dougong-ocher);
        }

        .dougong-builder-explain {
          display: grid;
          gap: 4px;
          min-height: 86px;
          padding: 16px 18px;
          border-left: 4px solid var(--dougong-ocher);
          background: rgba(255, 255, 255, 0.52);
        }

        .dougong-builder-explain strong {
          color: var(--dougong-ocher);
          font-family: var(--font-title, "STKaiti", "KaiTi", serif);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.15;
        }

        .dougong-builder-explain p {
          margin: 0;
          color: var(--dougong-ink);
          font-size: 16px;
          line-height: 1.65;
        }

        @media (max-width: 760px) {
          .dougong-builder {
            padding: 22px 16px;
          }

          .dougong-builder-workbench {
            grid-template-columns: 1fr;
          }

          .dougong-builder-steps {
            grid-template-columns: 1fr;
          }

          .dougong-builder-step {
            min-height: 52px;
          }

          .dougong-builder-drawing {
            min-height: 300px;
          }

          .dougong-builder-svg {
            min-height: 300px;
          }
        }
      `}</style>

      <div className="dougong-builder-header">
        <h2 id="dougong-builder-title">搭一个斗拱</h2>
        <p>斗拱不是一整块木头，而是很多小木构件一层层叠起来。</p>
      </div>

      <div className="dougong-builder-workbench">
        <div className="dougong-builder-steps" aria-label="搭建斗拱步骤">
          {steps.map((step, index) => (
            <button
              className={`dougong-builder-step ${index === activeStep ? "is-active" : ""}`}
              key={step.title}
              type="button"
              aria-pressed={index === activeStep}
              onClick={() => setActiveStep(index)}
            >
              <span className="dougong-builder-step-number">{index + 1}</span>
              <span className="dougong-builder-step-text">{step.title}</span>
            </button>
          ))}
        </div>

        <div className="dougong-builder-stage">
          <div className="dougong-builder-drawing">
            <DougongSvg activeStep={activeStep} />
          </div>

          <div className="dougong-builder-explain" aria-live="polite">
            <strong>{active.term}</strong>
            <p>{active.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
