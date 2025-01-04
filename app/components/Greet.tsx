import { Text, View, StyleSheet } from "react-native";

interface nameProp {
  namee: string;
}

const Greet = ({ namee }: nameProp) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container, styles.bgcolor1]}>
        <Text style={styles.textt}>Hello, {namee}</Text>
      </View>
      <View style={[styles.container, styles.bgcolor2]}>
        <Text style={styles.textt}>light blue</Text>
      </View>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    width: 200,
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    shadowColor: "white",
    shadowRadius: 3,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
  },
  textt: {
    color: "green",
    textAlign: "center",
  },
  bgcolor1: {
    backgroundColor: "black",
  },
  bgcolor2: {
    backgroundColor: "lightblue",
  },
});
