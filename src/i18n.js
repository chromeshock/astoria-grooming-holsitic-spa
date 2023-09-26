// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import TranslationComponent from './components/Translations';



const resources = {
  en: {
    //keys to be translated
    translation: {
      welcome: 'Welcome to our Astoria Grooming Holistic Pet Spa',
      //1st row
        'Cat Claw Trim': 'Cat Claw Trim',
        'Nail Clipper for dogs': 'Nail Clipper for dogs',
        'CleanEars': 'Clean Ears',
        'Paws Clean': 'Paws Clean',

      //2nd row
        'Extra Desheading': 'Extra Desheading',
        'Face Trim': 'Face Trim',
        'Cats kitty lion cut': 'Cats kitty lion cut',
        'Cat Services': 'Cat Services',

      //3rd row
        'Cats Long Hair': 'Cats Long Hair',
        'Cat classic for Kittens': 'Cat classic for Kittens',
        'Extra Dematting': 'Extra Dematting',
        'Medium double coat': 'Medium double coat',

      //4th row
        'Full spa extra small dogs': 'Full spa extra small dogs',
        'Full groom spa small dogs': 'Full groom spa small dogs',
        'Full groom spa medium dogs': 'Full groom spa medium dogs',
        'Full groom spa large dogs': 'Full groom spa large dogs',
      
      //5th row
        'Full spa extra large dogs': 'Full spa extra large dogs',
        'Full spa Double coat Large': 'Full spa Double coat Large',
        'Dogs basic spa extra small': 'Dogs basic spa extra small',
        'Dogs basic spa small short hair': 'Dogs basic spa small short hair',

      //6th row
         'Dogs basic spa medium short hair': 'Dogs basic spa medium short hair',
         'Dogs basic spa large short hair': 'Dogs basic spa large short hair',
         'Dogs Basic spa xl dogs': 'Dogs Basic spa xl dogs',
         'Dogs Basic small spa double coat': 'Dogs Basic small spa double coat',

      //7th row
        'Dogs Basic small spa long hair': 'Dogs Basic small spa long hair',
        'Dogs Basic extra small spa long hair': 'Dogs Basic extra small spa long hair',
        'Dogs Basic extra small spa double coat spa': 'Dogs Basic extra small spa double coat spa',
        'Dogs Basic extra large dog standard poodle and poddle mix spa': 'Dogs Basic extra large dog standard poodle and  poddle mix spa',

      //8th row
        'Dogs Basic extra small spa double coat': 'Dogs Basic extra small spa double coat',
        'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Or Similares Mixes': 'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Or Similares Mixes', 

      //9th row
      'Boarding Services X 24 Hours': 'Boarding Services X 24 Hours',
      'Day care Full Day dogs stay 9am to 7pm':'Day care Full Day dogs stay 9am to 7pm',
      'Daycare half day/up to 5 hours': 'Daycare half day/up to 5 hours',
      'Cat Boarding 24 hours': 'Cat Boarding 24 hours',
    }
  },

  es: {
    translation: {
      welcome: '¡Bienvenido a Astoria Grooming Holistico para mascotas',
      //details, duration 
        'No further details': 'No hay detalles',
        'Click for more details': 'Haga clic para más detalles',
        '30 min': '30 Minutos',
        '10 min': '10 Minutos',
        '15 min': '15 Minutos',
        '1 hour': '1 Hora',

      //description es translated full spa dogs
        'For admission to our facility, a certificate confirming vaccinations for rabies, distemper, and bordetella is required. Your dog will enjoy a relaxing bath featuring a range of shampoos, including oatmeal, tearless, and hypoallergenic options, along with a blueberry facial and conditioner. We also trim nails, clean ears, and cut hair. A finishing touch of shining spray is applied. Additional fees may apply for dogs with severely matted fur.': 'Para el ingreso a nuestras instalaciones se requiere un certificado que acredite las vacunas contra la rabia, el moquillo y la bordetella. Su perro disfrutará de un baño relajante con una variedad de champús, que incluyen opciones de avena, sin lágrimas e hipoalergénicos, junto con un acondicionador y un tratamiento facial de arándanos. También cortamos uñas, limpiamos orejas y cortamos pelo. Se aplica un toque final con spray brillante. Se pueden aplicar tarifas adicionales para perros con pelaje muy enredado.',
      
      //description es translated catLionCut
        "This service includes body shaving, mane maintenance, and grooming of the feet and a portion of the tail. We also clip nails, clean ears, and offer a dry bath featuring a specialized shampoo with micro-crystals to cleanse your cat's skin. Additional charges may apply if the cat has severely matted fur. We do not shave cats over 14 years old or underweight cats due to the fragility of their skin and the potential for injury from the clippers. For first-time clients, we require an initial evaluation to assess the cat's behavior. If the cat exhibits signs of extreme stress or aggression, we may be unable to provide the full range of services. However, you will only be charged for the services we are able to complete. For example, if we only manage to clip the nails, you will only be charged for that service. We do not administer any sedatives or relaxants, as that goes against our policy. All grooming sessions are conducted in separate rooms to minimize stress, particularly for cats. A Rabies Certificate is required for all pets.": "Este servicio incluye afeitado del cuerpo, mantenimiento de la melena y aseo de los pies y una parte de la cola. También cortamos uñas, limpiamos orejas y ofrecemos un baño seco con un champú especializado con microcristales para limpiar la piel de tu gato. Se pueden aplicar cargos adicionales si el gato tiene el pelaje muy enredado. No afeitamos a gatos mayores de 14 años ni a gatos con bajo peso debido a la fragilidad de su piel y la posibilidad de sufrir lesiones con las aquinillas. Para clientes nuevos, requerimos una evaluación inicial para valorar el comportamiento del gato. Si el gato muestra signos de estrés extremo o agresión, es posible que no podamos brindarle toda la gama de servicios. Sin embargo, solo se le cobrarán los servicios que podamos completar. Por ejemplo, si sólo conseguimos cortarle las uñas, sólo se le cobrará por ese servicio. No administramos sedantes ni relajantes, ya que eso va en contra de nuestra política. Todas las sesiones de aseo se llevan a cabo en salas separadas para minimizar el estrés, especialmente para los gatos. Se requiere un Certificado de Rabia para todas las mascotas.",

      //description es translated rabiesCert
        "Required: Certificate of up to date vaccines. Rabies and bordetella": "Requerido: Certificado de vacunas actualizadas. Rabies y bordetella",
      
        //catServices
        "Trim nails, clean ears, sanitary area. Required: Certificate of up to date vaccines": "Requerido: Certificado de vacunas actualizadas. Rabies y bordet hay area sanitaria",

      //1st row
        'Cat Claw Trim': 'Adorno de garra de gato',
        'Nail Clipper for dogs': 'Recorte de nail',
        'CleanEars': 'Orejas limpias',
        'Paws Clean': 'Patas limpias',
     
      //2nd row
        'Clean Ears': 'Orejas limpias',
        'Face Trim': 'Recorte facial',
        'Cats kitty lion cut': 'Gatos gatito león cortado',
        'Cat Services': 'Servicios para gatos',
      //3rd row
        'Cats Long Hair': 'Gatos De Pelo Largo',
        'Cat classic for Kittens': 'Clásico gato para gatitos',
        'Extra Dematting': 'Extra Dematting',
        'Medium double coat': 'Doble capa media',

      //4th row
        'Full spa extra small dogs': 'Spa completo perros extra pequeños',
        'Full groom spa small dogs': 'Full groom spa small dogs',
        'Full groom spa medium dogs':'Spa completo para perros pequeños',
        'Full groom spa large dogs': 'Spa completo para perros grandes',
      
      //5th row
        'Full spa extra large dogs': 'Spa completo para perros extra grandes.',
        'Full spa Double coat Large': 'Spa completo Doble capa Grande',
        'Dogs basic spa extra small': 'Perros spa básico extra pequeño',
        'Dogs basic spa small short hair': 'Perros basic spa pequeño pelo corto',

      //6th row
         'Dogs basic spa medium short hair': 'Perros basic spa pelo medio corto',
         'Dogs basic spa large short hair': 'Perros basic spa grandes pelo corto',
         'Dogs Basic spa xl dogs': 'Perros basic spa xl',
         'Dogs Basic small spa double coat': 'Perros Basic pequeño spa doble abrigo',

      //7th row
        'Dogs Basic small spa long hair': 'Perros Basic pequeño spa pelo largo',
        'Dogs Basic extra small spa long hair': 'Perros Basic extra pequeño spa pelo largo',
        'Dogs Basic extra spa double coat': 'Perros Basic spa extra pequeño spa doble capa',
        'Dogs Basic extra large dog standard poodle and poddle mix spa': 'Perros Spa básico para perros extra grandes, estándar, caniche y poddle mix',

      //8th row
        'Dogs Basic Extra large long hair': 'Perros Básico Pelo largo extra grande',
        'Dogs Basic extra small spa double coat': 'Dogs Basic abrigo doble spa extra pequeño',
        'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Or Similares Mixes': 'Cocker Spaniel, Cavalier Charles Kings, Cockapoo o mezclas similares',

      //9th row
        'Boarding Services X 24 Hours': 'Servicios de Embarque X 24 Horas',
        'Day care Full Day dogs stay 9am to 7pm': 'Guardería perros de 9:00 a 19:00 horas.',
        'Day Care half day/up to 5 hours': 'Guardería medio día/hasta 5 horas',
        'Cat Boarding 24 hours': 'Alojamiento para gatos 24 horas',
    }
  },

  el: {
    translation: {
      welcome: 'Καλώς ήρθατε στο Astoria Grooming Holistic Pet Spa',
      //details, duration 
        'No further details': 'Χωρίς περισσότερες λεπτομέρειες"',
        'Click for more details': 'Κάντε κλικ για περισσότερες λεπτομέρειες',
        '30 min': '30 λεπτά',
        '10 min': '10 λεπτά',
        '15 min': '15 λεπτά',
        '1 hour': 'μία ώρα',

        //description es translated full spa dogs
        'For admission to our facility, a certificate confirming vaccinations for rabies, distemper, and bordetella is required. Your dog will enjoy a relaxing bath featuring a range of shampoos, including oatmeal, tearless, and hypoallergenic options, along with a blueberry facial and conditioner. We also trim nails, clean ears, and cut hair. A finishing touch of shining spray is applied. Additional fees may apply for dogs with severely matted fur.': 'Για να εισέλθετε στις εγκαταστάσεις μας, απαιτείται πιστοποιητικό που να αποδεικνύει εμβολιασμούς κατά της λύσσας, της λοίμωξης και της βορδετέλας. Ο σκύλος σας θα απολαύσει ένα χαλαρωτικό μπάνιο με μια ποικιλία από σαμπουάν, όπως πλιγούρι βρώμης, χωρίς σκισίματα και υποαλλεργικές επιλογές, μαζί με ένα κοντίσιονερ και μια περιποίηση προσώπου με βατόμουρο. Κόβουμε επίσης νύχια, καθαρίζουμε αυτιά και κόβουμε μαλλιά. Μια τελευταία πινελιά εφαρμόζεται με σπρέι γυαλάδας. Ενδέχεται να ισχύουν πρόσθετες χρεώσεις για σκύλους με πολύ μπερδεμένη γούνα.',
      
      //description es translated catLionCut
        "This service includes body shaving, mane maintenance, and grooming of the feet and a portion of the tail. We also clip nails, clean ears, and offer a dry bath featuring a specialized shampoo with micro-crystals to cleanse your cat's skin. Additional charges may apply if the cat has severely matted fur. We do not shave cats over 14 years old or underweight cats due to the fragility of their skin and the potential for injury from the clippers. For first-time clients, we require an initial evaluation to assess the cat's behavior. If the cat exhibits signs of extreme stress or aggression, we may be unable to provide the full range of services. However, you will only be charged for the services we are able to complete. For example, if we only manage to clip the nails, you will only be charged for that service. We do not administer any sedatives or relaxants, as that goes against our policy. All grooming sessions are conducted in separate rooms to minimize stress, particularly for cats. A Rabies Certificate is required for all pets.": "Αυτή η υπηρεσία περιλαμβάνει ξύρισμα του σώματος, διατήρηση της χαίτης και περιποίηση των ποδιών και μέρους της ουράς. Επίσης, κόβουμε νύχια, καθαρίζουμε τα αυτιά και προσφέρουμε στεγνό μπάνιο με εξειδικευμένο σαμπουάν με μικροκρυστάλλους για τον καθαρισμό του δέρματος της γάτας σας. Ενδέχεται να ισχύουν πρόσθετες χρεώσεις εάν η γάτα έχει πολύ μπερδεμένη γούνα. Δεν ξυρίζουμε γάτες άνω των 14 ετών ή λιποβαρείς γάτες λόγω της ευθραυστότητας του δέρματός τους και της πιθανότητας να υποστούν τραυματισμούς από τα πτερύγια. Για τους νέους πελάτες, χρειαζόμαστε μια αρχική αξιολόγηση για να αξιολογήσουμε τη συμπεριφορά της γάτας. Εάν η γάτα παρουσιάζει σημάδια ακραίου στρες ή επιθετικότητας, ενδέχεται να μην είμαστε σε θέση να παρέχουμε όλο το φάσμα των υπηρεσιών. Ωστόσο, θα χρεωθείτε μόνο για υπηρεσίες που μπορούμε να ολοκληρώσουμε. Για παράδειγμα, εάν καταφέρουμε να κόψουμε μόνο τα νύχια σας, θα χρεωθείτε μόνο για αυτήν την υπηρεσία. Δεν χορηγούμε ηρεμιστικά ή χαλαρωτικά, καθώς αυτό αντίκειται στην πολιτική μας. Όλες οι συνεδρίες περιποίησης πραγματοποιούνται σε ξεχωριστούς χώρους για να ελαχιστοποιηθεί το άγχος, ειδικά για τις γάτες. Απαιτείται Πιστοποιητικό Λύσσας για όλα τα κατοικίδια..",

      //description es translated rabiesCert
        "Required: Certificate of up to date vaccines. Rabies and bordetella": "Απαιτείται: Πιστοποιητικό επικαιροποιημένων εμβολιασμών. Λύσσα και Μπορντετέλα",
      
        //overnight boarding
        "Overnight 24 hours":"Διανυκτέρευση 24 ώρες",

        //1st row
        'Cat Claw Trim': 'Διακοσμητικό νύχι γάτας',
        'Nail Clipper for dogs': 'Νυχοκόπτη για σκύλουςs',
        'Clean Ears': 'Καθαρά αυτιά',
        'Paws Clean': 'Καθαρές πατούσες',

      //2nd row
        'Extra Desheading': 'Αποκεφαλισμός',
        'Face Trim': 'Περικοπή προσώπου',
        'Cats kitty lion cut': 'Γάτες γατούλα κομμένα λιοντάρι',
        'Cat Services': 'Υπηρεσίες για γάτες',

      //3rd row
        'Cats Long Hair': 'Γάτες μακρυμάλλη',
        'Cat classic for Kittens': 'Κλασικό γατάκι για γατάκια',
        'Extra Dematting': 'Detting',
        'Medium double coat': 'Μεσαίο διπλό παλτό',

      //4th row
        'Full spa extra small dogs': 'Πλήρες σπα πολύ μικρά σκυλιά',
        'Full groom spa small dogs': 'Μικρά σκυλιά σπα πλήρους γαμπρού',
        'Full groom spa medium dogs': 'Μικρά σκυλιά σπα πλήρους γαμπρού',
        'Full groom spa large dogs': 'Μεγάλοι σκύλοι spa full groom',
      
      //5th row
        'Full spa extra large dogs': 'Πλήρες σπα πολύ μεγάλοι σκύλοι',
        'Full spa Double coat Large': 'Πλήρες σπα Διπλό παλτό Μεγάλο',
        'Dogs basic spa extra small': 'Βασικό σπα για σκύλους πολύ μικρό',
        'Dogs basic spa small short hair': 'Βασικό σπα για σκύλους μικρό κοντό τρίχωμα',

      //6th row
         'Dogs basic spa medium short hair': 'Σκύλοι βασικό σπα μεσαία κοντά μαλλιά',
         'Dogs basic spa large short hair': 'Σκύλοι βασικό σπα μεγάλο κοντά μαλλιά',
         'Dogs Basic spa xl dogs': 'Dogs Basic spa xl σκυλιά',
         'Dogs Basic small spa double coat': 'Dogs Basic μικρό διπλό παλτό σπα',

      //7th row
        'Dogs Basic small spa long hair': 'Dogs Basic μικρό σπα μακριά μαλλιά',
        'Dogs Basic extra small spa long hair': 'Dogs Basic extra small spa μακριά μαλλιά',
        'Dogs Basic extra small spa double coat spa': 'Dogs Basic πολύ μικρό σπα με διπλό παλτό σπα',
        'Dogs Basic extra large dog standard poodle and poddle mix spa': 'Dogs Basic εξαιρετικά μεγάλος σκύλος, τυπικό σπα για κανίς και κουκούτσι',

      //8th row
        'Dogs Basic Extra large long hair': 'Dogs Basic Εξαιρετικά μεγάλα μακριά μαλλιά',
        'Dogs Basic extra small spa double coat': '«Dogs Basic πολύ μικρό διπλό παλτό σπα»',
        'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Or similar mixes': 'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Ή παρόμοια μείγματα',

      //9th row
        'Boarding Services X 24 Hours': 'Υπηρεσίες επιβίβασης X 24 Ώρες',
       'Day care Full Day dogs stay 9am to 7pm': 'Daycare Day τα σκυλιά μένουν 9 π.μ. έως 7 μ.μ',
        'Day Care half day/up to 5 hours': 'Ημερήσια φροντίδα μισή μέρα/έως 5 ώρες',
        'Cat Boarding 24 hours': 'Επιβίβαση γάτας 24 ώρες',
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
