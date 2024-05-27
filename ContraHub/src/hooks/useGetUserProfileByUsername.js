import { useEffect, useState } from "react"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore"


const useGetUserProfileByUsername = (username) => {
    const [isLoading, setIsLoading] = useState(true)
    const showToast = useShowToast();
    const {userProfile, setUserProfile} = useUserProfileStore()

    //this will get the user by profile name using a query from firebase documentation
    useEffect(() => {
        const getUserProfile = async() => {
            setIsLoading(true)
            try {
              const q = query(collection(firestore, "users"),where("username", "==", username))
              const querySnapshot = await getDocs(q)
                
              if(querySnapshot.empty) return setUserProfile(null);
            } catch (error) {
              showToast('Error', error.message, 'error')  
            }
        }
        getUserProfile()
    },[])
}       

export default useGetUserProfileByUsername