import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {colors} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography, ErrorMessage} from '@components/index';

type TSize = 'small' | 'medium' | 'large' | 'extraLarge';
type TItems = {label: string; value: string};

type TDropDownProps = {
  size: TSize;
  items: TItems[];
  value: string;
  placeholder?: string;
  onChange: (payload: string) => void;
  error?: string;
};

const DropDown = ({
  items,
  size,
  value,
  placeholder,
  onChange,
  error,
}: TDropDownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {placeholder && (
        <Typography color={colors.BLACK} type={'bold'}>
          {placeholder}
        </Typography>
      )}
      <DropDownPicker
        dropDownContainerStyle={styles[size]}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={value => onChange(value())}
        placeholder={placeholder}
        style={[styles.dropdown, styles[size]]}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: normalize(56, 'height'),
    backgroundColor: colors.WHITE,
  },
  small: {
    width: normalize(108, 'width'),
  },
  medium: {
    width: normalize(153, 'width'),
  },
  large: {
    width: normalize(227, 'width'),
  },
  extraLarge: {
    width: normalize(343, 'width'),
  },
});
