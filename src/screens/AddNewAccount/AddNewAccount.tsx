import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {banks} from '@assets/images/banks';
import {RootStackParamList} from 'src/navigation/types';
import {colors} from '@constants';
import {normalize} from '@utils';
import {Typography, DropDown, Input, Button, Plate} from '@components';

export type TLoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
type TItems = {label: string; value: string};

const accountTypes: TItems[] = [
  {
    label: 'Bank',
    value: 'bank',
  },
  {
    label: 'Wallet',
    value: 'wallet',
  },
];

export type TFormFields = {
  name: string;
  accountType: string;
  ammount: string;
};

const AddNewAccount = () => {
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm<TFormFields>({
    defaultValues: {
      ammount: '00.0',
    },
  });
  const [choosenBank, setChoosenBank] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);
  const [ammount, setAmmount] = useState('00.0');
  const bankPicked = watch('accountType') === 'bank';

  const handleAddAccount = handleSubmit(() => {
    if (choosenBank) {
      return;
    }
    return;
  });

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const confirmAmmount = useCallback(() => {
    const ammount = getValues('ammount');
    if (isNaN(+ammount) || !/^[0-9]+(\.[0-9]{1,2})?$/gm.test(ammount)) {
      return setError('ammount', {type: 'validate', message: 'Wrong Value'});
    }
    clearErrors('ammount');
    setAmmount(ammount);
    return handleCloseModal();
  }, [getValues('ammount')]);

  const handleSetChoosenBank = (bank: string) => () => setChoosenBank(bank);

  return (
    <View style={styles.wrapper}>
      <View style={styles.topSectionWrapper}>
        <Typography type="semiBold" size={18} color={colors.VIOLET_LIGHT}>
          Balance
        </Typography>
        <Typography type="semiBold" size={64} onPress={handleOpenModal}>
          ${ammount}
        </Typography>
        <Modal animationType="fade" visible={modalOpen} transparent={true}>
          <View style={styles.modalWrapper}>
            <View style={styles.innerModalWrapper}>
              <Typography color={colors.BLACK} size={24}>
                Ammount
              </Typography>
              <Controller
                control={control}
                render={({field: {onChange, value, onBlur}}) => (
                  <Input
                    placeholder="Ammount"
                    type="text"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="numeric"
                    value={value}
                    error={errors.ammount?.message}
                  />
                )}
                name="ammount"
              />
              <View style={styles.modalButtonsWrapper}>
                <Button
                  onPress={confirmAmmount}
                  type="primary"
                  textColor={colors.WHITE}>
                  Confirm
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.bottomSectionWrapper}>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field required'},
          }}
          render={({field: {onChange, value, onBlur}}) => (
            <Input
              placeholder="Name"
              type="text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'Field Required'},
          }}
          render={({field: {onChange, value}}) => (
            <DropDown
              items={accountTypes}
              onChange={onChange}
              value={value}
              placeholder="Account type"
              style={styles.dropdown}
              error={errors.accountType?.message}
            />
          )}
          name="accountType"
        />
        {bankPicked && (
          <>
            <Typography
              color={colors.BLACK}
              size={16}
              type="semiBold"
              style={styles.bankText}>
              Bank
            </Typography>
            <View style={styles.banksWrapper}>
              {banks.map(({icon, name}) => (
                <Plate
                  icon={icon}
                  key={name}
                  onPress={handleSetChoosenBank(name)}
                  active={choosenBank === name}
                />
              ))}
            </View>
          </>
        )}
        <Button
          onPress={handleAddAccount}
          type="primary"
          textColor={colors.WHITE}
          style={styles.button}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default AddNewAccount;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.VIOLET,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  topSectionWrapper: {
    paddingHorizontal: normalize(16, 'width'),
  },
  bottomSectionWrapper: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: normalize(16, 'width'),
    paddingTop: normalize(24, 'height'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dropdown: {
    marginBottom: normalize(24, 'height'),
  },
  button: {
    marginTop: normalize(40, 'height'),
    marginBottom: normalize(56, 'height'),
  },
  banksWrapper: {
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  bankText: {
    marginBottom: normalize(16, 'height'),
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  innerModalWrapper: {
    width: '80%',
    height: normalize(250, 'height'),
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: normalize(15, 'width'),
  },
  modalButtonsWrapper: {
    width: '100%',
  },
});
