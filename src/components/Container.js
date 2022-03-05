import React from "react";
import { NativeBaseProvider } from "native-base";
import MainScreen from "../screens/MainScreen";
import { AppContextProvider } from "./AppContex";

export default function AppContainer() {
  return (
    <AppContextProvider>
      <NativeBaseProvider>
        <MainScreen />
      </NativeBaseProvider>
    </AppContextProvider>
  );
}
