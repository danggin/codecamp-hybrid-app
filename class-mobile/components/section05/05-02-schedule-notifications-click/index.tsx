import { useApis } from "@/apis/section05/05-02-schedule-notifications-click";
import { useRef } from "react";
import { Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function ScheduleNotificationsClickPage() {
  const webviewRef = useRef<WebView>(null);
  const { onRequest } = useApis(webviewRef);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      <WebView
        ref={webviewRef}
        source={{ uri: `${URL}/section05/05-02-schedule-notifications-click` }}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;

          const request = JSON.parse(event.nativeEvent.data);
          onRequest(request.query, request.variables);
        }}
      />
    </SafeAreaView>
  );
}
