import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface post {
  id: number;
  title: string;
  body: string;
}

const Getreq = () => {
  const [posts, setPosts] = useState<post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const fetchposts = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchposts();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={style.loadingContainer}>
        <ActivityIndicator size="large" color="pink" />
        <Text>LOADING</Text>
      </SafeAreaView>
    );
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchposts(20);
    setRefreshing(false);
  };

  const postData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });
    const newpost = await response.json();
    setPosts([newpost, ...posts]);
    setPostBody("");
    setPostTitle("");
  };

  const handlePost = () => {
    postData();
    // console.log(postBody, postTitle);
  };

  return (
    <>
      <View style={style.postContainer}>
        <Text>title : </Text>
        <TextInput
          style={style.postInput}
          placeholder="enter title"
          value={postTitle}
          onChangeText={setPostTitle}
        />
        <Text>body : </Text>
        <TextInput
          style={style.postInput}
          placeholder="enter body"
          value={postBody}
          onChangeText={setPostBody}
        />
        <Button title="post" onPress={handlePost} />
      </View>
      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          padding: 10,
          alignItems: "center",
        }}
      >
        {/* {posts.map((post) => {
        return (
          <View key={post.id}>
            <Text>{post.title}</Text>
          </View>
        );
      })} */}
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={style.card}>
                <Text style={style.titleText}>{item.title}</Text>
                <Text style={style.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>NO POSTS FOUND</Text>}
          ListHeaderComponent={<Text>POSTS LIST</Text>}
          ListFooterComponent={<Text>END OF LIST</Text>}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </>
  );
};

export default Getreq;

const style = StyleSheet.create({
  card: {
    backgroundColor: "lightblue",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#242424",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  postContainer: {
    backgroundColor: "lightgray",
    margin: 5,
    width: "50%",
    borderRadius: 5,
    padding: 5,
  },
  postInput: {
    borderColor: "black",
    borderWidth: 2,
    color: "black",
    borderRadius: 5,
  },
});
