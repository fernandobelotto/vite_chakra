import { Center } from "@chakra-ui/react"
import AppButton from "../components/Button"

type Props = {}

export const Home = (props: Props) => {
  return (
    <Center h="100vh">
      <AppButton>Do Something!</AppButton>
    </Center>
  )
}