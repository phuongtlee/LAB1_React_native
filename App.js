import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "react-native-paper";

import Calculator from "./src/BT2/Calculator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HelloWorld from "./src/BT1/HelloWorld";
import CapturingTaps from "./src/BT1/CapturingTaps";
import CustomComponent from "./src/BT1/CustomComponent";
import StateProps from "./src/BT1/StateProp";
import Styling from "./src/BT1/Styling";
import ScrollableContent from "./src/BT1/ScrollableContent";
import BuildingForm from "./src/BT1/BuildingAForm";
import LongList from "./src/BT1/LongList";

export default function App() {
  // const [index, setIndex] = useState(0);
  // const [routes] = React.useState([
  //   {
  //     key: "ex1",
  //     title: "ex1",
  //     focusedIcon: "start",
  //     unfocusedIcon: "heart-outline",
  //   },
  //   {
  //     key: "ex2",
  //     title: "ex2",
  //     focusedIcon: "start",
  //     unfocusedIcon: "heart-outline",
  //   },
  // ]);
  // const renderScene = BottomNavigation.SceneMap({
  //   ex1: BT1,
  //   ex2: Calculator,
  // });

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HelloWorld_BT1" component={HelloWorld} />
        <Drawer.Screen name="BuildingForm_BT1" component={BuildingForm} />
        <Drawer.Screen name="CapturingTaps_BT1" component={CapturingTaps} />
        <Drawer.Screen name="CustomComponent_BT1" component={CustomComponent} />
        <Drawer.Screen name="StateProps_BT1" component={StateProps} />
        <Drawer.Screen name="Styling_BT1" component={Styling} />
        <Drawer.Screen name="ScrollableContent_BT1" component={ScrollableContent} />
        <Drawer.Screen name="LongList_BT1" component={LongList} />
        <Drawer.Screen name="Calculator" component={Calculator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
// <SafeAreaProvider>
//   <BottomNavigation navigationState={{index, routes}}
//   onIndexChange={setIndex}
//   renderScene={renderScene}/>
// </SafeAreaProvider>
// <View style={styles.container}>
//   {/* <BT1/> */}
//   {/* <Calculator/> */}
//   <StatusBar style="auto" />
// </View>
//   );
// }

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // alignContent:'center',
  //   // backgroundColor: '#fff',
  //   // justifyContent: 'center',
  //   // alignItems:'center'
  // },
});
