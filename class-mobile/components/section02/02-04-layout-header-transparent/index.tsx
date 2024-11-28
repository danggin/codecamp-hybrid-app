import { StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function LayoutHeaderTransparentPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{ uri: `${URL}/section02/02-04-layout-header-transparent` }}
      />
    </SafeAreaView>
  );
}
