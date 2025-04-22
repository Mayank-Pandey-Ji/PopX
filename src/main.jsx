import "./index.css"; 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  UIKitSettingsBuilder,
  CometChatUIKit,
} from "@cometchat/chat-uikit-react";
import { setupLocalization } from "./CometChat/utils/utils";
import { BuilderSettingsProvider } from "./CometChat/context/BuilderSettingsContext";
import { BrowserRouter } from "react-router-dom"; // ✅ Add this import

export const COMETCHAT_CONSTANTS = {
  APP_ID: "2736421c2e330d7a", // ✅ Your App ID
  REGION: "in", // ✅ Your App Region
  AUTH_KEY: "0ba0df399a3af7fc3abc1538fcad25b43a9b783c", // ✅ Your Auth Key
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(uiKitSettings)?.then(() => {
  setupLocalization();

  const UID = "cometchat-uid-1"; // ✅ Replace with your actual UID
  const rootElement = document.getElementById("root");

  CometChatUIKit.getLoggedinUser().then((user) => {
    const renderApp = () => {
      if (rootElement) {
        ReactDOM.createRoot(rootElement).render(
          <BrowserRouter> {/* ✅ Wrap with BrowserRouter */}
            <BuilderSettingsProvider>
              <App />
            </BuilderSettingsProvider>
          </BrowserRouter>
        );
      }
    };

    if (!user) {
      CometChatUIKit.login(UID)
        .then((loggedUser) => {
          console.log("Login Successful:", loggedUser);
          renderApp();
        })
        .catch((error) => console.error("Login Failed:", error));
    } else {
      console.log("User already logged in:", user);
      renderApp();
    }
  });
});
