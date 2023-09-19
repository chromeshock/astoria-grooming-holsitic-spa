// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import TranslationComponent from './components/Translations';



const resources = {
  en: {
    //keys to be translated
    translation: {
      "welcome": "Welcome to our Astoria Grooming Holistic Pet Spa",
      "Clean Ears": "Clean Ears",
      "catLionCut":`This service includes body shaving, mane maintenance, and grooming of the feet and a portion of the tail. We also clip nails, clean ears, and offer a dry bath featuring a specialized shampoo with micro-crystals to cleanse your cat's skin. Additional charges may apply if the cat has severely matted fur. We do not shave cats over 14 years old or underweight cats due to the fragility of their skin and the potential for injury from the clippers.

      For first-time clients, we require an initial evaluation to assess the cat's behavior. If the cat exhibits signs of extreme stress or aggression, we may be unable to provide the full range of services. However, you will only be charged for the services we are able to complete. For example, if we only manage to clip the nails, you will only be charged for that service.

      We do not administer any sedatives or relaxants, as that goes against our policy. All grooming sessions are conducted in separate rooms to minimize stress, particularly for cats. A Rabies Certificate is required for all pets.`,

      "fullSpaDogs": `For admission to our facility, a certificate confirming vaccinations for rabies, distemper, and bordetella is required. Your dog will enjoy a relaxing bath featuring a range of shampoos, including oatmeal, tearless, and hypoallergenic options, along with a blueberry facial and conditioner. We also trim nails, clean ears, and cut hair. A finishing touch of shining spray is applied. Additional fees may apply for dogs with severely matted fur.`,
    
      rabiesCert: `Required: Certificate of up to date vaccines. Rabies and bordetella`,
      
      catsLongHair: `Requirements: A Rabies Certificate is mandatory for all cats. First-time feline clients will need an evaluation on the same day as their scheduled appointment. We assess each cat's behavior, and unfortunately,  we cannot accommodate cats that are aggressive or highly stressed. If the cat only allows us to clip its nails, you will only be charged for that service. No charges will apply if we are unable to perform any services.   Additional fees may be incurred for cats with severely matted fur.`,
      
      xtraDmat: "This service is a complementary service for dogs Double coats.",
      
      boarding24: "Overnight 24 hours",
      
      catServices: "Trim nails, clean ears, sanitary area.  Required: Certificate of  up to date vaccines. "
      // ... more keys
    }
  },

  es: {
    translation: {
      "welcome": "¡Bienvenido a Astoria Grooming Holistico para mascotas",
      "Clean Ears": "Orejas limpias",
      "catLionCut": `Este servicio incluye afeitado del cuerpo, mantenimiento de la melena y aseo de los pies y una parte de la cola. También cortamos uñas, limpiamos orejas y ofrecemos un baño seco con un champú especializado con microcristales para limpiar la piel de tu gato. Se pueden aplicar cargos adicionales si el gato tiene el pelaje muy enredado. No afeitamos a gatos mayores de 14 años ni a gatos con bajo peso debido a la fragilidad de su piel y la posibilidad de sufrir lesiones con las maquinillas.

      Para clientes nuevos, requerimos una evaluación inicial para valorar el comportamiento del gato. Si el gato muestra signos de estrés extremo o agresión, es posible que no podamos brindarle toda la gama de servicios. Sin embargo, solo se le cobrarán los servicios que podamos completar. Por ejemplo, si sólo conseguimos cortarle las uñas, sólo se le cobrará por ese servicio.

      No administramos sedantes ni relajantes, ya que eso va en contra de nuestra política. Todas las sesiones de aseo se llevan a cabo en salas separadas para minimizar el estrés, especialmente para los gatos. Se requiere un certificado de rabia para todas las mascotas.`,
           
      fullSpaDogs: `Para el ingreso a nuestras instalaciones se requiere un certificado que acredite las vacunas contra la rabia, el moquillo y la bordetella. Su perro disfrutará de un baño relajante con una variedad de champús, que incluyen opciones de avena, sin lágrimas e hipoalergénicos, junto con un acondicionador y un tratamiento facial de arándanos. También cortamos uñas, limpiamos orejas y cortamos pelo. Se aplica un toque final con spray brillante. Es posible que se apliquen tarifas adicionales para perros con pelaje muy enredado.`,
    
      rabiesCert: `Requerido: Certificado de vacunas al día. Rabia y bordetella`,
      
      catsLongHair: `Requisitos: Un certificado de rabia es obligatorio para todos los gatos. Los clientes felinos primerizos necesitarán una evaluación el mismo día de su cita programada. Evaluamos el comportamiento de cada gato y, lamentablemente, no podemos aceptar gatos agresivos o muy estresados. Si el gato sólo nos permite cortarle las uñas, sólo se te cobrará por ese servicio. No se aplicarán cargos si no podemos realizar ningún servicio. Se pueden incurrir en tarifas adicionales para gatos con pelaje muy enredado.`,
      
      xtraDmat: "Este servicio es un servicio complementario para perros de doble pelaje.",
      
      boarding24: "Durante la noche las 24 horas",
      
      catServices: "Recortar uñas, limpiar orejas, zona sanitaria. Requerido: Certificado de vacunas al día. "
       // ... more keys
    }
  },

  el: {
    translation: {
      "welcome":   `Καλώς ήρθατε στο Astoria Grooming Holistic Pet Spa`,

      catLionCut: `Αυτή η υπηρεσία περιλαμβάνει ξύρισμα σώματος, συντήρηση χαίτης και περιποίηση των ποδιών και ενός τμήματος της ουράς. Κόβουμε επίσης νύχια, καθαρίζουμε τα αυτιά και προσφέρουμε στεγνό μπάνιο με εξειδικευμένο σαμπουάν με μικροκρυστάλλους για τον καθαρισμό του δέρματος της γάτας σας. Ενδέχεται να ισχύουν πρόσθετες χρεώσεις εάν η γάτα έχει έντονα μπερδεμένη γούνα. Δεν ξυρίζουμε γάτες ηλικίας άνω των 14 ετών ή λιποβαρείς γάτες λόγω της ευθραυστότητας του δέρματός τους και της πιθανότητας τραυματισμού από την κουρευτική μηχανή.

      Για τους πελάτες για πρώτη φορά, χρειαζόμαστε μια αρχική αξιολόγηση για να αξιολογήσουμε τη συμπεριφορά της γάτας. Εάν η γάτα παρουσιάζει σημάδια ακραίου στρες ή επιθετικότητας, μπορεί να μην είμαστε σε θέση να παρέχουμε όλο το φάσμα των υπηρεσιών. Ωστόσο, θα χρεωθείτε μόνο για τις υπηρεσίες που μπορούμε να ολοκληρώσουμε. Για παράδειγμα, εάν καταφέρουμε να κόψουμε μόνο τα καρφιά, θα χρεωθείτε μόνο για αυτήν την υπηρεσία.

      Δεν χορηγούμε ηρεμιστικά ή χαλαρωτικά, καθώς αυτό αντίκειται στην πολιτική μας. Όλες οι συνεδρίες περιποίησης διεξάγονται σε ξεχωριστούς χώρους για να ελαχιστοποιηθεί το άγχος, ιδιαίτερα για τις γάτες. Απαιτείται Πιστοποιητικό Λύσσας για όλα τα κατοικίδια.`,
      
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
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
