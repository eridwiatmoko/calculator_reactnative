import React from "react";
import { Box, HStack, useColorModeValue, VStack, Text } from "native-base";
import Numpad from "../components/Numpad";
import { UseAppContex } from "../components/AppContex";

export default function MainScreen() {
  const container = useColorModeValue("white", "dark.100");
  const numpadContainer = useColorModeValue("dark.800", "dark.200");
  const [state] = UseAppContex();

  return (
    <Box flex={1} bg={container}>
      {/* Switch Theme */}
      {/* Display */}
      <VStack flex={1} alignItems="flex-end" mr="8">
        <Text fontSize="3xl" pt="1/5">
          {state?.currentValue}
        </Text>
        <Text bold fontSize="5xl">
          {state?.result}
        </Text>
      </VStack>
      {/* Numpads */}
      <VStack
        flex={2}
        bg={numpadContainer}
        borderTopLeftRadius="35"
        borderTopRightRadius="35"
        space="5"
        py="8"
      >
        <HStack space="5" mx="auto">
          <Numpad>AC</Numpad>
          <Numpad>^</Numpad>
          <Numpad>%</Numpad>
          <Numpad>/</Numpad>
        </HStack>
        <HStack space="5" mx="auto">
          <Numpad>7</Numpad>
          <Numpad>8</Numpad>
          <Numpad>9</Numpad>
          <Numpad>x</Numpad>
        </HStack>
        <HStack space="5" mx="auto">
          <Numpad>4</Numpad>
          <Numpad>5</Numpad>
          <Numpad>6</Numpad>
          <Numpad>-</Numpad>
        </HStack>
        <HStack space="5" mx="auto">
          <Numpad>1</Numpad>
          <Numpad>2</Numpad>
          <Numpad>3</Numpad>
          <Numpad>+</Numpad>
        </HStack>
        <HStack space="5" mx="auto">
          <Numpad>0</Numpad>
          <Numpad>.</Numpad>
          <Numpad>C</Numpad>
          <Numpad>=</Numpad>
        </HStack>
      </VStack>
    </Box>
  );
}
