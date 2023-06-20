import React, { useState } from "react";
import { Box, Input, Button, Text, Spinner, Flex, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons'
export const SearchPage = () => {
  const [pokemonName, setPokemonName] = useState("");
  const[list,setlist]=useState([])
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const handleSearch = async () => {
   if (!pokemonName) {
     setError("Please enter a Pokemon name.");
     return;
   }

   try {
     setIsLoading(true);
     setError("");

     // Make API call to search endpoint
     const response = await fetch(
       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
     );
     if (response.ok) {
       const pokemonData = await response.json();
       // console.log(pokemonData,"1");
       setlist(pokemonData)
       navigate(`/?name=${pokemonName}`);
     } else {
       setError("Pokemon not found.");
     }
   } catch (error) {
     setError("An error occurred while fetching the Pokemon data.");
   } finally {
     setIsLoading(false);
   }
 };
 console.log("list",list.abilities);
  return (
    <Box  mt={"15px"}
    >
      
      <Flex mb={4}>
      <Input value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)} type="text" placeholder="Search here" mr={2} className="search-input"/> 
            <IconButton onClick={handleSearch} icon={<SearchIcon />} aria-label="Search" ml='-10px'/>            
      </Flex>
      
      {isLoading && (
        <Flex justify="center">
          <Spinner size="md" />
        </Flex>
      )}
      {error && (
        <Box mt={4}>
          <Text color="red" textAlign="center">
            {error}
          </Text>
        </Box>
      )}
    </Box>
  );
};