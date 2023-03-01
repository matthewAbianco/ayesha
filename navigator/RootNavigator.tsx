import React from "react"
import Login from "../screens/Login"
import SignUp from "../screens/SignUp"
import ResetPassword from "../screens/ResetPassword"
import ToDo from "../screens/ToDo"
import Services from "../screens/SearchBusiness"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import ManageAccount from "../screens/ManageAccount"
import BusinessPage from "../screens/BusinessPage"
import TabNavigator from "./TabNavigator"
import JobBoard from "../screens/JobBoard"
import BusinessEditModal from "../screens/BusinessEditModal"

export type StackParamList = {
  Main: undefined
  Login: undefined
  SignUp: undefined
  ResetPassword: undefined
  ToDo: undefined
  Services: undefined
  ManageAccount: undefined
  Crud: undefined
  BusinessPage: undefined
  JobBoard: undefined
  BusinessEditModal: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusinessPage"
          component={BusinessPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobBoard"
          component={JobBoard}
          options={{ headerShown: false }}
        />
        <Stack.Group>
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen
            name="BusinessEditModal"
            component={BusinessEditModal}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
