import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Button,
  Platform,
} from "react-native"
import InlineTextButton from "../components/InlineTextButton"
import { auth } from "../firebase"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import A from "../styles/A"

const Login = ({ navigation }) => {
  const background = require("../assets/background.jpg")

  if (auth.currentUser) {
    navigation.navigate("TabNavigator")
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("TabNavigator")
      }
    })
  }

  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("TabNavigator", { user: userCredential.user })
        })
        .catch((error) => {
          setErrorMessage(error.message)
        })
    } else {
      setErrorMessage("Incorrect email and password combination")
    }
  }

  return (
    <ImageBackground style={A.container} source={background}>
      <KeyboardAvoidingView
        style={A.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={80}
      >
        <Text style={[A.lightText, A.header]}>Login</Text>
        <Text style={A.errorText}>{errorMessage}</Text>
        <TextInput
          style={[A.textInput]}
          placeholder="Email"
          placeholderTextColor="#ECECEC"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={A.textInput}
          placeholder="Password"
          placeholderTextColor="#ECECEC"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={[A.rowContainer, A.topMargin]}>
          <Text style={A.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
        <View style={[A.rowContainer, A.bottomMargin]}>
          <Text>Forgotten your password? </Text>
          <InlineTextButton
            text="Reset"
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>
        <Button title="Login" onPress={login} color="#f7b267" />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </ImageBackground>
  )
}

export default Login
