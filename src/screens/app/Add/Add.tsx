import { AppButton, AppHeader, AppInput } from '@components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useModule } from './useModule';

const Add = () => {
  const { control,onSubmit } = useModule()
  return (
    <View style={styles.container}>
      <AppHeader title='City list' back />
      <View style={styles.content}>
        <AppInput name='name' control={control} placeholder='Enter city' style={styles.input} label='City' />
        <AppInput name='country' control={control} placeholder='Enter country' style={styles.input} label='Country' />
        <AppInput name='population' control={control} placeholder='Enter population' style={styles.input} label='Population' keyboardType='numeric' />
        <AppInput name='area' control={control} placeholder='Enter area' style={styles.input} label='Area' keyboardType='numeric' />
        <AppInput name='description' control={control} inputStyle={styles.multiline} placeholder='Enter description' style={[styles.input]} label='Description' multiline />
        <AppButton style={styles.submitBtn} label='Submit' onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  input: {
    marginBottom: 8
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 8
  },
  submitBtn: {
    marginTop: 16
  }
});

export { Add };
