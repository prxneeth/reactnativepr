import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const ResponsiveDimension = () => {
  //   const [dimension, setDimension] = useState({
  //     window: Dimensions.get("window"),
  //   });

  //   useEffect(() => {
  //     const subscription = Dimensions.addEventListener("change", ({ window }) =>
  //       setDimension({ window })
  //     );
  //     return () => subscription?.remove();
  //   });

  //   const { window } = dimension;
  //   const windowWidth = window.width;
  //   const windowHeight = window.height;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  console.log(windowWidth, windowHeight);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: windowWidth > 500 ? 50 : 20 }}>few</Text>
    </View>
  );
};

export default ResponsiveDimension;

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: 200,
    // width: window > 500 ? "40%" : "90%",
    backgroundColor: "gray",
  },
  textt: {
    // fontSize: windowHeight > 400 ? 50 : 24,
  },
});
