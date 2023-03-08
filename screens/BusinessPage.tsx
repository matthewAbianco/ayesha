import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native"
import InlineTextButton from '../components/InlineTextButton';
import React from "react"
import Reviews from "./Reviews"
import A from "../styles/A"

const BusinessPage = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={A.container}>
        <ScrollView>
          {/* Cover Photo Div */}
          <View>
            <InlineTextButton text="Back to login?" onPress={() => navigation.popToTop()} />
            <View>{/* Cover Photo */}</View>
            <View style={A.border}>
              <Text>Cover Photo</Text>
            </View>
            <View style={A.border}>
              {/* User/Business Name */}
              <View>
                <Text>Business name here</Text>
              </View>
              {/* Joined Date */}
              <View>
                <Text>Joined date</Text>
              </View>
              {/* User profile Image */}
              <View>
                <Text>user profile image</Text>
              </View>
              {/* Star Rating */}
              <View>
                <Text>users 1 - 5 star Rating</Text>
              </View>
              {/* Novice, Apprentice, Journeyman, Master*/}
              <View>
                <Text>JourneyMan</Text>
              </View>
            </View>

            {/* Social Media and Jobs Completed */}
            <View style={A.border}>
              <Text>social media and jobs completed</Text>

              <View>
                <View>{/* Social Media Links */}</View>
                <View>
                  <Text>Twitter</Text>
                  <Text>Instagram</Text>
                  <Text>TikTok</Text>
                  <Text>Facebook</Text>
                  <Text>Business Website</Text>
                </View>
              </View>
              <View>{/* Jobs Completed */}</View>
              <View>
                <Text>Jobs Completed: 3</Text>
              </View>
            </View>
            <View>
              <View>{/* Bio of business or person */}</View>
              <View style={A.border}>
                <View>
                  <Text>Specialities</Text>
                </View>
                <Text>Customer Speciality Icon</Text>
                <Text>Customer Speciality Icon</Text>
                <Text>Customer Speciality Icon</Text>
                <Text>Customer Speciality Icon</Text>
                <Text>Customer Speciality Icon</Text>
                <Text>Customer Speciality Icon</Text>
              </View>
              <View style={A.border}>
                <View>
                  <Text>Customer Review Icon</Text>
                </View>
                <View>
                  <Text>Icon</Text>
                  <Text>Icon</Text>
                  <Text>Icon</Text>
                  <Text>Icon</Text>
                  <Text>Icon</Text>
                  <Text>Icon</Text>
                </View>
              </View>
            </View>
            {/* Services offered */}
            <View style={A.border}>
              <Text> Services Offered</Text>
              <View></View>
              <View>{/* <View> Logos of companies worked for </View> */}</View>
              {/* User and Business Review */}
              <View>
                {/* User and business review */}
                <View>
                  <Text>Business Reviews</Text>
                  <View>
                    <Text>Review Cards Here!</Text>
                    <View>
                      <Reviews />
                      <Reviews />
                      <Reviews />
                      <Reviews />
                      <Reviews />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default BusinessPage
