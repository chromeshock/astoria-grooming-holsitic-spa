import React from 'react';
import { useTranslation } from 'react-i18next';


//Translation hook for translation functions in components.
const TranslationComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('fullSpaDogs')}</p>
      <p>{t('catLionCut')}</p>
    </div>
  );
};

export default TranslationComponent;
