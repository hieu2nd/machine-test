import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerAbsolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
  },
  bottomBarIcon: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  viewTabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  viewImageContainer: {
    width: '100%',
    height: 60,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgLeftRight: {
    height: 60,
    width: 30,
  },
  imgCenter: {
    height: 60,
    width: 118,
  },
  imgSide: {
    height: 60,
    flex: 1,
  },
  imgFillWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  icoGift: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 15,
  },
  ViewNotifi: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    top: 10,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNoti: { fontSize: 8, color: 'white' },
  txtTabName: {
    textAlign: 'center',
    lineHeight: 15,
    marginTop: 5,
  },

  contentContainerTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ico: {
    width: 24,
    height: 24,
  },
});
