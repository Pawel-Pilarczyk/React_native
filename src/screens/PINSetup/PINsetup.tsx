import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors, SCREEN_WIDTH} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography, PINCircle} from '@components/index';
import {arrowRight} from '@assets/images/index';

export type TPINsetupProps = NativeStackScreenProps<
  RootStackParamList,
  'SetUpPIN'
>;

const PINsetup = ({navigation}: TPINsetupProps) => {
  const [PIN, setPIN] = useState('');

  const handleSettingPINDigit = (digit: string) => () => {
    PIN.length < 4 && setPIN(PIN.concat(digit));
  };

  const handleRemovePINDigit = () => {
    setPIN(PIN.slice(0, -1));
  };
  const buttonSetUp = (char: string) => (
    <Typography
      size={48}
      type="medium"
      onPress={handleSettingPINDigit(char)}
      style={styles.button}
      key={char}>
      {char}
    </Typography>
  );

  const rows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
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
        <PINCircle active={PIN.length >= 1} />
        <PINCircle active={PIN.length >= 2} />
        <PINCircle active={PIN.length >= 3} />
        <PINCircle active={PIN.length >= 4} />
      </View>
      <View style={styles.buttonsSectionWrapper}>
        {rows.map((row, id) => (
          <View style={styles.buttonsWrapper} key={id}>
            {row.map(item => buttonSetUp(item))}
          </View>
        ))}
        <View style={styles.buttonsWrapper}>
          <Typography
            size={48}
            type="medium"
            style={styles.button}
            onPress={handleRemovePINDigit}>
            X
          </Typography>
          {buttonSetUp('0')}
          <View style={styles.continueButton}>
            <Image source={arrowRight} style={styles.arrow} />
          </View>
        </View>
      </View>
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
    justifyContent: 'space-between',
    marginTop: normalize(92, 'height'),
    width: normalize(174, 'width'),
  },
  buttonsSectionWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  buttonsWrapper: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    height: normalize(90, 'height'),
  },
  button: {
    width: SCREEN_WIDTH / 3,
    textAlign: 'center',
  },
  continueButton: {
    width: SCREEN_WIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: normalize(44, 'width'),
    height: normalize(28, 'height'),
  },
});

export default PINsetup;
