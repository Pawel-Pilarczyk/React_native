import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
};

export type TOnboardingProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export type TSignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
