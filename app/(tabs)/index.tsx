import React from "react";
import AppProvider from "../../components/AppContext.js";
import Menus from "../../components/menus.js";
export default function App() {
  return (
  <AppProvider>
    <Menus />
  </AppProvider>
  );
}
