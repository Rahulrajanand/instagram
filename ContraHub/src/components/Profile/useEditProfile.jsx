import { useState } from "react"
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const authUser = useAuthStore((state) => state.user)

  const showToast = useShowToast()

  const editProfile = async (inputs, selectedFile) => {
    
  }
    
}

export default useEditProfile