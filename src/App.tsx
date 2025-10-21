import { Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ProjectCarousel } from './components/ProjectCarousel';

export default function App() {
  const skills = [
    'UI/UX', 'HCI', 'User Stories', 'Placeholder', 
    'Arquitectura de la Información', 'Benchmarking', 
    'Pruebas de usabilidad', 'Diseño centrado en el usuario',
    'Prototipado', 'Encuestas', 'Experiencia de Usuario (UX)',
    'Diseño de Interfaces (UI)', 'Figma', 'PowerPoint',
    'Python', 'Java', 'Node.js', 'HTML', 'CSS', 'Angular'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-slate-800">
              Valeria Florez Paz
            </h1>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Colombia, Armenia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:valeria.florezpaz@gmail.com" className="hover:text-blue-600 transition-colors">
                  valeria.florezpaz@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl">
            <p className="text-slate-700 leading-relaxed text-lg">
              Estudiante en etapa final de formación en Diseño UI/UX en TripleTen, con base en Ingeniería de Sistemas que fortalece mi comprensión del ciclo de desarrollo digital. Cuento con experiencia en investigación de usuarios, pruebas de usabilidad y creación de prototipos en Figma. Me destaco por combinar creatividad, pensamiento analítico y una visión técnica que facilita la colaboración con equipos de desarrollo. Busco iniciar mi carrera como UI/UX Designer Junior, aportando soluciones centradas en el usuario que mejoren la interacción entre personas y tecnología.
            </p>
          </div>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-16">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1670851810697-68ddb4ecae1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEwMTcxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Workspace"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-slate-800 mb-8">
          Habilidades Técnicas
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-blue-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-slate-800 mb-8">
          UX/UI - Proyectos Técnicos
        </h2>
        <ProjectCarousel />
      </section>

      {/* Education & Languages Footer */}
      <section className="relative mt-24 overflow-hidden">
        <div 
          className="px-6 py-16 md:px-12 lg:px-20"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 1) 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 text-white">
              {/* Education */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl">UX/UI Certificate, TripleTen</p>
                    <p className="text-gray-300">2025</p>
                  </div>
                  <div>
                    <p className="text-xl">Ingeniería en Sistemas y Computación, Universidad del Quindío</p>
                    <p className="text-gray-300">2022 - 2027</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-6">Languages</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xl">Español</p>
                    <p className="text-gray-300">Nativo</p>
                  </div>
                  <div>
                    <p className="text-xl">Inglés</p>
                    <p className="text-gray-300">Básico-Intermedio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
