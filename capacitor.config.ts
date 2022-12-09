import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.stng',
  appName: 'СТНГ',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'ionic'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },

};

export default config;
