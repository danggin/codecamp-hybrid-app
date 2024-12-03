"use client";

import { useEffect } from "react";
import { useDeviceSetting } from "@/commons/settings/05-02-device-setting-redirect/hook";

export default function ScheduleNotificationsPage() {
  const { fetchApp } = useDeviceSetting();

  useEffect(() => {
    fetchApp({ query: "requestDeviceNotificationsForPermissionSet" });
    fetchApp({
      query: "createDeviceNotificationsForWelcomeSet",
      variables: { name: "철수" },
    });
  }, []);
  return <div>처음 방문해 주셨군요. 회원가입을 환영합니다!</div>;
}