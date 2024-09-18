import React from "react";
import { Text, View, SafeAreaView, Button, } from "react-native";
import AppPro from "./AppPro.tsx";

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Let's learn React-Native</Text>
        <Text>First Project</Text>
        <Button title="Start" onPress={() => {}} />
        <AppPro/>
      </View>
    </SafeAreaView>
  )
}

export default App;