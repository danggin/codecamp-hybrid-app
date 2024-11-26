import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <Stack>
      {/* 모바일 메인 페이지에서 웹뷰 만들고 나머리 페이지들은 웹에서 처리하기 */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* 모바일에서 다른 페이지를 만들어야한다면? 아래에 추가하기 */}
      {/* <Stack.Screen name="profile" /> */}
    </Stack>
  );
}
