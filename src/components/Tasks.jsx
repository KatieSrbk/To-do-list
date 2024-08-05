import { Box, Flex, Text, Button } from '@chakra-ui/react'

export const Tasks = ({ todosArray, setTodosArray }) => {
  const deleteTask = (id) => {
    const filterTodos = todosArray.filter((item) => item.id !== id)
    setTodosArray(filterTodos)
    localStorage.setItem('localTodos', JSON.stringify(filterTodos))
  }
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
          <Box paddingRight='20px'>
            <Button
              colorScheme='red'
              variant='ghost'
              borderRadius='16px'
              fontSize='18px'
              onClick={() => deleteTask(item.id)}
            >
              del
            </Button>
          </Box>
        </Flex>
      ))}
    </Box>
  )
}
