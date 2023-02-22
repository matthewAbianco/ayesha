import { View, Text } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BusinessPage from "../screens/BusinessPage"
import JobBoard from "../screens/JobBoard"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

export type TabParamList = {
  BusinessPage: undefined
  JobBoard: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="BusinessPage"
        options={{ headerShown: false }}
        component={BusinessPage}
      />
      <Tab.Screen
        name="JobBoard"
        options={{ headerShown: false }}
        component={JobBoard}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
