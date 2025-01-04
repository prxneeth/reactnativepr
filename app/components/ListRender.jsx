import React from "react";
import { Text, View } from "react-native";
import pokeList from "../../data.json";

const ListRender = () => {
  return (
    <View>
      {pokeList.map((poke) => {
        return (
          <View key={poke.id}>
            <Text>
              {poke.name} is {poke.type} type pokemon
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ListRender;
