import { Camera, Zap, Award } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
      {
            title: 'Video Inmobiliario',
            icon: Camera,
            description: 'Tours cinematográficos que revelan cada detalle arquitectónico con perspectivas únicas e impactantes.',
      },
      {
            title: 'Tecnología FPV',
            icon: Zap,
            description: 'Drones de alta precisión que navegan espacios complejos creando tomas fluidas imposibles con drones convencionales.',
      },
      {
            title: 'Propiedades Únicas',
            icon: Award,
            description: 'Especialización en todo tipo de propiedades, desde residencias familiares hasta espacios comerciales y desarrollos innovadores.',
      },
];

export const ServicesSection: React.FC = () => (
      <section id="servicios" className="py-32 bg-gradient-to-b from-transparent to-neutral-800/50">
            <div className="container mx-auto px-6">
                  <div className="text-center mb-24">
                        <div className="inline-block mb-8">
                              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Experiencia Cinematográfica</span>
                              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4" />
                        </div>
                        <h2 className="text-6xl font-extralight text-white mb-8 tracking-tight">Visión artística única</h2>
                        <p className="text-lg font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                              Combinamos tecnología de vanguardia con sensibilidad artística para crear contenido visual que eleva exponencialmente el valor percibido de cada propiedad.
                        </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12 mb-24">
                        {services.map((s) => (
                              <ServiceCard key={s.title} {...s} />
                        ))}
                  </div>
            </div>
      </section>
);

export default ServicesSection;