import React from "react";
import { Button, View } from "react-native";

interface cusButtonProp {
  title: string;
  onpress: () => void;
}

const CustomButton: React.FC<cusButtonProp> = ({ title, onpress }) => {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "brown" }}>
      <Button title={title} onPress={onpress} />
    </View>
  );
};

export default CustomButton;
