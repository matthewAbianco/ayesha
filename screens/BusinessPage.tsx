import { View, Text, KeyboardAvoidingView, SafeAreaView } from "react-native"
import React from "react"

const BusinessPage = () => {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        {/* Cover Photo Div */}
        <View>
          <View>{/* Cover Photo */}</View>
          <View>
            <Text>Cover Photo</Text>
          </View>
          <View>
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
              <Text>users 1 - 5 star Rating</Text>
            </View>
          </View>
        </View>
        {/* Social Media and Jobs Completed */}
        <View>
          <Text>social media and jobs completed</Text>
        </View>
        <View>
          <View>{/* Social Media Links */}</View>
          <View>
            <Text>Twitter</Text>
            <Text>Instagram</Text>
            <Text>TikTok</Text>
            <Text>Facebook</Text>
            <Text>Business Website</Text>
          </View>
          <View>{/* Jobs Completed */}</View>
          <View>
            <Text>Jobs Completed: 3</Text>
          </View>
        </View>
        <View>
          <View>{/* Bio of business or person */}</View>
          <View>
            <Text>Specialities</Text>
          </View>
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
        {/* Services offered */}
        <View>
          <Text> Services Offered</Text>
          <View></View>
          <View>{/* <View> Logos of companies worked for </View> */}</View>
          {/* User and Business Review */}
          <View>
            <View>{/* User and business review */}</View>
            <View>
              <Text>Business Reviews</Text>
              <View>
                <Text>Review Cards Here!</Text>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default BusinessPage
