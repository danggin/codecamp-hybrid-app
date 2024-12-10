import { apis } from ".";

declare const window: Window & {
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
};

export const useDeviceSettingViewTransition = () => {
  const fetchApp = async ({ query, variables = {} }) => {
    const result = await new Promise((resolve) => {
      apis[query] = resolve;
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ query, variables })
      );
    });
    return result;
  };

  return {
    fetchApp,
  };
};
