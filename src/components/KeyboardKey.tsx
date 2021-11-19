import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {SCREEN_WIDTH} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography} from '@components/index';
import {arrowRight} from '@assets/images/index';

type TKeyboardKeyProps = {
  char: string;
  handlePress?: () => void;
};

export const KeyboardKey = ({char, handlePress}: TKeyboardKeyProps) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.key}>
      {char === 'continue' ? (
        <Image source={arrowRight} style={styles.arrow} />
      ) : (
        <Typography size={48} type="medium" style={styles.keyText}>
          {char}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  key: {
    width: SCREEN_WIDTH / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    textAlign: 'center',
  },
  arrow: {
    width: normalize(44, 'width'),
    aspectRatio: 1.57,
  },
});
