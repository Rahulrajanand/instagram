import { useEffect, useState } from "react"
import usePostStore from "../store/postStore"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import useUserProfileStore from '../store/userProfileStore'
import { collection, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"


const useGetFeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const {posts, sestPosts} = usePostStore()
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();
    const {setUserProfile} = useUserProfileStore()

    useEffect(() => {
        const getFeedPosts = async() => {
            setIsLoading(true)
            if(authUser.following.length === 0) {
                setIsLoading(false)
                sestPosts([])
                return
            }
            const q = query(collection(firestore,"posts"),where("createdBy","in",authUser.following))

            try {
                
            } catch (error) {
                showToast("Error",error.message,"error")
            } finally {
                setIsLoading(false)
            }
        }
    },[])
}

export default useGetFeedPosts