import Link from 'next/link';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => (
      <footer className="bg-neutral-950 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                  <div className="text-3xl font-extralight tracking-wider mb-6 text-neutral-200">
                        FPV<span className="font-light text-neutral-400">.RASANTE</span>
                  </div>
                  <p className="text-neutral-400 font-light mb-8 tracking-wide">Transformando propiedades en obras de arte</p>
                  <div className="flex justify-center space-x-8 mb-12">
                        <Link href="https://instagram.com/fpv.rasante" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110">
                              <Instagram className="h-7 w-7" />
                        </Link>
                  </div>
                  <div className="pt-8 border-t border-neutral-800 text-neutral-500 text-sm font-light tracking-wide">
                        © {new Date().getFullYear()} FPV.Rasante — Todos los derechos reservados
                  </div>
            </div>
      </footer>
);