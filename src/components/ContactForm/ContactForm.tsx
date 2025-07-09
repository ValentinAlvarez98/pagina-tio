'use client';
import { useForm } from 'react-hook-form';


interface FormData {
      name: string;
      email: string;
      message: string;
}

export const ContactForm: React.FC = () => {
      const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

      const onSubmit = async (data: FormData) => {
            // lógica de envío (API Route o servicio externo)
            console.log(data);
      };

      return (
            <section id="contacto" className="py-16">
                  <div className="container mx-auto px-6 max-w-xl">
                        <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                              <input
                                    type="text"
                                    placeholder="Nombre"
                                    {...register('name', { required: true })}
                                    className="w-full px-4 py-2 border rounded"
                              />
                              {errors.name && <span className="text-red-500">Este campo es obligatorio</span>}

                              <input
                                    type="email"
                                    placeholder="Email"
                                    {...register('email', /* { validate: validateEmail } */)}
                                    className="w-full px-4 py-2 border rounded"
                              />
                              {errors.email && <span className="text-red-500">Email inválido</span>}

                              <textarea
                                    placeholder="Mensaje"
                                    rows={5}
                                    {...register('message', { required: true })}
                                    className="w-full px-4 py-2 border rounded"
                              />
                              {errors.message && <span className="text-red-500">Este campo es obligatorio</span>}

                              <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                              >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                              </button>
                        </form>
                  </div>
            </section>
      );
};

export default ContactForm;