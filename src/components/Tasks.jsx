import { Box, Flex, Text } from '@chakra-ui/react'

export const Tasks = ({ todosArray }) => {
  return (
    <Box>
      {todosArray.map((item, index) => (
        <Flex
          key={index}
          justifyContent='space-between'
          bg='white'
          margin='6px 0px'
          alignItems='center'
          overflow='hidden'
          transitionDuration='0.5s'
          paddingLeft='20px'
          fontSize='22px'
          borderRadius='32px'
          border='none'
          variant='unstyled'
          fontFamily='initial'
          height='50px'
        >
          <Text flexGrow={1} display='flex' justifyContent='flex-start'>
            {item.text}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}
