import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"

const FeedPost = () => {
  return <>
    <PostHeader/>
    <Box>
        <Image src="/img1.png" alt="user profile"/>
        
    </Box>
    <PostHeader/>
  </>
    
  
}

export default FeedPost