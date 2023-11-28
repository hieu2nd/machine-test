import { City } from "@interfaces";

export interface ICityStates {
  cities: City[];
  isLoading:boolean;
  isError:boolean;
}
