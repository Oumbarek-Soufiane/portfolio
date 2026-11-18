import { useEffect, useState } from 'react';
import { Icon, hasIcon } from './icons.jsx';
import { projects } from './data/projects.js';

function Fig({ src, title, cap, onZoom }) {
  return (
    <figure className="fig">
      <img src={src} alt={title} loading="lazy" onClick={() => onZoom(src)} />
      <figcaption><b>{title}</b>{cap ? <> — {cap}</> : null}</figcaption>
    </figure>
  );
}

function Block({ b, onZoom }) {
  switch (b.t) {
    case 'p': return <p dangerouslySetInnerHTML={{ __html: b.html }} />;
    case 'h3': return <h3>{b.text}</h3>;
    case 'quote': return <div className="quote">{b.text}</div>;
    case 'cards':
      return (
        <div className={'grid' + (b.cols || 3)}>
          {b.items.map((c, i) => (
            <div className="card" key={i}>
              {c.ic && <div className="ic">{hasIcon(c.ic) ? <Icon name={c.ic} /> : c.ic}</div>}
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              {c.ref && <span className="ref">{c.ref}</span>}
            </div>
          ))}
        </div>
      );
    case 'flow':
      return (
        <div className="flow" style={{ gridTemplateColumns: `repeat(${b.cols || b.items.length}, 1fr)` }}>
          {b.items.map((f, i) => <div key={i}><b>{f.title}</b><span>{f.text}</span></div>)}
        </div>
      );
    case 'swatches':
      return (
        <div className="swatches">
          {b.items.map((s, i) => (
            <div className="sw" key={i}>
              <div className="c" style={{ background: s.hex, color: s.fg }}>{s.label || s.hex}</div>
              <div className="t"><b>{s.title}</b><span>{s.text}</span></div>
            </div>
          ))}
        </div>
      );
    case 'type':
      return (
        <div className="type">
          <div className="aa">Aa</div>
          <div className="scale">
            <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--title)' }}>{b.big}</span>
            <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--title)' }}>{b.mid}</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{b.note}</span>
          </div>
        </div>
      );
    case 'fig': return <Fig {...b} onZoom={onZoom} />;
    case 'gal':
      return (
        <div className={'gal' + (b.cols === 3 ? ' three' : '')}>
          {b.items.map((g, i) => <Fig key={i} {...g} onZoom={onZoom} />)}
        </div>
      );
    case 'stage': return <div className="stage"><em>{b.n}</em>{b.text}</div>;
    case 'table':
      return (
        <div className="table-wrap">
          <table>
            <thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case 'ch': {
      const [la, lb] = b.labels || ['Challenge', 'Solution'];
      return b.items.map((c, i) => (
        <div className="ch" key={i}>
          <div><small>{la}</small><b>{c.a}</b><p>{c.ad}</p></div>
          <div><small>{lb}</small><b>{c.b}</b><p>{c.bd}</p></div>
        </div>
      ));
    }
    case 'kanban': return <div className="kanban">{b.items.map((k) => <span key={k}>{k}</span>)}</div>;
    case 'branches':
      return (
        <div className="branches">
          {b.items.map((r) => (
            <div className="br" key={r.name}>
              <b style={{ background: r.color, color: r.dark ? '#1a1a1a' : '#fff' }}>{r.name}</b>
              <span className="ln" style={{ background: r.color }} />{r.text}
            </div>
          ))}
        </div>
      );
    case 'out': return <div className="out">{b.items.map((o, i) => <div key={i}><b>{o.b}</b><span>{o.s}</span></div>)}</div>;
    case 'chips': return <div className="chips">{b.items.map((c) => <span key={c}>{c}</span>)}</div>;
    default: return null;
  }
}

export default function CaseStudy({ p, go, onZoom }) {
  const [active, setActive] = useState(p.chapters[0].id);
  const idx = projects.findIndex((x) => x.id === p.id);
  const next = projects[(idx + 1) % projects.length];

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.dataset.ch)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    document.querySelectorAll('[data-ch]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [p.id]);

  const jump = (id) => document.querySelector(`[data-ch="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="page cs">
      <div className="cs-hero">
        <div className="wrap">
          <button className="back" onClick={() => go('works')}><Icon name="back" />Back to works</button>
          <span className="kicker">{p.kicker}</span>
          <h1>{p.h1.map((part, i) => (i % 2 ? <span className="ac" key={i}>{part}</span> : part))}</h1>
          <p className="lead">{p.lead}</p>
          <div className="meta">{p.meta.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
          <div className="cover">
            {p.cover.video
              ? <video src={p.cover.video} poster={p.cover.poster} muted loop playsInline autoPlay controls preload="metadata" />
              : <img src={p.cover.img} alt={p.title} onClick={() => onZoom(p.cover.img)} />}
          </div>
        </div>
      </div>
      <div className="wrap cs-body">
        <aside className="toc">
          {p.chapters.map((c, i) => (
            <button key={c.id} className={active === c.id ? 'on' : ''} onClick={() => jump(c.id)}>
              {String(i + 1).padStart(2, '0')} · {c.label}
            </button>
          ))}
        </aside>
        <div>
          {p.chapters.map((c, i) => (
            <div className="chap" key={c.id} data-ch={c.id}>
              <span className="num">{String(i + 1).padStart(2, '0')} — {c.label.toUpperCase()}</span>
              <h2>{c.title}</h2>
              {c.blocks.map((b, j) => <Block key={j} b={b} onZoom={onZoom} />)}
            </div>
          ))}
          <div className="next">
            <div><small>Next case study</small><h3>{next.title} — {next.card}</h3></div>
            <button className="btn or" onClick={() => go(next.id)}>Read next <Icon name="arrow" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
