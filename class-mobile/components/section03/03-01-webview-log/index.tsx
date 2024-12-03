import { Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function WebviewLogPage() {
  const onPressButton = () => {
    console.log("이것은 모바일 로그입니다!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <WebView source={{ uri: `${URL}/section03/03-01-webview-log` }} />

      <Button onPress={onPressButton} title="모바일로그를 확인하세요!" />
    </SafeAreaView>
  );
}
