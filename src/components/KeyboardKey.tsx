import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {normalize} from '@utils/index';
import {Typography} from '@components/index';
import {arrowRight} from '@assets/images/index';

type TKeyboardKeyProps = {
  char: string;
  handlePress?: (char: string) => void;
};

export const KeyboardKey = ({char, handlePress}: TKeyboardKeyProps) => {
  const handleKeyPress = () => {
    handlePress && handlePress(char);
  };
  return (
    <TouchableOpacity onPress={handleKeyPress} style={styles.key}>
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
    flex: 1,
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
