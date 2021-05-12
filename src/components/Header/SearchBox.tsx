import { Flex, Input, Icon } from "@chakra-ui/react";
// import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  // const [search, setSearch] = useState("");

  // const searchInputRef = useRef<HTMLInputElement>(null);
  // console.log(searchInputRef.current.focus());

  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="8"
      marginLeft="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        mr="4"
        px="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        // ref={searchInputRef}
        // autoFocus
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
