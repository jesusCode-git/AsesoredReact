import React, { useState, useEffect } from 'react';
import { Search, Calendar, BookOpen, Users, Star, ChevronRight, Menu, X, Award, Clock, TrendingUp } from 'lucide-react';

export default function AsesoRed() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('estudiante');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Search,
      title: 'Encuentra Asesores',
      description: 'Busca estudiantes y maestros expertos en las materias que necesitas',
      color: '#FF6B35'
    },
    {
      icon: Calendar,
      title: 'Agenda Fácilmente',
      description: 'Sistema inteligente de horarios que se adapta a tu disponibilidad',
      color: '#004E89'
    },
    {
      icon: BookOpen,
      title: 'Múltiples Materias',
      description: 'Accede a asesorías en todas las áreas del conocimiento',
      color: '#F77F00'
    },
    {
      icon: Users,
      title: 'Comunidad Anáhuac',
      description: 'Conéctate con compañeros y profesores de tu institución',
      color: '#06A77D'
    }
  ];

  const stats = [
    { value: '500+', label: 'Estudiantes Activos', icon: Users },
    { value: '1,200+', label: 'Asesorías Realizadas', icon: BookOpen },
    { value: '4.9/5', label: 'Satisfacción', icon: Star },
    { value: '95%', label: 'Tasa de Aprobación', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'María González',
      role: 'Estudiante de Ingeniería',
      image: '👩‍🎓',
      text: 'AsesoRed me ayudó a aprobar Cálculo Diferencial. Encontré al asesor perfecto en minutos.',
      rating: 5
    },
    {
      name: 'Carlos Ramírez',
      role: 'Asesor de Programación',
      image: '👨‍💻',
      text: 'Como asesor, la plataforma me permite compartir mis conocimientos y ayudar a otros mientras gano experiencia.',
      rating: 5
    },
    {
      name: 'Prof. Ana Martínez',
      role: 'Docente',
      image: '👩‍🏫',
      text: 'Excelente herramienta para conectar con estudiantes que necesitan apoyo adicional fuera del aula.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .playfair {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          z-index: 0;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -200px;
          right: -100px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -150px;
          left: -100px;
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }

        .tab-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .tab-button.active::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-blob {
            filter: blur(60px);
          }
          .blob-1 {
            width: 300px;
            height: 300px;
          }
          .blob-2 {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="playfair text-2xl font-bold gradient-text">AsesoRed</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Inicio</a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Características</a>
              <a href="#testimonios" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contacto</a>
              <button className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all">
                Iniciar Sesión
              </button>
              <button className="btn-primary px-6 py-2.5 text-white font-semibold rounded-lg shadow-lg">
                Registrarse
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-effect animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#inicio" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Inicio</a>
              <a href="#caracteristicas" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Características</a>
              <a href="#testimonios" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Testimonios</a>
              <a href="#contacto" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">Contacto</a>
              <button className="w-full px-4 py-2 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600">
                Iniciar Sesión
              </button>
              <button className="w-full btn-primary px-4 py-2 text-white font-semibold rounded-lg">
                Registrarse
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold animate-fade-in">
                  🎓 Plataforma Educativa IEST Anáhuac
                </span>
              </div>
              
              <h1 className="playfair text-5xl md:text-7xl font-black text-gray-900 leading-tight animate-fade-in-up">
                Conecta, Aprende y{' '}
                <span className="gradient-text">Comparte</span> Conocimiento
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-100">
                La plataforma que conecta estudiantes del IEST Anáhuac para dar y recibir 
                asesorías académicas. Encuentra el asesor perfecto y alcanza tus metas educativas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                <button className="btn-primary px-8 py-4 text-white font-bold rounded-xl shadow-xl flex items-center justify-center space-x-2 text-lg">
                  <span>Comenzar Ahora</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-indigo-300">
                  Ver Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4 animate-fade-in-up delay-300">
                <div className="flex -space-x-3">
                  {['🧑‍🎓', '👩‍🎓', '👨‍💼', '👩‍💻'].map((emoji, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center text-xl">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-900">500+ estudiantes activos</p>
                  <p className="text-sm text-gray-600">Únete a nuestra comunidad</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-effect rounded-3xl p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Buscar Asesoría</h3>
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Materia</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Ej: Cálculo Diferencial, Programación..."
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Fecha</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="date"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hora</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="time"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary py-4 text-white font-bold rounded-xl shadow-lg flex items-center justify-center space-x-2">
                  <Search className="w-5 h-5" />
                  <span>Buscar Asesores</span>
                </button>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    ✨ <span className="font-semibold">12 asesores disponibles</span> para esta materia
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-600">Calificación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center animate-fade-in-up delay-${index * 100}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <p className="playfair text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold animate-fade-in">
              ✨ Características
            </span>
            <h2 className="playfair text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4 animate-fade-in-up delay-100">
              Todo lo que necesitas en una{' '}
              <span className="gradient-text">plataforma</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Diseñada específicamente para estudiantes del IEST Anáhuac
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card bg-white rounded-2xl p-8 shadow-lg card-hover animate-fade-in-up delay-${index * 100}`}
              >
                <div 
                  className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}22 0%, ${feature.color}44 100%)` 
                  }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl md:text-5xl font-black text-gray-900 mb-4">
              ¿Cómo <span className="gradient-text">funciona</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tres pasos simples para comenzar tu experiencia en AsesoRed
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 space-x-4">
            {['estudiante', 'asesor'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-button px-8 py-3 font-bold rounded-xl transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white active'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab === 'estudiante' ? '👨‍🎓 Soy Estudiante' : '👨‍🏫 Soy Asesor'}
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === 'estudiante' ? (
              <>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Busca y Selecciona</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Encuentra asesores expertos en la materia que necesitas. Revisa perfiles, 
                    calificaciones y horarios disponibles.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Agenda tu Sesión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Elige fecha y hora que mejor se adapten a tu agenda. Recibe confirmación 
                    instantánea y recordatorios automáticos.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Aprende y Crece</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recibe asesoría personalizada, mejora tus calificaciones y alcanza 
                    tus objetivos académicos.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Crea tu Perfil</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Registra tus materias de experiencia, establece tu tarifa y 
                    define tu disponibilidad horaria.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Recibe Solicitudes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Estudiantes te encontrarán y solicitarán asesorías. Tú decides 
                    cuáles aceptar según tu agenda.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comparte Conocimiento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Imparte asesorías, gana experiencia docente y construye tu 
                    reputación en la comunidad.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="playfair text-4xl md:text-5xl font-black mb-4">
              Lo que dicen nuestros <span className="text-yellow-400">usuarios</span>
            </h2>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              Miles de estudiantes ya han mejorado sus calificaciones con AsesoRed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 card-hover animate-fade-in-up delay-${index * 100}`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-indigo-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-indigo-100 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="playfair text-4xl md:text-6xl font-black text-white mb-6">
            ¿Listo para comenzar tu viaje académico?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Únete a cientos de estudiantes que ya están mejorando sus calificaciones 
            y alcanzando sus metas con AsesoRed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all text-lg">
              Crear Cuenta Gratis
            </button>
            <button className="px-10 py-5 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 transition-all text-lg">
              Conocer Más
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="playfair text-xl font-bold text-white">AsesoRed</span>
              </div>
              <p className="text-gray-400 text-sm">
                Conectando estudiantes del IEST Anáhuac para un mejor aprendizaje.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Plataforma</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Cómo funciona</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Materias</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Asesores</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Soporte</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Términos y condiciones</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 AsesoRed - IEST Anáhuac. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
