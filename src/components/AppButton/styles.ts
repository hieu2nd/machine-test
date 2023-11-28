import { Barlow, Colors, Spacing } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    // minHeight: Spacing.height56,
    flexDirection: 'row',
    borderRadius: Spacing.width84,
    backgroundColor: Colors.blue,
  },
  label: {
    textAlign: 'center',
    ...Barlow.Bold_700,
    color: Colors.white,
    flex: 1,
  },
  icon: {
    marginLeft: Spacing.width20,
  },
  txtWrap: {flex: 0, paddingHorizontal: Spacing.width15},
});
