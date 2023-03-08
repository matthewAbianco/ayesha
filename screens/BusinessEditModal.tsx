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

          {/* Education and certification  */}
          <View>
            <Text>Education and certification </Text>
          </View>
          {/* Education and certification */}

          {/* Meet The Team  */}
          <View>
            <Text>
              Meet The Team/ different cards showing a photo, name and small bio
            </Text>
          </View>
          {/* Meet The Team  */}

          {/* Services offered  */}
          <View>
            <Text>
              Services offered / these are the cards people make to show their
              products
            </Text>
            <Text>
              A La Carte Menu showing add-ons to a service being requested
            </Text>
          </View>
          {/* Services offered   */}

          {/* Coverage rates for different travel distances */}
          <View>
            <Text>Coverage rates for different travel distances</Text>
          </View>
          {/* Coverage rates for different travel distances */}
        </View>
        {/* Logos Of companies previously worked for */}
        <View>
          <Text> Logos Of companies previously worked for</Text>
        </View>
        {/* Logos Of companies previously worked for */}
        {/* Languages Spoken */}
        <View>
          <Text> Languages Spoken</Text>
        </View>
        {/* Languages Spoken */}
        {/*Business Video */}
        <View>
          <Text>Business Video</Text>
        </View>
        {/* Business Video */}
        {/* Time needed prior to booking.*/}
        <View>
          <Text> Time needed prior to booking. </Text>
        </View>
        {/* Time needed prior to booking.*/}
        {/* frequently works with section if people work together often */}
        <View>
          <Text>
            frequently works with section if people work together often
          </Text>
        </View>
        {/* frequently works with section if people work together often  */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default BusinessEditModal
