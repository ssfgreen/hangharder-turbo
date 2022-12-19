import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/trpc";

import { HomeScreen } from "./screens/home";
import { SignInScreen } from "./screens/signin";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";

// Find this in your Dashboard.
const clerk_frontend_api = "clerk.legible.fox-65.lcl.dev";

export const App = () => {
  return (
    <ClerkProvider frontendApi={clerk_frontend_api} tokenCache={tokenCache}>
      <SignedIn>
        <TRPCProvider>
          <SafeAreaProvider>
            <HomeScreen />
            <StatusBar />
          </SafeAreaProvider>
        </TRPCProvider>
      </SignedIn>
      <SignedOut>
        <SignInScreen />
      </SignedOut>
    </ClerkProvider>
  );
};
