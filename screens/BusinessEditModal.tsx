import { useState, useEffect } from "react"
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { auth, db } from "../firebase"
import {
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native"
import A from "../styles/A"

const BusinessEditModal = () => {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View>
          {/* Cover Photo */}
          <View>
            <Text>Cover Photo</Text>
            <Text>Add photo here</Text>
          </View>
          {/* Cover Photo */}

          {/* List for different stages of mastery within profession */}
          <View>
            <Text>List of Novice, Apprentice, Master</Text>
          </View>
          {/* List for different stages of mastery within profession */}
          {/* Business Bio  */}
          <View>
            <Text>Bio Of Business</Text>
          </View>
          {/* Business Bio  */}
          {/* Weekly Availability */}
          <View>
            <Text>Weekly Availability. </Text>
          </View>
          {/* Weekly Availability */}

          {/* Social Media Links*/}
          <View>
            <Text>Twitter</Text>
            <Text>Instagram</Text>
            <Text>TikTok</Text>
            <Text>Facebook</Text>
            <Text>Personal</Text>
          </View>
          {/*  Social Media Links */}

          {/* List of Specialities */}
          <View>
            <Text>List of self attributed specialities within a field</Text>
          </View>
          {/* List of Specialities  */}

          {/* List of equipment  */}
          <View>
            <Text>List of equipment </Text>
          </View>
          {/* List of equipment  */}
          {/* List of references  */}
          <View>
            <Text>List of references</Text>
          </View>
          {/* List of references  */}
          {/* Meet The Team Section */}
          <View>
            <Text>Meet The Team</Text>
          </View>
          {/* Meet The Team  */}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default BusinessEditModal
