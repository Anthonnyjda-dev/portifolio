import React, { useEffect, useRef, useState } from 'react';

const base = import.meta.env.BASE_URL;
const github = 'https://github.com/Anthonnyjda-dev';
const linkedin = 'https://www.linkedin.com/in/anthonnyalmeida';
const whatsapp = 'https://wa.me/5579998543619';
const navigation = [['sobre', 'Sobre mim'], ['projetos', 'Projetos'], ['habilidades', 'Habilidades'], ['formacao', 'Formação']];

function Icon({ name = 'arrow', size = 20, ...props }) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    right: <path d="M4 12h16m-6-6 6 6-6 6" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>,
    github: <><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c0-1 .1-1.4-.5-2 4.1-.5 6.5-2 6.5-6.2 0-1.3-.4-2.4-1.2-3.3.1-.6.5-2.1-.1-3.5 0 0-1.1-.3-3.6 1.3a12 12 0 0 0-6.2 0C7.4 3.3 6.3 3.6 6.3 3.6c-.6 1.4-.2 2.9-.1 3.5A4.8 4.8 0 0 0 5 10.4c0 4.2 2.4 5.7 6.5 6.2-.6.6-.6 1.2-.5 2V22" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
    chat: <><path d="M21 11.5a9 9 0 0 1-9 9 9.7 9.7 0 0 1-4-.9l-5 1.4 1.4-5a9.7 9.7 0 0 1-.9-4 8.8 8.8 0 0 1 9-8.5 8.5 8.5 0 0 1 8.5 8Z" /><path d="M8 10h8m-8 4h5" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    cap: <><path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

const projects = [
  {
    id: 'sergipanidade', number: '01', title: 'Sergipanidade', subtitle: 'Conectando pessoas ao melhor de Sergipe.', category: 'Web', tags: ['Desenvolvimento web', 'Projeto acadêmico'], type: 'Turismo & cultura',
    description: 'Um site de turismo dedicado ao estado de Sergipe, desenvolvido em um projeto da faculdade ao longo de seis meses. A proposta conecta turistas às belezas do estado e ajuda empresas locais a divulgar seus negócios.',
    learning: 'Uma experiência de desenvolvimento voltada a um problema real: facilitar a descoberta de destinos e dar visibilidade ao turismo local.',
    repo: 'https://github.com/Anthonnydev-ops/Sergipa-nidade', live: 'https://sergipa-nidade.vercel.app/',
  },
  {
    id: 'financas', number: '02', title: 'Gerenciador de finanças', subtitle: 'Mais clareza para entradas e saídas.', category: 'Web', tags: ['React', 'JavaScript'], type: 'Organização financeira',
    description: 'Software desenvolvido em React para gerenciar a entrada e a saída de valores, trazendo a organização financeira para uma interface web.',
    learning: 'Aplicação prática de React na construção de uma ferramenta de gerenciamento financeiro.',
    repo: 'https://github.com/Anthonnydev-ops/Painel-de-Controle-de-Finan-as',
  },
  {
    id: 'tarefas', number: '03', title: 'Gerenciador de tarefas', subtitle: 'Organização que começa no terminal.', category: 'Python', tags: ['Python', 'Terminal'], type: 'Produtividade',
    description: 'Gerenciador de tarefas executado no terminal, construído com os fundamentos básicos de Python.',
    learning: 'Um projeto para colocar em prática os fundamentos da linguagem e desenvolver o raciocínio de programação.',
    repo: 'https://github.com/Anthonnydev-ops/Gerenciador-de-Tarefas',
  },
];

