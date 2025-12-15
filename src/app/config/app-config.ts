import { Capacitor } from '@capacitor/core';

export type PlatformName = 'android' | 'ios' | 'web';

export interface AppConfig {
  platform: PlatformName;
  apiBaseUrl: string;
  enableDebugLogs: boolean;
  features: {
    camera: boolean;
    geolocation: boolean;
  };
}

export function getPlatform(): PlatformName {
  const p = Capacitor.getPlatform();
  if (p === 'android' || p === 'ios') return p;
  return 'web';
}

export function getAppConfig(): AppConfig {
  const platform = getPlatform();

  const common: Omit<AppConfig, 'platform'> = {
    apiBaseUrl: 'http://localhost:3000', 
    enableDebugLogs: true,
    features: {
      camera: true,
      geolocation: true,
    },
  };

  if (platform === 'android') {
    return {
      platform,
      ...common,
      enableDebugLogs: false,
    };
  }

  if (platform === 'ios') {
    return {
      platform,
      ...common,
    };
  }

  // web
  return {
    platform,
    ...common,
    apiBaseUrl: 'http://localhost:3000',
    features: {
      camera: false,       // ejemplo: deshabilitar en web
      geolocation: true,
    },
  };
}
