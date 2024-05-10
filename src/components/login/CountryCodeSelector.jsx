import React, { useState } from "react";
import { Box, Select, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import PublicIcon from "@mui/icons-material/Public";
// Country data (you can expand this as needed)
const countries = [
  {
    name: "Select country",
    code: "***",
    flagUrl:
      "https://static-00.iconduck.com/assets.00/globe-icon-1024x1024-dvnknm0e.png",
  },
  {
    name: "United States",
    code: "+1",
    flagUrl: "https://flagsapi.com/US/flat/64.png",
  },
  {
    name: "United Kingdom",
    code: "+44",
    flagUrl: "https://flagsapi.com/GB/flat/64.png",
  },
  {
    name: "Canada",
    code: "+1",
    flagUrl: "https://flagsapi.com/CA/flat/64.png",
  },
  {
    name: "Uzbekistan",
    code: "+998",
    flagUrl: "https://flagsapi.com/UZ/flat/64.png",
  },
  // Add more countries here
];

const CountryCodeSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (e) => {
    const selected = countries.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountry(selected);
  };
  const countryCode = selectedCountry.code;
  return (
    <Flex alignItems="center" mb=".5rem">
      <Box mr={2}>
        <Image
          src={selectedCountry.flagUrl}
          alt={selectedCountry.name}
          boxSize="36px"
        />
      </Box>
      <Select
        onChange={handleChange}
        value={selectedCountry.name}
        borderColor="gray.300"
      >
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name} ({country.code})
          </option>
        ))}
      </Select>
      {/* <Spacer />
      <Text fontSize="sm" color="gray.500">
        Country Code: {selectedCountry.code}
      </Text> */}
    </Flex>
  );
};

export default CountryCodeSelector;
