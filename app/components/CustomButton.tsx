import React from "react";
import { Button, View } from "react-native";

const CustomButton = ({
  title,
  onpress,
}: {
  title: string;
  onpress: () => void;
}) => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "gray" }}>
      <Button title={title} onPress={onpress} />
    </View>
  );
};

export default CustomButton;
