import { Box, Flex, Text } from '@chakra-ui/react'

export const Tasks = ({ todos }) => {
  return (
    <Box>
      {todos.map((item, index) => (
        <Flex
          key={index}
          justifyContent='space-between'
          bg='white'
          margin='6px 0px'
          alignItems='center'
          overflow='hidden'
          transitionDuration='0.5s'
          padding='0px 20px'
          fontSize='20px'
          borderRadius='10px'
        >
          <Text
            flexGrow={1}
            display='flex'
            justifyContent='flex-start'
          >
            {item.text}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}
