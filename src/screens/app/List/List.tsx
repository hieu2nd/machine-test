import { dots, plus } from '@assets';
import { AppHeader, AppInput, Empty, LargeList } from '@components';
import { City } from '@interfaces';
import { Barlow, Colors, Spacing, commonStyles } from '@theme';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useModule } from './useModule';
const PlaceItem = ({ item, index, onSelectOption, onNavigate, }: { item: City, index: number, onSelectOption: (item: any) => void, onNavigate: () => void }) => {
  return (
    <TouchableOpacity style={[styles.placeItem]} onPress={() => {
      !!onNavigate && onNavigate()
    }}>
      <View style={styles.headPlaceItem} >
        <Text style={styles.nameTxt} children={item.name} />
        <TouchableOpacity onPress={() => {
          onSelectOption(item)
        }} >
          <Image style={styles.ic3dots} source={dots} />
        </TouchableOpacity>
      </View>
      <View style={styles.footPlaceItem} >
        <Text style={styles.a2Txt} children={'Country: ' + item.country} />
      </View>
    </TouchableOpacity>
  )
}
const List = () => {
  const { navigateToDetailScreen, cityState, getFilteredCities, debounceSearch, navigateToAddScreen, onRefresh, ref } = useModule()
  return (
    <View style={styles.container}>
      <AppHeader title='City list' back={false} />
      <View style={styles.content}>
        <AppInput
          inputRef={ref}
          style={styles.searchInput}
          placeholder='Enter city, country name...'
          onChangeText={
            (value: string) => {
              debounceSearch(value)
            }}
        />
        <LargeList
          error={cityState.isError}
          onRefresh={onRefresh}
          isLoading={cityState.isLoading}
          renderItem={({ item, index }) => <PlaceItem onNavigate={() => {
            navigateToDetailScreen(item)
          }}
            onSelectOption={() => { }} item={item} index={index} />}
          data={getFilteredCities()}
          ListEmptyComponent={<Empty />}
        />
        <TouchableOpacity style={styles.addBtn} onPress={() => {
          navigateToAddScreen()
        }} >
          <Image style={styles.icPlus} source={plus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16
  },
  selectedStyle: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: 'rgba(255, 144, 81, 0.2)',
  },
  unSelectedStyle: {
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  ic3dots: {
    ...commonStyles.icon24,
  },
  a2Txt: {
    color: '#a2a2a2',
    ...Barlow.Medium_400,
    fontSize: 16
  },
  headPlaceItem: {
    ...commonStyles.rowSpaceBetween,
    marginBottom: 12,
  },
  footPlaceItem: {
    ...commonStyles.rowSpaceBetween,
  },
  placeItem: {
    backgroundColor: Colors.white,
    paddingLeft: Spacing.width16,
    paddingRight: Spacing.width18,
    paddingTop: Spacing.width16,
    paddingBottom: Spacing.width12,
    borderRadius: 24,
    ...commonStyles.shadow,
    marginBottom: 8,
    shadowRadius: 12,
    // borderWidth: 2,
  },
  nameTxt: {
    alignSelf: 'center',
    ...Barlow.Bold_600,
    fontSize: 16,
    color: Colors.black
  },
  addBtn: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 16
  },
  icPlus: {
    ...commonStyles.icon20,
    tintColor: 'white'
  },
  add: {
    ...Barlow.Medium_400,
    fontSize: 16,
    color: '#A2A2A2'
  },
  searchInput: {
    marginBottom: 16
  }
});

export { List };
