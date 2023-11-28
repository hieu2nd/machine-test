export interface typeOfColors {
  background: string;
  color_Tab_Unselected: string;
  color_Tab_Selected: string;
  icon: string;
  backgroundColorTab: string;
  color_Icon_Selected: string;
  textColor: string;
  whiteColor: string;
  colorDisable: string;
  primary: string;
  placeHolderColor: string;
  red: string;
}

type themeType = {
  dark: boolean;
  colors: typeOfColors;
}

export const darkTheme: themeType = {
  // default
  dark: true,
  colors: {
    background: '#111214',
    color_Tab_Unselected: '#5F5F5F',
    color_Tab_Selected: '#DCE0E5',
    icon: '#FFF',
    backgroundColorTab: '#262626',
    color_Icon_Selected: '#D20C00',
    textColor: '#fff',
    whiteColor: '#fff',
    colorDisable: '#c0c0c0',
    primary: '#4d4fdb',
    red: "#ff667d",
    placeHolderColor: '#B4B4B4'
  },
};

export const lightTheme: themeType = {
  dark: false,
  colors: {
    background: '#FFF4F3',
    color_Tab_Unselected: '#d4d4d4',
    color_Tab_Selected: '#ffffff',
    icon: '#FFF',
    backgroundColorTab: 'white',
    color_Icon_Selected: '#D20C00',
    textColor: '#000',
    whiteColor: '#fff',
    colorDisable: '#c0c0c0',
    primary: '#D20C00',
    red: "#ff667d",
    placeHolderColor: '#B4B4B4'
  },
};
