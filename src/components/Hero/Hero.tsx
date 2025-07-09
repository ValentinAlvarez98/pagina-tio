import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => (
      <section className="container mx-auto px-6 py-32">
            <div className="max-w-6xl mx-auto text-center mb-20">
                  <div className="inline-block mb-8">
                        <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
                              Video Inmobiliario de Lujo
                        </span>
                        <div className="w-16 h-px bg-neutral-600 mx-auto mt-4" />
                  </div>

                  <h1 className="text-5xl md:text-6xl font-extralight text-white mb-12 leading-[0.9] tracking-tight">
                        Transformamos
                        <span className="block font-light bg-gradient-to-r from-neutral-300 via-stone-300 to-neutral-200 bg-clip-text text-transparent mt-4">
                              propiedades
                        </span>
                        <span className="block text-4xl md:text-5xl font-extralight text-neutral-300 mt-6 tracking-wide">
                              en obras de arte
                        </span>
                  </h1>

                  <p className="text-xl font-light text-neutral-300 mb-16 max-w-3xl mx-auto leading-relaxed tracking-wide">
                        Capturamos la esencia y elegancia de propiedades excepcionales a través de cinematografía aérea con drones FPV de última generación.
                  </p>
            </div>

            {/* Video mockup */}
            <div className="relative w-full max-w-5xl mx-auto mb-20">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <Image src="/placeholder.svg?height=700&width=1200" alt="Vista aérea" width={1200} height={700} className="object-cover w-full" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                              <Button size="lg" className="bg-white/95 backdrop-blur-sm text-neutral-800 hover:bg-white rounded-full p-8 shadow-xl border border-white/20 transition-all duration-500 hover:scale-105">
                                    <Play className="h-10 w-10" />
                              </Button>
                        </div>
                  </div>

                  {/* círculos decorativos */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 border border-neutral-600 rounded-full opacity-30" />
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-neutral-600 rounded-full opacity-20" />
            </div>
      </section>
);

export default Hero;