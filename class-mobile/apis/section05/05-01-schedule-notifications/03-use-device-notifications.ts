import * as Notifications from "expo-notifications";

// 1. 알림 수신 대기 (IOS 필수)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const useDeviceNotifications = () => {
  // 2. 알림 스케줄 생성
  const createDeviceNotificationsForWelcomeSet = (variables) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: `${variables.name}님 회원가입을 축하합니다!`,
        body: "앞으로의 여정을 함께 하게되어 반갑습니다. 행복한 하루 보내세요!",
      },
      trigger: null,
    });

    return {
      createDeviceNotificationsForWelcomeSet: {
        message: "알림 등록이 완료되었습니다.",
      },
    };
  };

  // 3. 알림 권한 요청
  const requestDeviceNotificationsForPermissionSet = async () => {
    await Notifications.requestPermissionsAsync();

    return {
      requestDeviceNotificationsForPermissionSet: {
        message: "요청이 완료되었습니다.",
      },
    };
  };

  return {
    createDeviceNotificationsForWelcomeSet,
    requestDeviceNotificationsForPermissionSet,
  };
};
