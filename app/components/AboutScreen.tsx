import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Button, Text, View } from "react-native";

const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <Text>helo {name}</Text>
      <Button title="go to home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="update name"
        onPress={() =>
          navigation.setParams({
            name: "tasfiya",
          })
        }
      />
      <Button
        title="send some data back"
        onPress={() =>
          navigation.navigate("Home", { result: "data from about" })
        }
      />
    </View>
  );
};

export default AboutScreen;
