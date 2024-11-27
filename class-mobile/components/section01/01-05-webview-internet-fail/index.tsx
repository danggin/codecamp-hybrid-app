import { StatusBar, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const URL = "http://172.16.0.101:3000"; // 내 핸드폰에서 접속
// const URL = "http://10.0.2.2:3000"; // 안드로이드 에뮬레이터에서 접속
// const URL = "http://127.0.0.1:3000"; // IOS 시뮬레이터에서 접속

export default function WebviewInternetFailPage() {
  const [isError, setIsError] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={false} />

      {isError && (
        <View>
          <Text>웹뷰 접속에 실패했어요!</Text>
          <Text>인터넷 연결을 확인해 주세요.</Text>
        </View>
      )}

      {!isError && (
        <WebView
          source={{ uri: `${URL}/section01/01-05-webview-internet-fail` }}
          onError={() => {
            setIsError(true);
          }}
        />
      )}
    </SafeAreaView>
  );
}
