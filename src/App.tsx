/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { 
  Flame, 
  Users, 
  Calendar, 
  ChefHat, 
  CheckCircle2, 
  Instagram, 
  Phone, 
  MapPin, 
  ArrowRight,
  Star,
  UtensilsCrossed,
  Leaf,
  Briefcase,
  Quote,
  Menu,
  X
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii3wrpjTv2ZVTo1_wi_YYmyXighboIOLsah4yk0j1jSUxJQ0Uro7ySn76v_cN9ik3k9V42J6wnw5gMurxTowmAZfHeZWVuxWnjkTTYc0496L8KJdSO05r-T_LLi5cqMUvHqWTRO3kbc9_PyEz8xZrD2snhaDQSOZfbSdyFXBgduX7_n2ywxGVDw14UFvo/s16000/churrasqueira.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig9asmjYGsvA3SkNfGR0itrSCIqdXx4g6TPncuiqc6uodpl8V-JrvxF4-onE20eMeJ1PEm6YF5aN1ImCTtnoOnFtni7vROIk8uhc5WOLqPFVkhGMo9ZtBe6zEuqPVVV3JVXo4L2_bZdu9fhW-IGE9q3cYISnR4t1ZrETxLJNr34MjXvavyLa-dBdHL2Zc/s16000/churrasco.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEnNQucqxIxmPbd3npeGKK-ATmjguswmJe0rXG8amAw64bNaDg-qkGmJlNNW2G-Q3kw9p781LomqTCruEMWCFRe8Q2uy_qtgtkC0TXUEXwkOzR2kOcbiPQi66pKA4JnqbER-YanmP7VMvICUwejrdjpozf7pUsh2lATbzP1TIgQ2mouLQlfWzOem917sU/s16000/abacaxi.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-title', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });
      
      gsap.from('.hero-image-container', {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
      });

      // Scroll Reveal
      const reveals = gsap.utils.toArray('.reveal');
      reveals.forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Marquee
      gsap.to('.marquee-inner', {
        xPercent: -50,
        repeat: -1,
        duration: 13.3,
        ease: 'none'
      });

      // Bento Stagger
      gsap.from('.bento-card', {
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 75%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, sectionsRef);

    return () => ctx.revert();
  }, []);

  const whatsappLink = "https://wa.me/5519982405317";

  return (
    <div ref={sectionsRef} className="grain-overlay overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 transition-all duration-500">
        <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'header-floating' : 'max-w-7xl bg-transparent border-transparent shadow-none p-4'}`}>
          <div className="flex items-center gap-2">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFFcI488VLwfJaznlmZTvCbihQCURYLpzm5GzFkV5dcZKFxSlBjQ-3dAtzO3Wk9ml8KLpbQmbm2w9krNE8p_U0yDSEM2Uu1rT7yGrT2UD6SfzwgeZsX8j5LSJX8ux430LucFHE7LHVjcHk6o2WylSVHrRXKxxURK36Rihv3Rl1WvteXTAq2sn8Cus7jrI/s320/logo%20brothers%20fundo%20transparente.png" 
              alt="Brothers Grill Logo" 
              className="h-12 sm:h-14 w-auto transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-primary transition-colors">A Equipe</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-primary text-secondary px-6 py-2 font-black text-sm uppercase tracking-tighter hover:bg-white transition-all rounded-xl active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Orçamento Já
            </a>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden fixed left-4 right-4 z-40 bg-secondary/95 backdrop-blur-xl border-2 border-primary brutal-shadow rounded-3xl transition-all duration-500 origin-top ${scrolled ? 'top-24' : 'top-20'} ${mobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center py-10 gap-6 text-xl font-black uppercase tracking-widest">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Diferenciais</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">A Equipe</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Contato</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-primary text-secondary px-8 py-3 rounded-xl brutal-shadow-white text-sm"
            >
              Orçamento Já
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-8 overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={img} 
                alt={`Churrasco Background ${index + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {/* Gradient overlay focused on the left for text readability, fading smoothly across the center */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/65 to-transparent lg:via-40% lg:to-80%"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full px-4">
          <div className="max-w-4xl hero-title">
            <div className="inline-block bg-primary text-secondary px-4 py-1 font-black uppercase text-[10px] sm:text-xs tracking-widest mb-8 brutal-shadow-white -rotate-2 rounded-lg whitespace-nowrap">
              Churrasco Profissional
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-10 leading-[0.85] font-black">
              FOGO, <br />
              <span className="text-primary">BRASA</span> <br />
              & CARNE.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-xl font-medium leading-tight border-l-4 border-primary pl-6">
              A Brothers Grill leva a experiência rústica e o sabor gourmet para seu evento em Campinas e região.
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href={whatsappLink}
                className="bg-primary text-secondary px-8 py-4 font-black text-lg uppercase brutal-shadow-white rounded-2xl hover:bg-white transition-all"
              >
                Contratar Agora
              </a>
              <a 
                href="#servicos"
                className="border-2 border-white text-white px-8 py-4 font-black text-lg uppercase rounded-2xl hover:bg-white hover:text-secondary transition-all"
              >
                Ver Cardápios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Authority */}
      <div className="bg-primary py-6 overflow-hidden border-y-4 border-secondary">
        <div className="marquee-inner flex whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-4xl md:text-6xl font-black text-secondary uppercase italic">Churrasco Gourmet</span>
              <Flame className="text-secondary" size={40} />
              <span className="text-4xl md:text-6xl font-black text-secondary uppercase italic">Campinas & Região</span>
              <Flame className="text-secondary" size={40} />
              <span className="text-4xl md:text-6xl font-black text-secondary uppercase italic">Desde 2022</span>
              <Flame className="text-secondary" size={40} />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section - Optimized with Images */}
      <section id="servicos" className="py-20 px-4 sm:px-8 bg-brand-white text-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black leading-none mb-4">
                O QUE <br /><span className="text-primary">SERVIMOS</span>
              </h2>
              <p className="text-lg font-bold uppercase tracking-tight">
                Personalização total para seu evento. Do tradicional ao gourmet exclusivo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:h-[400px] p-8 border-4 border-secondary rounded-3xl brutal-shadow-dark bg-white transition-all hover:-translate-y-2 group flex flex-col justify-between">
              <div>
                <UtensilsCrossed size={32} className="mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4 uppercase">Eventos Sociais</h3>
                <p className="text-base font-medium mb-6 leading-tight">Casamentos e aniversários com equipe completa e louças premium.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Casamentos", "15 Anos", "Batizados"].map(t => (
                  <span key={t} className="px-3 py-1 border-2 border-current text-[10px] font-black uppercase rounded-md">{t}</span>
                ))}
              </div>
            </div>

            <div className="md:h-[400px] p-8 border-4 border-secondary rounded-3xl brutal-shadow-dark bg-primary text-secondary transition-all hover:-translate-y-2 group flex flex-col justify-between">
              <div>
                <Briefcase size={32} className="mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4 uppercase">Corporativo</h3>
                <p className="text-base font-medium mb-6 leading-tight">Confraternizações estratégicas com cardápios gourmet exclusivos.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Empresas", "Networking", "Lançamentos"].map(t => (
                  <span key={t} className="px-3 py-1 border-2 border-current text-[10px] font-black uppercase rounded-md">{t}</span>
                ))}
              </div>
            </div>

            <div className="md:h-[400px] p-8 border-4 border-secondary rounded-3xl brutal-shadow-dark bg-white transition-all hover:-translate-y-2 group flex flex-col justify-between">
              <div>
                <Leaf size={32} className="mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-black mb-4 uppercase">Inclusivo</h3>
                <p className="text-base font-medium mb-6 leading-tight">Opções vegetarianas preparadas com o mesmo rigor na brasa.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Veggie", "Gourmet", "Saudável"].map(t => (
                  <span key={t} className="px-3 py-1 border-2 border-current text-[10px] font-black uppercase rounded-md">{t}</span>
                ))}
              </div>
            </div>

            {/* Gourmet Highlights */}
            <div className="md:h-[400px] aspect-square md:aspect-auto relative rounded-3xl overflow-hidden border-4 border-secondary brutal-shadow-dark group">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzpOvM7hrlGZErKtwQMvTmFPNyoRla1vgQw1RuKzf3zRaQiq9PrdaDZ7X1MY8dlNh-tkFjXvv91AG_rzn5KnzWVgUrQte2Y4dEtMJoz9gooqyshCJceGu_zWd6p58VdAUB5DRRWLcbxwMAI7jpr7yQaRmofl8Mz3KjNsfbvyxGeekHWHLwg8aVVwMpqEc/w640-h426/abacaxi.png" 
                alt="Abacaxi na Brasa" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-secondary px-3 py-1 font-black uppercase text-[10px] rounded-lg">Gourmet</span>
                <h4 className="text-2xl font-black text-white uppercase mt-1">Abacaxi na Brasa</h4>
              </div>
            </div>

            <div className="md:h-[400px] aspect-square md:aspect-auto relative rounded-3xl overflow-hidden border-4 border-secondary brutal-shadow-dark group">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkYCR1NNFZOMzlgcTf4w2qUczTSlGl7Hy2248AAVQMVf1YN0cQBOrnWJq6SwWvISnqDSEEDeh-EztZaH_CW-z4fRaAMsE3nih22KW2M9sJjIDd5eF3l9wgCtUnua_3jRMsIPW2tCj1SISXBvYRwP-3eNXOpBVAfERTtwArlXDpyijvQp3WP3GnvPp2PNo/w640-h426/lanche.png" 
                alt="Lanche na Brasa" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-secondary px-3 py-1 font-black uppercase text-[10px] rounded-lg">Exclusivo</span>
                <h4 className="text-2xl font-black text-white uppercase mt-1">Lanche na Brasa</h4>
              </div>
            </div>

            <div className="md:h-[400px] bg-secondary p-8 rounded-3xl border-4 border-primary brutal-shadow flex flex-col justify-center items-center text-center">
              <Flame size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-black text-white uppercase mb-2">Cardápio Completo</h3>
              <p className="text-gray-400 text-sm font-bold mb-6">Solicite nosso PDF com todas as opções de cortes e acompanhamentos.</p>
              <a href={whatsappLink} className="bg-primary text-secondary px-6 py-3 rounded-xl font-black uppercase text-sm hover:bg-white transition-colors">Ver PDF</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Diferenciais */}
      <section id="diferenciais" className="py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-6xl md:text-8xl font-black mb-4">DIFERENCIAIS</h2>
            <div className="h-2 w-40 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bento-grid">
            <div className="md:col-span-8 bg-primary p-12 brutal-shadow-white bento-card relative overflow-hidden group rounded-3xl">
              <div className="relative z-10">
                <ChefHat size={60} className="text-secondary mb-6" />
                <h3 className="text-5xl font-black text-secondary mb-4">CARDÁPIO GOURMET</h3>
                <p className="text-xl text-secondary font-bold max-w-xl">
                  Abacaxi na brasa, lanches exclusivos e cortes selecionados. Não é apenas churrasco, é gastronomia.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-12 brutal-shadow bento-card text-secondary rounded-3xl">
              <Users size={50} className="text-primary mb-6" />
              <h3 className="text-3xl font-black mb-4">EQUIPE ELITE</h3>
              <p className="font-bold">Profissionais treinados para um serviço limpo, ágil e cordial.</p>
            </div>

            <div className="md:col-span-4 border-4 border-primary p-12 bento-card -rotate-2 hover:rotate-0 transition-transform rounded-3xl">
              <Calendar size={50} className="text-primary mb-6" />
              <h3 className="text-3xl font-black mb-4">100% SOB MEDIDA</h3>
              <p className="text-gray-400 font-medium">Adaptamos o cardápio e a estrutura para o tamanho do seu sonho.</p>
            </div>

            <div className="md:col-span-8 bg-secondary border-4 border-white p-12 brutal-shadow bento-card rounded-3xl flex items-center justify-center">
              <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="text-8xl font-black text-primary hidden md:block">19</div>
                <div>
                  <h3 className="text-4xl font-black mb-2">CAMPINAS & REGIÃO</h3>
                  <p className="text-xl text-gray-400">Atendemos em domicílio, chácaras ou empresas com estrutura completa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetrical */}
      <section id="sobre" className="py-24 px-4 sm:px-8 bg-brand-white text-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mobile Title Only */}
            <div className="reveal lg:hidden">
              <h2 className="text-6xl font-black leading-none">
                QUEM <br /><span className="text-primary">SOMOS</span>
              </h2>
            </div>

            <div className="relative reveal">
              <div className="border-8 border-secondary brutal-shadow -rotate-3 hover:rotate-0 transition-transform duration-500 aspect-square overflow-hidden rounded-3xl">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRjWtCfCwF86aVqnCeezRGpVWjdgIaN5JkpPPbOylzw-QvwwQE8H8jrbcmZdHIs_kNyZsmA-hfuX5MUPgeC7345enTnCeKMneqRDf34NHyd7JBPIFmb5iCgI1MVg2NmnQovJIG6dsl6kMEjWEOpEZrxkY1_jdTNRrLei3XfAPH97mvCxh5ahyphenhyphenu25fHYrE/s16000/perfil%20brothers.PNG" 
                  alt="Douglas e Gustavo" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-secondary p-8 brutal-shadow-dark rotate-6 hidden md:block rounded-2xl">
                <div className="text-4xl font-black">GUSTAVO & DOUGLAS</div>
                <div className="text-sm font-bold uppercase tracking-widest">Fundadores</div>
              </div>
            </div>

            <div className="reveal">
              <h2 className="hidden lg:block text-8xl font-black mb-10 leading-none">
                QUEM <br /><span className="text-primary">SOMOS</span>
              </h2>
              <div className="space-y-8 text-xl font-bold leading-tight">
                <p className="border-l-8 border-primary pl-8">
                  Desde 2022, a Brothers Grill redefine o conceito de churrasco em eventos. Nascemos da paixão pela brasa e do compromisso com a excelência.
                </p>
                <p>
                  Não somos apenas churrasqueiros. Somos estrategistas de eventos. Cuidamos de cada detalhe para que você seja o convidado da sua própria festa.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <div className="text-5xl font-black text-primary">500+</div>
                    <div className="text-xs font-black uppercase">Eventos</div>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-primary">100%</div>
                    <div className="text-xs font-black uppercase">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Brutalist Cards */}
      <section className="py-24 px-4 sm:px-8 relative overflow-hidden bg-secondary">
        {/* Flame Pattern Background */}
        <div className="absolute inset-0 flame-pattern -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-20 reveal">
            <h2 className="text-6xl md:text-8xl font-black">FEEDBACK</h2>
            <div className="flex-grow h-4 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Ricardo S.", role: "Corporativo", text: "Impecável. Pontualidade e limpeza. O abacaxi na brasa foi o sucesso do dia!" },
              { name: "Mariana C.", role: "Aniversário", text: "Equipe educada e prestativa. O cardápio vegetariano surpreendeu a todos." },
              { name: "Felipe A.", role: "Casamento", text: "Transformaram nosso casamento em um banquete. Profissionalismo puro." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 brutal-shadow text-secondary reveal relative rounded-3xl">
                <Quote className="absolute top-4 right-4 text-primary/20" size={60} />
                <div className="flex text-primary mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl font-bold italic mb-8 leading-tight">"{t.text}"</p>
                <div className="border-t-2 border-secondary pt-4">
                  <div className="font-black text-2xl uppercase">{t.name}</div>
                  <div className="text-primary text-xs font-black uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - High Contrast */}
      <section id="contato" className="py-12 md:py-20 px-4 sm:px-8 bg-primary text-secondary">
        <div className="max-w-5xl mx-auto text-center reveal">
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.8]">
            VAMOS <br />ACENDER <br />O <span className="text-white">FOGO?</span>
          </h2>
          <p className="text-xl md:text-2xl font-black uppercase mb-10 max-w-2xl mx-auto">
            Garanta sua data agora. Atendimento direto com os fundadores.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[75%] md:w-auto bg-secondary text-white px-6 py-3 font-black text-lg md:text-xl uppercase brutal-shadow-white rounded-2xl hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Gustavo
            </a>
            <a 
              href="https://wa.me/5519988750502"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[75%] md:w-auto bg-white text-secondary px-6 py-3 font-black text-lg md:text-xl uppercase brutal-shadow-dark rounded-2xl hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} />
              Douglas
            </a>
          </div>
          <div className="mt-12">
            <a 
              href="https://www.instagram.com/brothersgrillchurrasqueiros" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] md:text-lg font-black uppercase hover:underline max-w-full"
            >
              <Instagram size={16} className="flex-shrink-0" />
              <span>@brothersgrillchurrasqueiros</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Brutalist */}
      <footer className="py-16 px-4 sm:px-8 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start gap-6">
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFFcI488VLwfJaznlmZTvCbihQCURYLpzm5GzFkV5dcZKFxSlBjQ-3dAtzO3Wk9ml8KLpbQmbm2w9krNE8p_U0yDSEM2Uu1rT7yGrT2UD6SfzwgeZsX8j5LSJX8ux430LucFHE7LHVjcHk6o2WylSVHrRXKxxURK36Rihv3Rl1WvteXTAq2sn8Cus7jrI/s320/logo%20brothers%20fundo%20transparente.png" 
              alt="Brothers Grill" 
              className="h-20 w-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest text-center md:text-left">
              Churrasco Profissional Premium <br />
              Campinas/SP e Região <br />
              Desde 2022
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="text-sm font-black uppercase mb-4">© 2026 Brothers Grill Churrasqueiros</div>
            <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
              A Arte do Fogo levada a sério.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
