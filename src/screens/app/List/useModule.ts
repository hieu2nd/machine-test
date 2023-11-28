import {City} from '@interfaces';
import {NavigationUtils, SCREEN_ROUTE} from '@navigation';
import {getCities, useAppDispatch, useAppSelector} from '@redux';
import {LogApp} from '@utils';
import {debounce} from 'lodash';
import {useCallback, useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';

export const useModule = () => {
  const ref = useRef<TextInput>(null);
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const cityState = useAppSelector(s => s.listSlice);
  const navigateToDetailScreen = (city: City) => {
    NavigationUtils.navigate(SCREEN_ROUTE.DETAIL_SCREEN, {city});
  };
  const navigateToAddScreen = () => {
    NavigationUtils.navigate(SCREEN_ROUTE.ADD_SCREEN);
  };
  useEffect(() => {
    dispatch(getCities());
  }, []);
  const getFilteredCities = () => {
    if (query.trim() === '') {
      return cityState.cities;
    }
    const result = cityState.cities.filter(
      city =>
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        city.country.toLowerCase().includes(query.toLowerCase()),
    );
    return result;
  };
  const debounceSearch = useCallback(
    debounce((text: string) => setQuery(text), 700),
    [],
  );
  const onRefresh = () => {
    dispatch(getCities());
    setQuery('')
    if (ref.current) ref.current?.clear();
  };
  return {
    navigateToDetailScreen,
    cityState,
    getFilteredCities,
    debounceSearch,
    navigateToAddScreen,
    onRefresh,
    ref,
  };
};
