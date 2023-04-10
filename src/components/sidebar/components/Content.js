// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  let { routes } = props;
  let i = 0;
  for (i = 0; i <= routes.length - 1; i++) {
    if (routes[i].name === "route") {
      delete routes[i].name;
      delete routes[i].layout;
      delete routes[i].icon;
      delete routes[i].path;
      delete routes[i].component;
      console.log(routes[i])
    }
  }
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
      <Brand />
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box
        ps='20px'
        pe={{ md: "16px", "2xl": "0px" }}
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
