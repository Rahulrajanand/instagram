import { useState } from "react"
import useShowToast from "./useShowToast"


const usePreviewImg = () => {
 const [selectedFile, setSelectedFile] = useState(null)
 const showToast = useShowToast()
 const maxFileSizeInBytes = 3 * 1024 * 1024 //3MB

 const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
        if(file.size > maxFileSizeInBytes) {
            showToast("Error", "File size must be less than 2MB", "error")
            setSelectedFile(null)
            return
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }

        reader.readAsDataURL(file) //will take the image file and convert it into a 64 bit string and then set it into this input

    } else {
        showToast("Error", "Please upload an image file", "error")
        setSelectedFile(null)
    }
  }

  return {selectedFile, handleImageChange, setSelectedFile}
}

export default usePreviewImg
