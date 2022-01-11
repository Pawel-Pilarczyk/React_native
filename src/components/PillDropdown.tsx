import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {normalize} from '@utils';
import {colors} from '@constants';
import {arrowDown} from '@assets/icons';
import {Typography} from './Typography';

type MonthPickerProps = {
  data: string[] | number[];
  handleChangeValue: (value: string) => void;
  defaultValue?: string;
};

const PillDropdown = ({
  handleChangeValue,
  data = [],
  defaultValue,
}: MonthPickerProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || '');

  const toggleOpen = () => setOpen(value => !value);

  const handleSetValue = (value: string) => () => {
    setValue(value);
    handleChangeValue(value);
    setOpen(false);
  };
  return (
    <View>
      <TouchableOpacity
        style={[styles.wrapper, open && styles.wrapperActive]}
        onPress={toggleOpen}>
        <Image source={arrowDown} style={styles.arrowDown} />
        <Typography color={colors.BLACK}>{value}</Typography>
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdownWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.map(item => (
              <Typography
                color={colors.BLACK}
                onPress={handleSetValue(item.toString())}
                key={item}
                style={styles.dropdownText}>
                {item.toString()}
              </Typography>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default PillDropdown;

const styles = StyleSheet.create({
  wrapper: {
    height: normalize(40, 'height'),
    width: normalize(96, 'width'),
    borderRadius: normalize(18, 'width'),
    borderColor: colors.GREY,
    borderWidth: normalize(3, 'width'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  wrapperActive: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownWrapper: {
    width: normalize(96, 'width'),
    minHeight: normalize(40, 'height'),
    maxHeight: normalize(130, 'width'),
    borderColor: colors.GREY,
    borderWidth: normalize(3, 'width'),
    borderTopWidth: 0,
    borderBottomLeftRadius: normalize(18, 'width'),
    borderBottomRightRadius: normalize(18, 'width'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    position: 'absolute',
    top: normalize(40, 'height'),
    zIndex: 999,
  },
  dropdownText: {
    textAlign: 'center',
    paddingVertical: normalize(10, 'height'),
  },
  arrowDown: {width: normalize(20, 'height'), height: normalize(20, 'height')},
});
