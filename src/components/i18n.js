// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our Astoria Grooming Holistic Pet Spa",

      catLionCut:`This service includes body shaving, mane maintenance, and grooming of the feet and a portion of the tail. We also clip nails, clean ears, and offer a dry bath featuring a specialized shampoo with micro-crystals to cleanse your cat's skin. Additional charges may apply if the cat has severely matted fur. We do not shave cats over 14 years old or underweight cats due to the fragility of their skin and the potential for injury from the clippers.

      For first-time clients, we require an initial evaluation to assess the cat's behavior. If the cat exhibits signs of extreme stress or aggression, we may be unable to provide the full range of services. However, you will only be charged for the services we are able to complete. For example, if we only manage to clip the nails, you will only be charged for that service.

      We do not administer any sedatives or relaxants, as that goes against our policy. All grooming sessions are conducted in separate   rooms to minimize stress, particularly for cats. A Rabies Certificate is required for all pets.`
      // ... more keys
    }
  },
  es: {
    translation: {
      "welcome": "¡Bienvenido a Astoria Grooming Holistico para mascotas",

      catLionCut: `Este servicio incluye afeitado del cuerpo, mantenimiento de la melena y aseo de los pies y una parte de la cola. También cortamos uñas, limpiamos orejas y ofrecemos un baño seco con un champú especializado con microcristales para limpiar la piel de tu gato. Se pueden aplicar cargos adicionales si el gato tiene el pelaje muy enredado. No afeitamos a gatos mayores de 14 años ni a gatos con bajo peso debido a la fragilidad de su piel y la posibilidad de sufrir lesiones con las maquinillas.

      Para clientes nuevos, requerimos una evaluación inicial para valorar el comportamiento del gato. Si el gato muestra signos de estrés extremo o agresión, es posible que no podamos brindarle toda la gama de servicios. Sin embargo, solo se le cobrarán los servicios que podamos completar. Por ejemplo, si sólo conseguimos cortarle las uñas, sólo se le cobrará por ese servicio.

      No administramos sedantes ni relajantes, ya que eso va en contra de nuestra política. Todas las sesiones de aseo se llevan a cabo en salas separadas para minimizar el estrés, especialmente para los gatos. Se requiere un certificado de rabia para todas las mascotas.`,
      
      // ... more keys
    }
  }
};

//initialization block
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
