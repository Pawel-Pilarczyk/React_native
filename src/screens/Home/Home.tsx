import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import {colors} from '@constants';
import {useAppDispatch} from '@hooks';
import {monthsDropdownData} from '@constants';
import {logOut} from '@store/app/actions';
import {Button, PillDropdown} from '@components';
import {normalize} from '@utils';

export type THomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const date = new Date();

const Home = ({navigation}: THomeProps) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <PillDropdown
          handleChangeValue={(value: string) => []}
          data={monthsDropdownData}
          defaultValue={monthsDropdownData[date.getMonth()]}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  button: {paddingHorizontal: 20},
  header: {
    paddingHorizontal: normalize(16, 'width'),
    alignItems: 'center',
  },
});
