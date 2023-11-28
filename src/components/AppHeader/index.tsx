import React from 'react';
import { BackIcon } from '@assets';
import { goBack } from '@navigation';
import { Barlow, Colors, Spacing, useTheme } from '@theme';
import { Keyboard, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { LogApp } from '@utils';

export interface IAppHeader {
  title?: string;
  styleContainer?: StyleProp<ViewStyle>
  styleTitle?: StyleProp<TextStyle>;
  back?: boolean;
  backIconColor?: string;
  IconLeft?: any;
  IconRight?: any;
  styleIconLeft?: StyleProp<ViewStyle>
  iconLeftFillColor?: string;
  onPressBtnLeft?: () => void;
  onPressRight?: () => void;
  styleTextRight?: StyleProp<TextStyle>;
  styleBtnRight?: StyleProp<ViewStyle>
  colorBackIcon?: string;
  titleRight?: string;
}

export const AppHeader = (props: IAppHeader) => {
  const {
    title,
    styleContainer,
    styleTitle,
    back = true,
    styleIconLeft,
    IconLeft,
    iconLeftFillColor,
    onPressBtnLeft,
    onPressRight,
    IconRight,
    styleTextRight,
    styleBtnRight,
    colorBackIcon,
    titleRight,
  } = props;

  const { themeColor } = useTheme();

  const onGoBack = () => {
    goBack();
  };

  const renderLeft = () => {
    const onPressLeft = onPressBtnLeft || onGoBack;
    return (
      <View style={styles.left}>
        <TouchableOpacity
          onPress={(back || IconLeft) && onPressLeft}
          hitSlop={styles.hitbtn}
          style={styles.btnLeft}
        >
          {back && <BackIcon stroke={colorBackIcon || themeColor.textColor} />}
          {IconLeft && (
            <IconLeft style={styleIconLeft} iconFillColor={iconLeftFillColor} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.right}>
        {IconRight && (
          <>
            <TouchableOpacity
              style={[styles.btnRight, styleBtnRight]}
              onPress={onPressRight}
              hitSlop={styles.hitbtn}
            >
              <Text style={styleTextRight}>{titleRight}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };
  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPressIn={() => Keyboard.dismiss()}
      activeOpacity={1}
    >
      {renderLeft()}
      {title && <Text style={[styles.title, styleTitle]}>{title}</Text>}
      {renderRight()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    minHeight: Spacing.width35,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.width16,
    paddingBottom: Spacing.height20,
    height: 90,
    backgroundColor: Colors.primary
  },
  title: {
    ...Barlow.Bold_500,
    fontSize:18,
    alignItems: 'center',
    fontWeight: '500',
    color: Colors.white
  },
  left: {
    width: Spacing.width20,
  },
  right: {
    width: Spacing.width20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
  },
  btnRight: {
    paddingLeft: Spacing.height10,
  },

  btnLeft: {
    paddingRight: Spacing.height10,
  },
  hitbtn: { top: 25, bottom: 25, left: 25, right: 25 }
});
