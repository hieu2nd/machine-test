import { AppHeader, AppImage } from '@components';
import { Barlow, Colors } from '@theme';
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { useModule } from './useModule';
const PAGE_WIDTH = Dimensions.get("window").width;
const TextLine = ({ title, content, unit }: { title: string; content: string; unit?: string }) => {
  return <View style={styles.textLine}>
    <Text style={styles.leftText}>
      {title + ': '}
      <Text style={styles.rightText} children={content + ' ' + (unit || '')} />
    </Text>
  </View>
}
const Detail = (props: any) => {
  const { city } = useModule(props)
  return (
    <View style={styles.container}>
      <AppHeader title={city.name} back={true} />
      <View style={styles.content}>
        <FlatList
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          renderItem={() => <View />}
          data={[]}
          ListHeaderComponent={
            <>
              <SwiperFlatList
                disableGesture
                style={{ borderRadius: 16 }}
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                data={city.images}
                renderItem={({ item }) => (
                  <AppImage style={styles.img} uri={item} />
                )}
              />
              <View style={styles.detailView}>
                <TextLine title='City' content={city.name} />
                <TextLine title='Country' content={city.country} />
                <TextLine title='Population' content={city.population} />
                <TextLine title='Area' content={city.area} unit='km²' />
                <TextLine title='Description' content={city.description} />
              </View></>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: { marginBottom: 20 },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    flex: 1
  },
  img: {
    width: PAGE_WIDTH,
    aspectRatio: 0.68,
    resizeMode: 'contain',
  },
  textLine: {
    marginBottom: 8
  },
  leftText: {
    ...Barlow.Bold_500,
    fontSize: 16,
    color: Colors.black
  },
  rightText: {
    ...Barlow.Medium_400,
    fontSize: 14,
    alignSelf: 'center',
    flex: 1,
    color: Colors.black
  },
  unit: {},

  detailView: {
    marginTop: 16
  }
});

export { Detail };
