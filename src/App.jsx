import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Wifi, Tv, Coffee, Wind, CheckCircle, Instagram, Facebook, Mail, MessageCircle, ArrowRight, Star, ChevronLeft, ChevronRight, ShieldCheck, Clock, Users, Navigation } from 'lucide-react';

import apto01 from './assets/apto01.avif';
import apto02 from './assets/apto02.avif';
import apto03 from './assets/apto03.avif';
import apto04 from './assets/apto04.avif';
import apto05 from './assets/apto05.avif';
import apto06 from './assets/apto06.avif';
import apto07 from './assets/apto07.jpg';
import apto08 from './assets/apto08.jpg';
import apto09 from './assets/apto09.jpg';

import termas09 from './assets/termas09.png';
import termas01 from './assets/termas01.avif';
import termas02 from './assets/termas02.avif';
import termas03 from './assets/termas03.avif';
import termas04 from './assets/termas04.avif';
import termas05 from './assets/termas05.avif';
import termas06 from './assets/termas06.avif';
import termas07 from './assets/termas07.avif';
import termas08 from './assets/termas08.avif';
import termas10 from './assets/termas10.png';
import logo from './assets/logovistabella.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [currentAptIndex, setCurrentAptIndex] = useState(0);
  const [currentTermasIndex, setCurrentTermasIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const brandBlue = '#129ce2';
  const brandYellow = '#febe05';

  const aptImages = [
    { src: apto01, title: "O Prédio", desc: "Estrutura do Vista Bella Apartamentos Mobiliados." },
    { src: apto02, title: "O Prédio", desc: "Estrutura do Vista Bella Apartamentos Mobiliados." },
    { src: apto03, title: "Sacada", desc: "Vista completa para o lago." },
    { src: apto04, title: "Quarto", desc: "Equipado com cama de casal e cama de solteiro." },
    { src: apto05, title: "Sala de Estar", desc: "Espaço conjugado para lazer." },
    { src: apto06, title: "Sala de Estar", desc: "Espaço conjugado para lazar." },
    { src: apto07, title: "Cozinha", desc: "Cozinha completa no apartamento." },
    { src: apto08, title: "Churrasqueira", desc: "Visão panorâmica da churrasqueira." },
    { src: apto09, title: "Refeições", desc: "Mesa de almoço/jantar com Smart TV" }
  ];

  const termasImages = [
    { src: termas09, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
    { src: termas01, title: "Rampa Molhada", desc: "Piscina e rampa molhada para quem gosta de ousadia." },
    { src: termas02, title: "Piscina Panorâmica", desc: "Perfeita para aproveitar ao máximo as termas." },
    { src: termas03, title: "Piscina Bar", desc: "Sua experiência praiana nas termas." },
    { src: termas04, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
    { src: termas05, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
    { src: termas06, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
    { src: termas07, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
    { src: termas08, title: "Piscina de Ondas", desc: "Sua experiência praiana nas termas." },
  ];

  const nextSlide = (current, setFunc, length) => setFunc(current === length - 1 ? 0 : current + 1);
  const prevSlide = (current, setFunc, length) => setFunc(current === 0 ? length - 1 : current - 1);

  return (
    <div className="font-sans text-gray-700 bg-white min-h-screen">

      <a
        href="https://wa.me/5554996854779"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 group"
        aria-label="WhatsApp"
      >
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
          <p className="text-sm font-bold text-gray-800">Podemos ajudar?</p>
          <p className="text-xs text-green-600">Responde em instantes</p>
        </div>
        <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center relative">
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          <MessageCircle size={28} color="white" fill="white" />
        </div>
      </a>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-white shadow-sm border-gray-100 py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-gray-100 shadow-sm'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-10 w-auto bg-gray-100 rounded p-1 border border-gray-200">
              <img src={logo} alt="Logo Vista Bella" className="h-full object-contain" />
            </div>
            <div>
              <span className="block font-extrabold text-xl leading-none text-gray-800 tracking-tight">Vista Bella</span>
              <span className="text-[10px] font-bold text-[#129ce2] uppercase tracking-widest">Apartamentos Mobiliados</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Acomodações', 'Destino', 'Localização'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ')[0]}`}
                className="text-sm font-bold text-gray-600 hover:text-[#129ce2] transition-colors uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
            <a
              href="https://wa.me/5554996854779"
              className="bg-[#129ce2] hover:bg-[#0e8ccf] text-white px-6 py-2.5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Reservar Agora
            </a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-gray-700 p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {['Acomodações', 'Destino', 'Localização'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ')[0]}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50"
              >
                {item}
              </a>
            ))}
            <a href="https://wa.me/5554996854779" className="bg-[#25D366] text-white py-3 rounded-lg font-bold text-center mt-2 flex justify-center gap-2">
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={termas10}
            alt="Piscina de Ondas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-[#febe05] text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <Star size={12} fill="currentColor" /> Alta Procura
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Sinta-se em casa, <br />
              <span className="text-[#129ce2]">longe de casa.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Apartamentos completos ao lado das Termas de Marcelino Ramos.
              O equilíbrio perfeito entre a liberdade de um lar e o relaxamento que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5554996854779"
                className="bg-[#febe05] hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
              >
                Verificar Disponibilidade <ArrowRight size={20} />
              </a>
              <a
                href="#acomodacoes"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
              >
                Conhecer Apartamentos
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle size={16} className="text-green-500" /> Atendimento humano
              <span className="mx-2">•</span>
              <CheckCircle size={16} className="text-green-500" /> Reserva direta e segura
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-extrabold text-[#129ce2]">5.0</p>
              <p className="text-xs text-gray-500 uppercase font-bold mt-1">Estrelas no Google</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#129ce2]">18</p>
              <p className="text-xs text-gray-500 uppercase font-bold mt-1">Anos Hospedando</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#129ce2]">100%</p>
              <p className="text-xs text-gray-500 uppercase font-bold mt-1">Mobiliado</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[#129ce2]">365</p>
              <p className="text-xs text-gray-500 uppercase font-bold mt-1">Dias no Ano Atendendo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que escolher o Vista Bella?</h2>
            <p className="text-gray-600">O lugar mais aconchegante e ideal para você que procura sossego, conforto e comodidade.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#129ce2] mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Localização Estratégica</h3>
              <p className="text-gray-500 leading-relaxed">
                Esqueça o carro. Estamos a poucos metros da entrada das Termas e próximos a restaurantes e mercados.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#febe05] text-xs font-bold px-2 py-1 rounded-bl-lg">Destaque</div>
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-[#febe05] mb-6">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cozinha Completa</h3>
              <p className="text-gray-500 leading-relaxed">
                Economize e tenha liberdade. Nossos apartamentos possuem cozinha equipada com geladeira, fogão e utensílios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#129ce2] mb-6">
                <Wifi size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conforto & Conexão</h3>
              <p className="text-gray-500 leading-relaxed">
                Wi-Fi de alta velocidade gratuito, ar condicionado split e TV Smart para seus momentos de descanso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="acomodacoes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#129ce2] font-bold uppercase tracking-widest text-sm">Nossos Apartamentos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Conforto para toda família</h2>
            </div>
            <a href="https://wa.me/5554996854779" className="text-[#129ce2] font-bold hover:underline flex items-center gap-2">
              Consultar Disponibilidade <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100 group">
              <img
                src={aptImages[currentAptIndex].src}
                alt={aptImages[currentAptIndex].title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <h3 className="text-2xl font-bold mb-2">{aptImages[currentAptIndex].title}</h3>
                <p className="text-gray-200">{aptImages[currentAptIndex].desc}</p>
              </div>

              <div className="absolute bottom-8 right-8 flex gap-3">
                <button onClick={() => prevSlide(currentAptIndex, setCurrentAptIndex, aptImages.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors border border-white/30">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => nextSlide(currentAptIndex, setCurrentAptIndex, aptImages.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors border border-white/30">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#129ce2] mb-2 flex items-center gap-2">
                  <Users size={18} /> Ideal para até 4 pessoas
                </h4>
                <p className="text-sm text-gray-600">Configuração flexível com cama de casal, cama de solteiro e sofá-cama.</p>
              </div>

              <ul className="space-y-4">
                {[
                  "Ar condicionado split quente/frio",
                  "Cozinha com micro-ondas, geladeira, fogão, chaleira elétrica & mais",
                  "Sacada com churrasqueira privativa e vista para o lago",
                  "TV Smart e Wi-Fi fibra óptica",
                  "Apartamento completo para você e sua família"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href="https://wa.me/5554996854779"
                  className="block w-full bg-[#129ce2] hover:bg-[#0e8ccf] text-white text-center font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                >
                  Solicitar Orçamento
                </a>
                <p className="text-center text-xs text-gray-400 mt-3 flex justify-center items-center gap-1">
                  <ShieldCheck size={12} /> Reserva segura e sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destino" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#febe05] font-bold uppercase tracking-widest text-sm">Destino</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Marcelino Ramos espera por você</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Conhecida por suas águas termais medicinais, a cidade oferece lazer e saúde o ano inteiro.
                Além das termas, aproveite a orla do Lago do Rio Uruguai, as belezas naturais e a gastronomia local.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-700 p-4 rounded-xl hover:border-[#febe05] transition-colors">
                  <Clock className="text-[#febe05] mb-2" />
                  <h4 className="font-bold">Aberto o Ano Todo</h4>
                  <p className="text-xs text-gray-500">Temporadas de inverno e verão.</p>
                </div>
                <div className="border border-gray-700 p-4 rounded-xl hover:border-[#febe05] transition-colors">
                  <MapPin className="text-[#febe05] mb-2" />
                  <h4 className="font-bold">Fácil Acesso</h4>
                  <p className="text-xs text-gray-500">Estradas pavimentadas e seguras.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-800 group">
              <img
                src={termasImages[currentTermasIndex].src}
                alt={termasImages[currentTermasIndex].title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <h3 className="text-2xl font-bold mb-2">{termasImages[currentTermasIndex].title}</h3>
                <p className="text-gray-200">{termasImages[currentTermasIndex].desc}</p>
              </div>

              <div className="absolute bottom-8 right-8 flex gap-3">
                <button onClick={() => prevSlide(currentTermasIndex, setCurrentTermasIndex, termasImages.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors border border-white/30">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => nextSlide(currentTermasIndex, setCurrentTermasIndex, termasImages.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm transition-colors border border-white/30">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para garantir sua data?</h2>
          <p className="text-gray-500 mb-10">Devido à alta procura nas temporadas, recomendamos reservar com antecedência.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <a
              href="https://wa.me/5554996854779"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 bg-[#25D366] hover:bg-[#20b85c] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-4 group"
            >
              <div className="bg-white/20 p-4 rounded-full">
                <MessageCircle size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Chamar no WhatsApp</h3>
                <p className="text-green-50">Resposta rápida e atendimento humanizado.</p>
              </div>
              <div className="bg-white text-green-600 px-6 py-2 rounded-full font-bold text-sm mt-2 group-hover:scale-105 transition-transform">
                Iniciar Conversa
              </div>
            </a>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center">
              <Mail size={24} className="text-gray-400 mb-3" />
              <h4 className="font-bold text-gray-700">E-mail</h4>
              <p className="text-sm text-gray-500">contatovistabella@gmail.com</p>
            </div>

            <a href="https://www.facebook.com/vistabellatermas" className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center hover:bg-pink-50 hover:border-pink-100 transition-colors group">
              <Instagram size={24} className="text-gray-400 group-hover:text-pink-500 mb-3" />
              <h4 className="font-bold text-gray-700 group-hover:text-pink-600">Instagram</h4>
              <p className="text-sm text-gray-500 group-hover:text-pink-400">@vistabella</p>
            </a>

            <a href="https://www.facebook.com/vistabellatermas" className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-blue-100 transition-colors group">
              <Facebook size={24} className="text-gray-400 group-hover:text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-700 group-hover:text-blue-600">Facebook</h4>
              <p className="text-sm text-gray-500 group-hover:text-blue-400">/vistabellatermas</p>
            </a>

          </div>

          <div id="localizacao" className="mt-12">
            <div className="bg-gray-100 rounded-2xl h-80 relative overflow-hidden group shadow-lg border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Termas+de+Marcelino+Ramos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                title="Mapa"
              ></iframe>

              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow font-bold text-sm text-gray-800 pointer-events-none z-10">
                📍 Balneário - Marcelino Ramos/RS
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <a
                  href="https://maps.app.goo.gl/HnL6t1eH6MDHziQ58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#129ce2] hover:bg-[#0e8ccf] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1"
                >
                  <Navigation size={18} fill="white" />
                  Como Chegar (GPS)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="container mx-auto px-6 text-center">
          <img src="../src/assets/logovistabella.png" alt="Logo" className="h-12 w-auto mx-auto mb-4 opacity-80" />
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Vista Bella Apartamentos Mobiliados. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;