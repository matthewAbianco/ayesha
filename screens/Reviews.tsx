import { View, Text } from "react-native"
import React from "react"

const Reviews = () => {
  return (
    <View>
      <View>
        <View>
          <Text>Photo of session</Text>
        </View>
        <View>
          <View>
            <Text>Name of Customer</Text>
            <Text>Star Rating</Text>
          </View>
          <View>
            <Text>Feedback of the session</Text>
          </View>
          <Text>Location of the session</Text>
          <Text>Date Added</Text>
        </View>
      </View>
    </View>
  )
}

export default Reviews
