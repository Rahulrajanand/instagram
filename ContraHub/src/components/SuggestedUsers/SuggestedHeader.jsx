import { Avatar, Flex, Text, Button } from "@chakra-ui/react"
import useLogout from '../../hooks/useLogout';
import useAuthStore from "../../store/authStore";


const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout();
  const authUser = useAuthStore(state => state.user)

  return (
    <>
       <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a P" size={"lg"} src="/profilepic.png"/>
        <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}      
        </Text>
        </Flex>
        <Button
            size={"xs"}
            background={"transparent"}
            _hover={{background: "transparent"}}
            fontSize={14}
            fontWeight={"medium"}
            color={"blue.400"}
            onClick={handleLogout}
            isLoading={isLoggingOut}
            cursor={"pointer"}
        >
            Log out
        </Button> 
       </Flex> 
    </>
  )
}

export default SuggestedHeader