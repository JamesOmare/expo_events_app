import { Text, View, StyleSheet } from "react-native"
import { CameraView, useCameraPermissions } from 'expo-camera';

const QrCodeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>QrCodeScreen</Text>
      <CameraView
        barcodeScannerSettings={{
            barcodeTypes: ["qr"],
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
})

export default QrCodeScreen