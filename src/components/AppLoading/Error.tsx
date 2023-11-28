import { Barlow, Box, Colors } from "@theme"
import { AppImage } from "../AppImage/AppImage"
import { DEVICE } from "@utils"
import { EMPTY_IMAGE, ERROR_IMAGE } from "@assets"
import { StyleSheet, Text } from "react-native"

export const Error = () => {
    return <Box alignItems='center'>
        <AppImage resizeMode='contain' style={styles.emptyImg} imgSource={ERROR_IMAGE} uri={''} />
        <Text style={styles.emptyText} children='An error occurred. Try again later.' />
    </Box>
}
const styles = StyleSheet.create({
    emptyText: {
        ...Barlow.Bold_500,
        fontSize: 16,
        color: Colors.black
    },
    emptyImg: {
        width: DEVICE.width / 2,
        aspectRatio: 1,
        tintColor: Colors.primary
    }
})