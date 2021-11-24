import React, {useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {colors} from '@constants/index';
import {normalize} from '@utils/index';
import {Typography, ErrorMessage} from '@components/index';

type TItems = {label: string; value: string};

type TDropDownProps = {
  items: TItems[];
  value: string;
  placeholder?: string;
  onChange: (payload: string) => void;
  error?: string;
  style?: ViewStyle;
};

const DropDown = ({
  items,
  value,
  placeholder,
  onChange,
  error,
  style,
}: TDropDownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={style}>
      {placeholder && (
        <Typography color={colors.BLACK} type={'bold'}>
          {placeholder}
        </Typography>
      )}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={value => onChange(value())}
        placeholder={placeholder}
        style={styles.dropdown}
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
});
