// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";

export default function Banner(props) {
  const { banner, avatar, name, job, badges, ambar, verified } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {job}
      </Text>
      <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Badges
          </Text>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {badges}
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Ambar
          </Text>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {ambar}
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Verified
          </Text>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {verified}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
