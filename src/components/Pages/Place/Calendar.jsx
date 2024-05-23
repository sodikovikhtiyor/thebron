// src/Calendar.js
import React from 'react';
import { Box, SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'; // Import Russian locale for dayjs

dayjs.locale('ru');

const Calendar = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const month = dayjs().month(1); // February (0-indexed)
  const daysInMonth = month.daysInMonth();
  const firstDayOfMonth = month.startOf('month').day();

  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  return (
    <Box p={4} borderWidth={1} borderRadius="md" w="300px">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{month.format('MMMM')}</Text>
        <SimpleGrid columns={7} spacing={2} w="full">
          {daysOfWeek.map((day) => (
            <Text key={day} textAlign="center" fontWeight="bold">
              {day}
            </Text>
          ))}
          {emptyDays.map((_, index) => (
            <Box key={index} />
          ))}
          {calendarDays.map((day) => (
            <Box
              key={day}
              textAlign="center"
              p={2}
              borderWidth={1}
              borderRadius="md"
            >
              {day}
            </Box>
          ))}
        </SimpleGrid>
        <HStack>
          <Text>Time</Text>
          <Text fontWeight="bold">{dayjs().format('h:mm A')}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Calendar;
