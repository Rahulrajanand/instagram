import { useState } from "react"
import useAuthStore from '../store/authStore';
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { firestore, storage } from '../firebase/firebase'
import { doc, updateDoc } from '/firebase/firestore'
import useUserProfileStore from '../store/userProfileStore'

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const authUser = useAuthStore((state) => state.user)
  const setAuthUser = useAuthStore((state) => state.setUser)
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile)

  const showToast = useShowToast()

  const editProfile = async (inputs, selectedFile) => {
    if(isUpdating || !authUser) return       //if return is not there then it will update the profile again
    setIsUpdating(true) 

    const storageRef = ref(storage,`profilePics/${authUser.uid}`)
    const userDocRef = doc(firestore, "users" ,authUser.uid)

    let URL = ""
    try {
      if (selectedFile) {
         await uploadString(storageRef,selectedFile, "data_url")
         URL = await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
      }

      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL : URL || authUser.profilePicURL
      }

      await updateDoc(userDocRef, updatedUser)
      localStorage.setItem("user-info",JSON.stringify(updatedUser))
      setAuthUser(updatedUser)       //after editing profile , every state should be in sync , AuthUser should become updatedUser 
      setUserProfile(updatedUser)    //after editing profile , every state should be in sync , UserProfile should become updatedUser 
      showToast("Success", "Profile Updated successfully", "success")

    } catch (error) {
      showToast("Error",error.message, "error")
    }
  };
  
  return {editProfile, isUpdating}
};

export default useEditProfile