import {BORDER_RADIUS_20, Colors, Spacing} from "@theme";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  inputStyle: {
    height: Spacing.height48,
    minHeight: 48,
    paddingHorizontal: Spacing.width15,
    borderRadius: BORDER_RADIUS_20, 
    backgroundColor:'white'
  },
  btnActive: {
    borderColor: `${Colors.blue}`
  },
  label:{
    marginBottom:8,
    color:Colors.black
  },
  required:{
    color:Colors.red
  }
});