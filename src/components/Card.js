import { useTranslation } from'react-i18next';
import React from'react';

function Card() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('catLionCut')}</h1>
      <p>{t('fullSpaDogs')}</p>
    </div>
  );
}

export default Card;