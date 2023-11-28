import { StyleSheet } from 'react-native';
import { Spacing } from './appSpacing';
import { Colors } from './staticColors';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon28: {
    width: Spacing.width28,
    height: Spacing.width28,
    alignSelf: 'center',
  },
  icon24: {
    width: Spacing.width24,
    height: Spacing.width24,
    alignSelf: 'center',
  },
  icon20: {
    width: Spacing.width20,
    height: Spacing.width20,
    alignSelf: 'center',
  },
  icon12: {
    width: Spacing.width12,
    height: Spacing.width12,
    alignSelf: 'center',
  },
  icon14: {
    width: Spacing.width14,
    height: Spacing.width14,
    alignSelf: 'center',
  },
  icon16: {
    width: Spacing.width16,
    height: Spacing.width16,
    alignSelf: 'center',
  },
  icon18: {
    width: Spacing.width18,
    height: Spacing.width18,
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#292929',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
