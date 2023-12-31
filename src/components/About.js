import React from 'react';
import { useTranslation } from 'react-i18next';


function About () {
      const { t } = useTranslation();

    return (
        <div className='parent-container'>
            <div>
                <h1 className='about-header'>{t("About Us")}</h1>
                    <p className='about-txt'>{t("We have designed a special place for your beloved pets, we aim to be the more than just regular grooming salon, our atmosphere is cage free. Each client has a separate grooming room, with special accommodations to keep our cat clients isolated. Our tables and hydraulic bathtubs make it easier to handle both long and extra long dog breeds.")}
                    </p>
            </div>
        </div>
    )
}

export default About;