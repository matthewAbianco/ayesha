import { View, Text } from "react-native"
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import BusinessPage from "../screens/BusinessPage"
import JobBoard from "../screens/JobBoard"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import SearchBusiness from "../screens/SearchBusiness"
import { Icon } from "@rneui/themed"
import ManageJobs from "../screens/ManageJobs"

export type TabParamList = {
  BusinessPage: undefined
  JobBoard: undefined
  SearchBusiness: undefined
  ManageJobs: undefined
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
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "BusinessPage") {
            return (
              <Icon
                name="business"
                type="lonicons"
                color={focused ? "#FD6729" : "gray"}
              />
            )
          } else if (route.name === "JobBoard") {
            return (
              <Icon
                name="list-alt"
                type="fontawesome"
                color={focused ? "#EB6A7C" : "gray"}
              />
            )
          } else if (route.name === "SearchBusiness") {
            return (
              <Icon
                name="search1"
                type="antdesign"
                color={focused ? "#A96F9B" : "gray"}
              />
            )
          } else if (route.name === "ManageJobs") {
            return (
              <Icon
                name="calendar"
                type="entypo"
                color={focused ? "#B0C580" : "gray"}
              />
            )
          }
        },
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
      <Tab.Screen
        name="SearchBusiness"
        options={{ headerShown: false }}
        component={SearchBusiness}
      />
      <Tab.Screen
        name="ManageJobs"
        options={{ headerShown: false }}
        component={ManageJobs}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
