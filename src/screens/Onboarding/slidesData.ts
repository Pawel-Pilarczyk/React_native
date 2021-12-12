import {TSlideProps} from '../../components/Slide';
import {onboarding1, onboarding2, onboarding3} from '../../assets/images/index';

export const slidesData: TSlideProps[] = [
  {
    id: 0,
    header: 'Gain total control of your money',
    paragraph: 'Become your own money manager and make every cent count',
    picture: onboarding1,
  },
  {
    id: 1,
    header: 'Know where your money goes',
    paragraph:
      'Track your transaction easily, with categories and financial report',
    picture: onboarding2,
  },
  {
    id: 2,
    header: 'Planning ahead',
    paragraph: 'Setup your budget for each category so you in control',
    picture: onboarding3,
  },
];
