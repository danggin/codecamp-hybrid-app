"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRoutingSettingBackAndExit } from "../08-04-routing-setting-back-and-exit/hook";

export const APIS = {
  // fetchDeviceSystemForAppSet: null => API 요청시에 null 대신에 resolve가 들어옴
  // ...
  // ...
  // ...
  // fetchDeviceSystemForAppSet: resolve111,
  // fetchDeviceSystemForPlatformSet: resolve222,
  // fetchDeviceLocationForLatLngSet: resolve333  => 각 요청한 API별로 resolve가 다름
};

export default function DeviceSettingBackAndExit({ children }) {
  const router = useRouter();
  const { onRoutingBack } = useRoutingSettingBackAndExit();

  useEffect(() => {
    const messageHandler = (message: any) => {
      if (!message.data) return;
      const response = JSON.parse(message.data);
      if (response.redirect) return router.push(response.redirect);
      if (response.back) return onRoutingBack();

      const query = Object.keys(response)[0]; // fetchDeviceLocationForLatLngSet
      const resolve = APIS[query]; // resolve333
      resolve({ data: response });
      delete APIS[query];
    };

    document.addEventListener("message", messageHandler); // 1. 안드로이드에서 수신 대기

    window.addEventListener("message", messageHandler); // 2. IOS에서 수신 대기

    return () => {
      document.removeEventListener("message", messageHandler);
      window.removeEventListener("message", messageHandler);
    };
  }, [onRoutingBack]);

  return <>{children}</>;
}
