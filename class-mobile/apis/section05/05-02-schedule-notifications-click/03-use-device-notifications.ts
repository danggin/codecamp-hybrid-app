import * as Notifications from "expo-notifications";
import { Redirect } from "expo-router";
import { useEffect } from "react";

// 1. 알림 수신 대기 (IOS 필수)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useDeviceNotifications = (onResponse) => {
  // 2. 알림 스케줄 생성
  const createDeviceNotificationsForWelcomeSet = (variables) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `${variables.name}님 회원가입을 축하합니다!`,
        body: "앞으로의 여정을 함께 하게되어 반갑습니다. 행복한 하루 보내세요!",
        data: {
          page: "/section05/05-02-schedule-notifications-click-moved",
        },
      },
      trigger: null,
    });

    onResponse({
      createDeviceNotificationsForWelcomeSet: {
        message: "알림 등록이 완료되었습니다.",
      },
    });
  };

  // 3. 알림 권한 요청
  const requestDeviceNotificationsForPermissionSet = async () => {
    await Notifications.requestPermissionsAsync();

    onResponse({
      requestDeviceNotificationsForPermissionSet: {
        message: "요청이 완료되었습니다.",
      },
    });
  };

  // 05-02-schedulr-notifications-click => 알림 클릭 대기
  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener((response) => {
      const notificationData = response.notification.request.content.data;

      // 앱에 응답 보내기
      onResponse({ redirect: notificationData.page });
    });
  }, []);

  return {
    createDeviceNotificationsForWelcomeSet,
    requestDeviceNotificationsForPermissionSet,
  };
};
