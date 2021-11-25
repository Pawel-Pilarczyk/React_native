import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {colors} from '@constants/index';
import {Button} from '@components/index';
import {useAppDispatch} from '@hooks/index';
import {logOut} from '../../store/app/app.slice';

export type THomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: THomeProps) => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <View style={styles.wrapper}>
      <Button
        onPress={handleLogOut}
        textColor={colors.BLACK}
        type="ghost"
        style={styles.button}>
        Log Out
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  button: {paddingHorizontal: 20},
});
