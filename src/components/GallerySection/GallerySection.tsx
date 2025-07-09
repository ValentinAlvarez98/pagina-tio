import Image from 'next/image';

export const GallerySection: React.FC = () => (
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
            <div className="container mx-auto px-6">
                  <div className="text-center mb-24">
                        <div className="inline-block mb-8">
                              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">Nuestros Proyectos</span>
                              <div className="w-16 h-px bg-neutral-600 mx-auto mt-4" />
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
);

export default GallerySection;