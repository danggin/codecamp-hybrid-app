import { useApis } from "@/apis/section11/11-01-pull-to-refresh";
import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { FlatList } from "react-native";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function PullToRefreshPage() {
  const webviewRef = useRef<WebView>(null);
  const { onRequest, layout } = useApis(webviewRef);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }} // 안드로이드 + IOS 노치 배경색
      edges={layout.isNotchTranslucent ? [] : undefined} // 안드로이드 + IOS 노치 겹치기
    >
      <StatusBar
        style="dark" // 안드로이드 + IOS 노치 글자색
      />

      <WebView
        ref={webviewRef}
        source={{ uri: `${URL}/section11/11-01-pull-to-refresh` }}
        onMessage={(event) => {
          if (!event.nativeEvent.data) return;

          const request = JSON.parse(event.nativeEvent.data);
          onRequest(request.query, request.variables);
        }}
        // textZoom={100} 텍스트 크기 강제 고정 => 사용자 앱 내 브라우저 폰트크기 등 개별설정 막기
        // setBuiltInZoomControls={layout.isPinchZoom} // 핀치줌 허용 여부(단, 안드로이드에서만 작동하므로 => 브라우저 viewport로 변경하자!)
      />

      {/* 1. 웹뷰를 통채로 리프레시 하는 방법 */}
      {/* <WebView
        pullToRefreshEnabled
      /> */}

      {/* 2. <FlatList /> 활용하여 react-native 에서 제공하는 리프레시 하는 방법 */}
      {/* <FlatList
      data={[]}
        onRefresh={}
        refreshControl={}
      /> */}
      {/* 3. 웹뷰 내에서 목록만 리프레시 하는 방법 */}
      {/* class-web 에서 예시 작성 */}
    </SafeAreaView>
  );
}
