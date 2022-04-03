import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import {subplatform} from "./config";
import LogoSrc from "./logo.png";
import Navigator from "./routes";
import {createStackNavigator} from "@react-navigation/stack";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

// export function App(): JSX.Element {
//   const platformValue = subplatform
//     ? `${Platform.OS} (${subplatform})`
//     : Platform.OS;
//   return (
//     <ApolloProvider client={client}>
//       <SafeAreaView style={styles.root}>
//         {/* On React Native for Web builds coming from CRA, TypeScript
//             complains about the image type, so we cast it as a workaround  */}
//         <Image style={styles.logo} source={LogoSrc as ImageSourcePropType} />
//         <Text style={styles.text}>Hello from React Native!</Text>
//         <View style={styles.platformRow}>
//           <Text style={styles.text}>Platform: </Text>
//           <View style={styles.platformBackground}>
//             <Text style={styles.platformValue}>{platformValue}</Text>
//           </View>
//         </View>
//         <AsyncStorageExample/>
//       </SafeAreaView>
//     </ApolloProvider>
//   );
// }

const StackNav = createStackNavigator();

export function App(): JSX.Element {
  const platformValue = subplatform
    ? `${Platform.OS} (${subplatform})`
    : Platform.OS;
  return (
    <View style={styles.root}>
      <ApolloProvider client={client}>
        <Navigator/>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: Platform.OS === 'web' ? '100vh' : '100%'
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  }
});
