import { useDeviceSystem } from "./01-use-device-system";
import { useDeviceLocation } from "./02-use-device-location";
import { useDeviceNotifications } from "./03-use-device-notifications";

export const useApis = (webviewRef) => {
  let APIS = {};

  const onResponse = (result) => {
    webviewRef.current?.postMessage(JSON.stringify(result));
  };

  const onRequest = (query, variables) => {
    APIS[query](variables);
  };

  // APIS = {
  //     ...useDeviceSystem(onResponse),
  //     ...useDeviceLocation(onResponse),
  //     ...useDeviceNotifications(onResponse)
  // }

  [
    useDeviceSystem, //
    useDeviceLocation,
    useDeviceNotifications,
  ].forEach((el) => {
    APIS = { ...APIS, ...el(onResponse) };
  });

  return {
    onResponse,
    onRequest,
  };
};
