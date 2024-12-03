import { useRef } from "react";
import { Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function PostMessageAppToWebPage() {
  const webviewRef = useRef<WebView>(null);

  const onPressButton = () => {
    webviewRef.current?.postMessage("banana");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <WebView
        ref={webviewRef}
        source={{
          uri: `${URL}/section03/03-03-post-message-app-to-web`,
        }}
      />

      <Button onPress={onPressButton} title="Web아! 데이터 줄게!" />
    </SafeAreaView>
  );
}
