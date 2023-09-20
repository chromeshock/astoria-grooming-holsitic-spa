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
        'Dogs Basic Extra large long hair': 'Dogs Basic Extra large long hair',
        'Dogs Basic Extra large coat double coat spa': 'Dogs Basic Extra large coat double coat spa',
         'Cocker Spaniel, Cavalier Charles Kings, Cookapoo Or similare mixes': 'Cocker Spaniel, Cavalier Charles Kings, Cookapoo Or simmilare mixes',

      //9th row
      'Boarding Services X 24 Hours': 'Boarding Services X 24 Hours',
      'Daycare Day/ dogs stay 9am to 7pm': 'Daycare Day/ dogs stay 9am to 7pm',
       'Daycare half day/up to 5 hours': 'Daycare half day/up to 5 hours',
        'Cat Boarding/ 24 hours': 'Cat Boarding/ 24 hours',
    }
  },

  es: {
    translation: {
      welcome: '¡Bienvenido a Astoria Grooming Holistico para mascotas',
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
        'Dogs Basic Extra large coat double coat spa': 'Perros Basic Abrigo extra grande doble abrigo spa',
        'Cocker Spaniel, Cavalier Charles Kings, Cookapoo Or similare mixes': 'Cocker Spaniel, Cavalier Charles Kings, Cookapoo o mezclas similares',

      //9th row
      'Boarding Services X 24 Hours': 'Servicios de Embarque X 24 Horas',
      'Daycare Day/ dogs stay 9am to 7pm': 'Guardería/perros de 9:00 a 19:00 horas.',
      'Daycare half day/up to 5 hours': 'Guardería medio día/hasta 5 horas',
      'Cat Boarding/ 24 hours': 'Alojamiento para gatos/ 24 horas',
    
     
    }
  },

  el: {
    translation: {
      welcome: 'Καλώς ήρθατε στο Astoria Grooming Holistic Pet Spa',
      
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
