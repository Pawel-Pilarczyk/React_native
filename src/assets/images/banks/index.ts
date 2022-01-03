import bankOfAmerica from './BankOfAmerica.png';
import chase from './chase.png';
import citi from './Citi.png';
import jago from './Jago.png';
import paypal from './Paypal.png';

type BanksType = {
  name: string;
  icon: any;
};

export const banks: BanksType[] = [
  {name: 'Bank of America', icon: bankOfAmerica},
  {name: 'Chase', icon: chase},
  {name: 'City Bank', icon: citi},
  {name: 'Jago', icon: jago},
  // {name: 'Paypal', icon: paypal},
];
