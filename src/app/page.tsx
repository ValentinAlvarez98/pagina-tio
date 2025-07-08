import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Play, Camera, Zap, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-800">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-semibold tracking-wider text-white relative">
            FPV
            <span className="font-medium text-neutral-300">.RASANTE</span>
            <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-neutral-400 to-transparent"></div>
          </div>
          <nav className="hidden md:flex space-x-12">
            <Link
              href="#servicios"
              className="text-neutral-400 hover:text-white transition-all duration-300 text-sm tracking-wide uppercase font-light"
            >
              Servicios
            </Link>
            <Link
              href="#nosotros"
              className="text-neutral-400 hover:text-white transition-all duration-300 text-sm tracking-wide uppercase font-light"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-neutral-400 hover:text-white transition-all duration-300 text-sm tracking-wide uppercase font-light"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
                Video Inmobiliario de Lujo
              </span>
              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4"></div>
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
              Capturamos la esencia y elegancia de propiedades excepcionales a través de cinematografía aérea con drones
              FPV de última generación.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mb-20">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=700&width=1200"
                alt="Vista aérea de propiedad de lujo"
                width={1200}
                height={700}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/95 backdrop-blur-sm text-neutral-800 hover:bg-white rounded-full p-8 shadow-xl border border-white/20 transition-all duration-500 hover:scale-105"
                >
                  <Play className="h-10 w-10" />
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-neutral-600 rounded-full opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-neutral-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-gradient-to-b from-transparent to-neutral-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
                Experiencia Cinematográfica
              </span>
              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4"></div>
            </div>

            <h2 className="text-6xl font-extralight text-white mb-8 tracking-tight">Visión artística única</h2>
            <p className="text-lg font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Combinamos tecnología de vanguardia con sensibilidad artística para crear contenido visual que eleva
              exponencialmente el valor percibido de cada propiedad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <Card className="border-0 shadow-xl bg-neutral-800/60 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-10 w-10 text-neutral-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Video Inmobiliario</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Tours cinematográficos que revelan cada detalle arquitectónico con perspectivas únicas e impactantes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-neutral-800/60 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-neutral-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Tecnología FPV</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Drones de alta precisión que navegan espacios complejos creando tomas fluidas imposibles de lograr de
                  otra forma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-neutral-800/60 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-neutral-300" />
                </div>
                <h3 className="text-2xl font-light text-white mb-6 tracking-wide">Propiedades Únicas</h3>
                <p className="text-neutral-300 leading-relaxed font-light">
                  Especialización en todo tipo de propiedades, desde residencias familiares hasta espacios comerciales y
                  desarrollos innovadores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className="bg-gradient-to-br from-neutral-950 via-stone-950 to-neutral-900 text-white py-32"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Nuestra Filosofía</span>
              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4"></div>
            </div>

            <h2 className="text-6xl font-extralight mb-12 tracking-tight">Donde la tecnología encuentra el arte</h2>
            <p className="text-xl font-light text-neutral-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              En FPV.Rasante, cada proyecto es una oportunidad de contar una historia única. Nuestro equipo combina años
              de experiencia en cinematografía aérea con la pasión por capturar la belleza arquitectónica desde
              perspectivas extraordinarias.
            </p>
            <p className="text-lg font-light text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Trabajamos con todo tipo de propiedades, entendiendo que cada espacio tiene su propia personalidad y
              merece ser presentado de manera única y memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Nuestros Proyectos</span>
              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4"></div>
            </div>

            <h2 className="text-4xl font-extralight text-white mb-8 tracking-tight">Explora la magia en cada toma</h2>
            <p className="text-lg font-light text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Sumérgete en nuestra galería y descubre la pasión y dedicación que ponemos en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl">
                <Image
                  src={`/placeholder.svg?height=500&width=700`}
                  alt={`Propiedad exclusiva ${i}`}
                  width={700}
                  height={500}
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-light tracking-wide">Proyecto {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-12">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Siguiente Nivel</span>
              <div className="w-16 h-px bg-neutral-300 mx-auto mt-4"></div>
            </div>

            <h2 className="text-6xl font-extralight text-neutral-800 mb-12 tracking-tight">
              Eleva tu propiedad al siguiente nivel
            </h2>
            <p className="text-xl font-light text-neutral-500 mb-16 leading-relaxed max-w-3xl mx-auto">
              Descubre cómo transformamos espacios excepcionales en experiencias visuales inolvidables que cautivan y
              conectan emocionalmente.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-12 py-6 text-lg font-light tracking-wide rounded-full shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 group"
              >
                Ver Portafolio
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 px-12 py-6 text-lg font-light tracking-wide rounded-full shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-white/80 backdrop-blur-sm"
                asChild
              >
                <Link
                  href="https://instagram.com/fpv.rasante"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <Instagram className="h-6 w-6" />
                  @fpv.rasante
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-extralight tracking-wider mb-6 text-neutral-200">
            FPV<span className="font-light text-neutral-400">.RASANTE</span>
          </div>
          <p className="text-neutral-400 font-light mb-8 tracking-wide">Transformando propiedades en obras de arte</p>
          <div className="flex justify-center space-x-8 mb-12">
            <Link
              href="https://instagram.com/fpv.rasante"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-7 w-7" />
            </Link>
          </div>
          <div className="pt-8 border-t border-neutral-800 text-neutral-500 text-sm font-light tracking-wide">
            © 2024 FPV.Rasante — Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  )
}
