import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors} from '@constants';
import {normalize} from '@utils';
import {arrowRight} from '@assets/images';
import {Typography, PINCircle, Keyboard} from '@components';

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

  const handleNavigateBack = () => navigation.goBack();

  const PINCirclesData = [
    pin.length >= 1,
    pin.length >= 2,
    pin.length >= 3,
    pin.length >= 4,
  ];

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.arrowBack} onPress={handleNavigateBack}>
        <Image source={arrowRight} />
      </TouchableOpacity>
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
  arrowBack: {
    position: 'absolute',
    left: normalize(20, 'width'),
    top: normalize(20, 'width'),
    transform: [{rotateY: '180deg'}, {scale: 0.6}],
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.VIOLET,
    alignItems: 'center',
    position: 'relative',
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
