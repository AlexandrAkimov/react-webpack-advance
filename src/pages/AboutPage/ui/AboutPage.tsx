import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface IAboutPageProps {
}

const AboutPage: React.FC<IAboutPageProps> = (props) => {
  const { t } = useTranslation('about');
  return (
    <div>
      {t('О сайте')}
    </div>
  );
};

export default AboutPage;
