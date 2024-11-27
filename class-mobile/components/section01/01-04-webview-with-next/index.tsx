import { StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WebviewWithNextPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <WebView
        source={{
          // 1. 내 핸드폰
          uri: "http://172.16.0.101:3000/section01/01-04-webview-with-next",

          // 2. 안드로이드 에뮬레이터
          // 안드로이드 기계에서 자기 자신 => 10.0.2.2
          // uri: "http://10.0.2.2:3000/section01/01-04-webview-with-next",

          // 3. IOS 시뮬레이터
          // IOS 기계에서 자기 자신 => 127.0.0.1
          // uri: "http://127.0.0.1:3000/section01/01-04-webview-with-next",
        }}
      />
    </SafeAreaView>
  );
}
