import { useState, useEffect } from "react"
import { collection, addDoc, query, where, getDocs, setDoc, doc, updateDoc } from "firebase/firestore"
import { auth, db } from "../firebase"
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from 'firebase/storage' //access the storage database in firebase
import {
  Text,
  Image,
  View,
  Platform,
  TextInput,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native"
import A from "../styles/A"

const BusinessEditModal = () => {
  // uploads and sets upon selection business display photo
  const [image, setImage] = useState(null);

  const pickCoverPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const storage = getStorage();
      const storageRef = ref(storage, 'index.jpg')

      const img = await fetch(result.uri)
      const bytes = await img.blob()

      await uploadBytes(storageRef, bytes)

      setImage(result.assets[0].uri);
    }
  };

  // uploads and sets upon selection business display photo

  // Business Bio input 

  const [bio, setBio] = useState("")
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, 'users')



  const userData = async () => {
    if (userCollectionRef === null) {
      const docRef = await addDoc(collection(db, "users"), {
        bio: "",

        userId: auth.currentUser.uid
      });
      userData()
    } else {
      const getUserData = async () => {
        const data = await getDocs(userCollectionRef)
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
      getUserData()
    }
  }




  // creates the business bio

  const userBio = () => {
    return async (id, bio) => {
      const userDoc = doc(db, 'users', id)
      const newFields = { bio: bio }
      await updateDoc(userDoc, newFields)
    }

  }


  // creates the business bio

  // updates business bio

  // Business Bio input 

  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View>
          {/* Cover Photo */}
          <View>
            <Text>Cover Photo</Text>
            <Text>Add photo here</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button title="Pick an image from camera roll" onPress={pickCoverPhoto} />
              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>

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
            <TextInput
              placeholder="Write a Small Bio about your business here"
              placeholderTextColor="#000"
              value={bio}
              onChangeText={setBio}
            />
            <Button
              onPress={userBio}
              title="Update Bio"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          {/* Business Bio  */}

          {users.map((user) => {
            return (
              <Text>Bio: {user.bio} </Text>
            )
          })}

















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
