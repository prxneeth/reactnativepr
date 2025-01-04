import React, { useState } from "react";
import {
  Image,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "react-native";
import Greet from "../components/Greet";
import Box from "../components/Box";
import ResponsiveDimension from "../components/ResponsiveDimension";
import CustomButton from "../components/CustomButton.ios";
import PokemonCard from "../pokemonCards/PokemonCard";
import ListRender from "../components/ListRender";
import LoginForm from "../components/LoginForm";
import Getreq from "../components/net/getreq";
// source={require("../../assets/images/adaptive-icon.png")}
// import logoImg from "../../assets/images/adaptive-icon.png";

const charmanderData = {
  name: "Charmander",
  image: require("../../assets/images/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weakness: ["water", "rock"],
};

const squirtleData = {
  name: "Squirtle",
  image: require("../../assets/images/squirtle.png"),
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weakness: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require("../../assets/images/bulbasaur.png"),
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weakness: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("../../assets/images/pikachu.png"),
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weakness: ["Ground"],
};

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StatusBar backgroundColor="plum" barStyle="dark-content" />
      <ScrollView>
        <SafeAreaView>
          <View style={{ flex: 1, backgroundColor: "plum" }}>
            <View>
              <Getreq />
            </View>

            <View style={{ margin: 20 }}>
              <LoginForm />
            </View>

            <View>
              <ListRender />
            </View>

            <View
              style={{
                backgroundColor: "white",

                width: "auto",
                padding: 3,
              }}
            >
              <PokemonCard {...charmanderData} />
              <PokemonCard {...squirtleData} />
              <PokemonCard {...pikachuData} />
              <PokemonCard {...bulbasaurData} />
            </View>

            <CustomButton
              title={"title"}
              onpress={() => console.log("first")}
            />
            <Text style={styles.helloText}>HELLOO</Text>

            <View style={{ width: "auto", backgroundColor: "white" }}>
              {" "}
              <ResponsiveDimension></ResponsiveDimension>
            </View>

            <View style={styles.boxView}>
              <Box
                style={{
                  backgroundColor: "blue",
                  position: "absolute",
                  top: 50,
                  left: 50,
                }}
              >
                blox
              </Box>
              <Box style={{ backgroundColor: "green" }}>blox</Box>
              <Box style={{ backgroundColor: "yellow" }}>blox</Box>
            </View>

            <Greet namee="neame" />
            {/* <ActivityIndicator
          size="large"
          color="midnightblue"
          animating={false}
        /> */}
            <Text style={{ color: "white" }}>Helloworld</Text>
            {/* <Image
        source={require("../../assets/images/adaptive-icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

            <Button title="alert" onPress={() => Alert.alert("invalid")} />
            <Button
              title="alert2"
              onPress={() => Alert.alert("invalid", "not found")}
            />
            <Button
              title="alert3"
              onPress={() =>
                Alert.alert("invalid", "not found", [
                  {
                    text: "cancel",
                    onPress: () => console.log("first"),
                  },
                  {
                    text: "yes",
                    onPress: () => console.log("third"),
                  },
                  {
                    text: "no",
                    onPress: () => console.log("no"),
                  },
                ])
              }
            />
            <Image
              source={require("../../assets/images/adaptive-icon.png")}
              // source={{ uri: logoImg }}
              style={{ height: 300, width: 300 }}
            />
            <Pressable
              onPressIn={() => console.log("pressin")}
              onLongPress={() => console.log("press")}
              onPressOut={() => console.log("pressOut")}
            >
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                similique expedita repudiandae corporis et nostrum deleniti
                voluptatum suscipit quae tenetur ad omnis, mollitia beatae
                pariatur
              </Text>
            </Pressable>

            <Modal
              visible={isOpen}
              style={{ width: 400, height: 400 }}
              onRequestClose={() => setIsOpen(false)}
              animationType="slide"
              presentationStyle="formSheet"
            >
              <View>
                <Pressable onPress={() => setIsOpen(!isOpen)}>
                  <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur laborum eaque aut minima eum quam voluptatem eos
                    asperiores architecto laudantium expedita quisquam fuga,
                    eligendi ex minus maiores atque quaerat sit? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Maxime aliquid
                    eos ipsam? Necessitatibus doloremque beatae libero fugiat,
                    aliquam dolore laboriosam eaque impedit possimus non
                    consequatur consectetur ipsam ipsa. Numquam, laboriosam?{" "}
                  </Text>
                </Pressable>
              </View>
            </Modal>

            <Button
              title="button"
              onPress={() => setIsOpen(!isOpen)}
              color="midnightblue"
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  helloText: {
    ...Platform.select({
      ios: {
        color: "green",
        fontsize: 23,
      },
      android: {
        color: "yellow",
        fontsize: 44,
      },
      macos: {
        color: "green",
      },
      web: {
        color: "blue",
      },
    }),
  },
  boxView: {
    height: 300,
    width: 350,
    backgroundColor: "white",
    padding: 4,
    gap: 4,
    margin: 5,
    flexDirection: "row",
  },
});
