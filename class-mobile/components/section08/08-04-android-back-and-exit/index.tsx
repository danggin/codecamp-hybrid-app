import { useRef } from "react";
import { useApis } from "@/apis/section08/08-04-android-back-and-exit";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function AndroidBackAndExitPage() {
  const webviewRef = useRef<WebView>(null);
  const { onRequest, layout } = useApis(webviewRef);

  return (
    <>
      <SafeAreaView
        edges={layout.isNotchTranslucent ? [] : undefined}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <StatusBar
          style="dark" // 노치에 태그들 겹치기
        />

        <WebView
          ref={webviewRef}
          source={{
            uri: `${URL}/section08/08-04-android-back-and-exit`,
          }}
          onMessage={(event) => {
            if (!event.nativeEvent.data) return;

            const request = JSON.parse(event.nativeEvent.data);
            onRequest(request.query, request.variables);
          }}
          // textZoom-{100} // => 텍스트 크기 강제 고정 => 사용자 앱 내 브라우저 폰트 크기 등 개별 설정 막기
          setBuiltInZoomControls={layout.isPinchZoom}
        />
      </SafeAreaView>
    </>
  );
}
