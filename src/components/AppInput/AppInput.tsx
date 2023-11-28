import { SpacingProps, TypographyProps } from '@shopify/restyle';
import { Box, Colors, Theme, useTheme } from '@theme';
import React, { RefObject, useMemo, useState } from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  ViewProps,
  ViewStyle
} from 'react-native';
import { styles } from './styles';

import { Control, Controller } from 'react-hook-form';

export interface appInputProps extends TextInputProps {
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  touched?: boolean;
  inputStyle?: ViewStyle;
  multiline?: boolean;
  required?: boolean;
  name?: string;
  control?: Control<any>;
  inputRef?:RefObject<any>;
}


export function AppInput(props: appInputProps & SpacingProps<Theme> &
  TypographyProps<Theme> & ViewProps) {
  const {
    label,
    value,
    onChangeText,
    placeholder,
    maxLength,
    keyboardType,
    error,
    touched,
    inputStyle,
    multiline,
    required = true,
    name,
    control,
    inputRef
  } = props;
  const [isFocus, setFocus] = useState(false);
  const { themeColor } = useTheme();
  const inputProps = useMemo(() => {
    return {
      multiline,
      maxLength,
      placeholder,
      style: [styles.inputStyle, { color: themeColor.textColor }, inputStyle],
      keyboardType,
      autoCapitalize: 'none',
      placeholderTextColor: themeColor.placeHolderColor,
      clearButtonMode: 'while-editing'
    }
  }, [props])
  return (
    <Box style={{ width: '100%' }} {...props}>
      {!!label && <Text style={styles.label}>{label}
        {required && <Text style={styles.required} children='*' />}
      </Text>}
      <Box>
        {control ? <Controller
          control={control}
          name={name || ''}
          render={({ field: { onChange, value } }) => (
            <TextInput
              ref={inputRef}
              value={value}
              onChangeText={onChange}
              {...inputProps as TextInputProps}
            />
          )}
        /> : <TextInput
        ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          {...inputProps as TextInputProps}
        />}

        {!!error && touched && <Text style={{ color: Colors.lightRed }}>{error}</Text>}
      </Box>
    </Box >
  );
}
