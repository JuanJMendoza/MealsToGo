import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen.js";

export default function App() {
  return (
    <SafeAreaProvider>
      <>
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />
      </>
    </SafeAreaProvider>
  );
}
