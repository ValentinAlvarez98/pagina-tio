import Link from 'next/link';

const menuItems = [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Contacto', href: '#contacto' },
];

export const Header: React.FC = () => (
      <header className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
                  <div className="text-3xl font-semibold tracking-wider text-white relative">
                        FPV
                        <span className="font-medium text-neutral-300">.RASANTE</span>
                        <div className="absolute -bottom-1 left-0 w-8 h-px bg-gradient-to-r from-neutral-400 to-transparent" />
                  </div>

                  {/* Menú desktop */}
                  <nav className="hidden md:flex space-x-12">
                        {menuItems.map(({ label, href }) => (
                              <Link
                                    key={href}
                                    href={href}
                                    className="text-neutral-400 hover:text-white transition-all duration-300 text-sm tracking-wide uppercase font-light"
                              >
                                    {label}
                              </Link>
                        ))}
                  </nav>
            </div>
      </header>
);

export default Header;