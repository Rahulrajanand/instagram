import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { NotificationsLogo, UnlikeLogo } from "../../assets/constants.jsx";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if(liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }


  return <>

    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
      <Box onClick={handleLike}
      cursor={"pointer"}
      fontSize={17}
      >
        {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
      </Box>
    </Flex>
  </>
    
  
}

export default PostFooter