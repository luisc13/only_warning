import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Routes />
    </>
  );
}
