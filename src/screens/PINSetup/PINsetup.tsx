import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography, PINCircle, Keyboard} from '@components/index';

export type TPINsetupProps = NativeStackScreenProps<
  RootStackParamList,
  'SetUpPIN'
>;

const PINsetup = ({navigation}: TPINsetupProps) => {
  const [pin, setPin] = useState('');

  const handleSetPinDigit = (digit: string) => {
    pin.length < 4 && setPin(pin.concat(digit));
  };

  const handleRemovePinDigit = () => {
    setPin(pin.slice(0, -1));
  };

  const handleNavigate = () => navigation.navigate('SetUpPIN');

  const PINCirclesData = [
    pin.length >= 1,
    pin.length >= 2,
    pin.length >= 3,
    pin.length >= 4,
  ];

  return (
    <View style={styles.wrapper}>
      <Typography
        type="bold"
        color={colors.WHITE}
        size={18}
        style={styles.paragraph}>
        Let’s setup your PIN
      </Typography>
      <View style={styles.PINWrapper}>
        {PINCirclesData.map((active, index) => (
          <PINCircle active={active} key={index} isFirst={index === 0} />
        ))}
      </View>
      <Keyboard
        handleAddDigit={handleSetPinDigit}
        handleRemoveDigit={handleRemovePinDigit}
        handleContinue={handleNavigate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.VIOLET,
    alignItems: 'center',
  },
  paragraph: {
    marginTop: normalize(90, 'height'),
  },
  PINWrapper: {
    flexDirection: 'row',
    marginTop: normalize(92, 'height'),
  },
});

export default PINsetup;
