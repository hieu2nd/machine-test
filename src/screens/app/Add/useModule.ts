import { GlobalService } from '@components';
import { City } from '@interfaces';
import { NavigationUtils, SCREEN_ROUTE } from '@navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCities, useAppDispatch, useAppSelector } from '@redux';
import { showAlertMessage } from '@utils';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
type CityFields = {
  name: string
  country: string
  population: string
  area: string
  description: string
}
export const useModule = () => {
  const cityState = useAppSelector(s => s.listSlice);
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CityFields>({
    defaultValues: {
      name: "",
      country: "",
      population: "",
      area: "",
      description: ""
    },
  })
  const createCity = async (data: CityFields) => {
    try {
      GlobalService.showLoading()
      const lastItem = cityState.cities[cityState.cities.length - 1]
      const newCity = {
        ...data,
        id: lastItem.id + 1,
        images:lastItem.images
      }
      const newCityArray = [newCity, ...cityState.cities]
      const jsonFormat = JSON.stringify(newCityArray)
      await AsyncStorage.setItem('mock_data', jsonFormat)
      dispatch(getCities())
      showAlertMessage('Added new city successfully')
      NavigationUtils.goBack()
    } catch (error) {

    } finally {
      GlobalService.hideLoading()
    }
  }
  const onSubmit = handleSubmit(createCity)
  return { control, onSubmit, errors };
};
