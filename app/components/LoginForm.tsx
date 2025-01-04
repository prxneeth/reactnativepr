import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    let errors: { [key: string]: string } = {};

    if (!username) errors.username = "username is required";
    if (!password) errors.password = "username is password";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/adaptive-icon.png")}
          style={styles.image}
        />
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Password</Text>
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    padding: 10,
  },
  form: {
    backgroundColor: "White",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 1,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
