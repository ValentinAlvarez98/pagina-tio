import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram } from 'lucide-react';
import Link from 'next/link';

export const CtaSection: React.FC = () => (
      <section id="contacto" className="py-32 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container mx-auto px-6 text-center">
                  <div className="max-w-4xl mx-auto">
                        <div className="inline-block mb-12">
                              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Siguiente Nivel</span>
                              <div className="w-16 h-px bg-neutral-300 mx-auto mt-4" />
                        </div>
                        <h2 className="text-6xl font-extralight text-neutral-800 mb-12 tracking-tight">Eleva tu propiedad al siguiente nivel</h2>
                        <p className="text-xl font-light text-neutral-500 mb-16 leading-relaxed max-w-3xl mx-auto">
                              Descubre cómo transformamos espacios excepcionales en experiencias visuales inolvidables que cautivan y conectan emocionalmente.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                              <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white px-12 py-6 text-lg font-light tracking-wide rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 group">
                                    Ver Portafolio
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </Button>
                              <Button size="lg" variant="outline" className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 px-12 py-6 text-lg font-light tracking-wide rounded-full shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur-sm" asChild>
                                    <Link href="https://instagram.com/fpv.rasante" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                                          <Instagram className="h-6 w-6" />
                                          @fpv.rasante
                                    </Link>
                              </Button>
                        </div>
                  </div>
            </div>
      </section>
);

export default CtaSection;