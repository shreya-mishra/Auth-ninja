import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserInput from "./UserInput";
import SubmitButton from "./SubmitButton";

const AuthForm = () => {
  return (
    <View>
      <UserInput />
      <UserInput />
      <SubmitButton />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
