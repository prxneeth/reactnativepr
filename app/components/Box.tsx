import { ReactNode } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

const Box = ({
  children,
  style,
}: {
  children: ReactNode;
  style: ViewStyle;
}) => {
  return (
    <View style={[styles.view, style]}>
      <Text>{children}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  view: {
    height: 100,
    width: 100,

    borderColor: "black",
    borderWidth: 1,
  },
});