function ProjectVisual({ kind }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    {kind === 'sergipanidade' && <><div className="tourism-sun" /><div className="tourism-land land-back" /><div className="tourism-land land-front" /><div className="tourism-copy"><span>DESTINO: SERGIPE</span><strong>O pequeno estado.<br />As grandes descobertas.</strong><span className="tourism-button">Explore Sergipe ↗</span></div><span className="visual-coordinate">10°54′ S &nbsp; 37°04′ W</span></>}
    {kind === 'financas' && <div className="finance-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>meu financeiro</span></div><div className="finance-content"><span className="tiny-label">VISÃO GERAL</span><div className="balance">Seu próximo passo:<br /><strong>mais controle.</strong></div><div className="finance-chart">{[28, 43, 36, 62, 48, 72, 61, 88, 75, 100].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>Entradas</span><span>Saídas</span></div></div></div>}
    {kind === 'tarefas' && <div className="terminal-window"><div className="window-top"><span className="window-dots">● ● ●</span><span>tarefas.py</span></div><div className="terminal-content"><p><span className="terminal-green">➜</span> ~ python tarefas.py</p><p className="terminal-muted"># um passo de cada vez</p><p>Olá, vamos organizar o dia?</p><p><span className="terminal-green">[✓]</span> Aprender algo novo</p><p><span className="terminal-green">[✓]</span> Tirar uma ideia do papel</p><p><span className="terminal-muted">[ ]</span> Construir o próximo projeto</p><p className="terminal-green">➜ <span className="cursor">▍</span></p></div></div>}
    <span className="visual-caption">Representação visual do projeto</span>
  </div>;
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (project) {
      dialog.current.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previous; };
    }
    dialog.current?.close();
  }, [project]);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <div className="dialog-inner"><button className="icon-button dialog-close" onClick={onClose} aria-label="Fechar detalhes"><Icon name="close" /></button><span className="eyebrow">PROJETO {project.number} / {project.type}</span><h2 id="project-title">{project.title}</h2><p>{project.description}</p><h3>Da ideia à prática</h3><p>{project.learning}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="dialog-links"><a className="button button-primary" href={project.repo} target="_blank" rel="noreferrer"><Icon name="github" /> Ver código <Icon name="arrow" size={16} /></a>{project.live && <a className="button button-outline" href={project.live} target="_blank" rel="noreferrer">Visitar site <Icon name="arrow" size={16} /></a>}</div></div>}
  </dialog>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [project, setProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKeyDown(event) { if (event.key === 'Escape') setMenuOpen(false); }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const visibleProjects = projects.filter(item => filter === 'Todos' || item.category === filter);

  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header"><div className="container header-inner">
      <a className="logo" href="#inicio" aria-label="Anthonny Almeida, início" onClick={() => setMenuOpen(false)}>anthonny<span>.</span><span className="logo-bracket">/</span></a>
      <nav id="navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Navegação principal">
        {navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <Icon name="arrow" size={16} /></a>
      </nav>
      <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    </div></header>

    <main id="conteudo">
      <section className="hero container" id="inicio">
        <div className="hero-content"><div className="status"><span /> EM CONSTANTE EVOLUÇÃO</div><p className="hero-intro">Olá, eu sou o Anthonny <span className="hello-spark">✳</span></p><h1>Ideias em mente.<br />Código <em>na prática.</em></h1><p className="hero-description">Desenvolvedor de software júnior e estudante de Sistemas de Informação. Transformando aprendizado em soluções e construindo meu caminho na tecnologia.</p><div className="hero-actions"><a href="#projetos" className="button button-primary">Conheça meus projetos <Icon name="arrow" /></a><a href={`${base}curriculo-anthonny-almeida.pdf`} download className="button button-outline">Baixar currículo <Icon name="download" size={18} /></a></div><div className="hero-socials"><span>ME ENCONTRE EM</span><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub de Anthonny"><Icon name="github" /></a><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Anthonny"><Icon name="linkedin" /></a><i /><span className="hero-location"><Icon name="code" size={16} /> Do aprendizado à criação</span></div></div>
        <div className="hero-portrait"><div className="portrait-frame"><img src={`${base}anthonny.jpeg`} alt="Anthonny Almeida, desenvolvedor de software e estudante de Sistemas de Informação" width="1200" height="1600" fetchPriority="high" /><div className="portrait-shade" /><div className="portrait-caption"><span>POR TRÁS DO CÓDIGO</span><strong>Anthonny Almeida <Icon name="arrow" size={24} /></strong></div></div><div className="portrait-symbol" aria-hidden="true">✳</div><div className="student-badge"><span className="badge-icon"><Icon name="cap" size={25} /></span><div><strong>Sistemas de Informação</strong><span>Universidade Tiradente · UNIT</span></div><span className="badge-dot" /></div><span className="portrait-note">curiosidade + dedicação + café</span></div>
      </section>

      <div className="tech-ribbon"><div className="container ribbon-inner"><span>APRENDER. CONSTRUIR. EVOLUIR.</span><div>React <i>✳</i> JavaScript <i>✳</i> Python <i>✳</i> Node.js <i>✳</i> Java</div><Icon name="code" size={24} /></div></div>

      <section className="section container about-section" id="sobre"><div className="section-label"><span>01 / SOBRE MIM</span><span className="small-cross">+</span></div><div className="about-grid"><h2>Curiosidade que vira<br /><em>vontade de construir.</em></h2><div className="about-copy"><p>Sou Anthonny Almeida, desenvolvedor júnior e estudante de Sistemas de Informação na Universidade Tiradente. Foi na graduação que meu interesse por programação ganhou direção — do desenvolvimento web aos sistemas embarcados.</p><p>Gosto de aprender colocando a mão no código. Em um projeto de seis meses na faculdade, participei da criação de um site de turismo para aproximar visitantes das belezas de Sergipe e dar espaço aos negócios locais.</p><p>Busco evoluir como profissional e pessoa, com responsabilidade, iniciativa e disposição para compartilhar o que aprendo.</p><div className="soft-skills"><span><i />Responsabilidade</span><span><i />Proatividade</span><span><i />Boa comunicação</span></div></div></div></section>

      <section className="section projects-section" id="projetos"><div className="container"><div className="section-label"><span>02 / PROJETOS SELECIONADOS</span><span>APRENDIZADO EM MOVIMENTO</span></div><div className="section-heading"><div><h2>Menos teoria.<br /><em>Mais mão na massa.</em></h2><p>Ideias que saíram do papel e viraram experiência.</p></div><div className="project-filters" aria-label="Filtrar projetos">{['Todos', 'Web', 'Python'].map(option => <button key={option} onClick={() => setFilter(option)} aria-pressed={filter === option} className={filter === option ? 'selected' : ''}>{option}{option === 'Todos' && <span>03</span>}</button>)}</div></div><div className="project-grid">{visibleProjects.map(item => <article className="project-card" key={item.id}><button className="project-cover" onClick={() => setProject(item)} aria-label={`Ver detalhes de ${item.title}`}><ProjectVisual kind={item.id} /><span className="project-open"><Icon name="arrow" /></span></button><div className="project-meta"><span>{item.type}</span><span>/{item.number}</span></div><button className="project-title" onClick={() => setProject(item)}>{item.title}<Icon name="arrow" size={19} /></button><p>{item.subtitle}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div><p className="sr-only" role="status">{visibleProjects.length} projetos exibidos.</p><div className="projects-footer"><span>Cada projeto, um novo aprendizado.</span><a href={github} target="_blank" rel="noreferrer">Explore meu GitHub <Icon name="arrow" size={17} /></a></div></div></section>

      <section className="section container" id="habilidades"><div className="section-label"><span>03 / MINHA CAIXA DE FERRAMENTAS</span><span className="small-cross">+</span></div><div className="skills-layout"><div className="skills-intro"><h2>O que uso<br />para <em>criar.</em></h2><p>Tecnologias que fazem parte da minha jornada, sempre com espaço para aprender mais.</p><div className="code-note"><span>&lt;developer&gt;</span><p>learning: <b>always</b>;<br />building: <b>step by step</b>;</p><span>&lt;/developer&gt;</span></div></div><div className="skills-groups"><SkillGroup number="01" title="Linguagens & desenvolvimento" items={['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML', 'CSS', 'SQL básico']} /><SkillGroup number="02" title="Ferramentas & design" items={['Git', 'GitHub', 'GitLab', 'Figma', 'Microsoft Office']} /><SkillGroup number="03" title="Inteligência artificial" items={['Agentes de IA', 'Claude', 'Gemini']} /><p className="skills-footnote">Tecnologia como ferramenta. Curiosidade como ponto de partida.</p></div></div></section>

      <section className="section education-section" id="formacao"><div className="container"><div className="section-label"><span>04 / FORMAÇÃO & TRAJETÓRIA</span><span>UMA JORNADA EM CONSTRUÇÃO</span></div><div className="education-layout"><div><h2>Uma base sólida.<br /><em>Um olhar à frente.</em></h2><p className="education-description">Conhecimento que cresce dentro e fora da sala de aula.</p><div className="languages"><h3>Além do código, idiomas.</h3><div><span>Português</span><span>Nativo</span></div><div><span>Inglês</span><span>Intermediário avançado</span></div><div><span>Espanhol</span><span>Básico</span></div></div></div><div className="timeline"><article className="timeline-item"><div className="timeline-dot current" /><div className="timeline-date">2025 — 2029 <span>EM ANDAMENTO</span></div><h3>Sistemas de Informação</h3><p className="institution">Universidade Tiradente · UNIT</p><p>Graduação com início em agosto de 2025 e conclusão prevista para 2029. Interesse em desenvolvimento web e sistemas embarcados.</p></article><article className="timeline-item"><div className="timeline-dot" /><div className="timeline-date">2022</div><h3>Suporte e manutenção de micros</h3><p className="institution">Geniu’s Informática</p><p>Formação em hardware, suporte e manutenção de computadores, ampliando minha compreensão da tecnologia além do software.</p></article></div></div></div></section>

      <section className="section container contact-section" id="contato"><div className="contact-top"><span className="eyebrow">05 / VAMOS CONVERSAR</span><span className="contact-spark" aria-hidden="true">✳</span></div><h2>O próximo projeto<br />pode começar com um <em>olá.</em></h2><div className="contact-bottom"><p>Tem uma oportunidade, uma ideia ou quer trocar experiências?<br />Vai ser um prazer conversar com você.</p><a className="button button-primary" href={whatsapp} target="_blank" rel="noreferrer">Vamos conversar <Icon name="chat" /></a></div><div className="contact-links"><a href={linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn<Icon name="arrow" size={16} /></a><a href={github} target="_blank" rel="noreferrer"><Icon name="github" />GitHub<Icon name="arrow" size={16} /></a><a href="tel:+5579998543619">(79) 99854-3619<Icon name="arrow" size={16} /></a></div></section>
    </main>

    <footer className="site-footer container"><a className="logo" href="#inicio">anthonny<span>.</span><span className="logo-bracket">/</span></a><p>© {new Date().getFullYear()} Anthonny Almeida</p><span>Feito com React, dedicação e café <span className="footer-spark">✳</span></span><a href="#inicio" className="back-top" aria-label="Voltar ao início">↑</a></footer>
    <ProjectDialog project={project} onClose={() => setProject(null)} />
  </>;
}

function SkillGroup({ number, title, items }) {
  return <div className="skill-group"><div className="skill-group-title"><span>{number}</span><h3>{title}</h3></div><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>;
}
