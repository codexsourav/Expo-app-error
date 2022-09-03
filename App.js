import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
const App = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>App</Text>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds
        />
      </SafeAreaView>
    </View>
  );
};

export default App;
