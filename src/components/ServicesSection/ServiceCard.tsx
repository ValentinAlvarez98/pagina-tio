import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface Props {
      title: string;
      description: string;
      icon: LucideIcon;
}

export const ServiceCard: React.FC<Props> = ({ title, description, icon: Icon }) => (
      <Card className="border-0 shadow-xl bg-neutral-800/60 backdrop-blur-sm hover:bg-neutral-800/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
            <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-10 w-10 text-neutral-300" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-6 tracking-wide">{title}</h3>
                  <p className="text-neutral-300 leading-relaxed font-light">{description}</p>
            </CardContent>
      </Card>
);

export default ServiceCard;