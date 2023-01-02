import { Center, VStack } from "@chakra-ui/react";
import AppForm from "../components/AppForm";
import AppButton from "../components/Button";

type Props = {};

export const Home = () => {
  return (
    <Center h="100vh">
      <VStack>
        <AppForm />
        <AppButton>Do Something!</AppButton>
      </VStack>
    </Center>
  );
};
