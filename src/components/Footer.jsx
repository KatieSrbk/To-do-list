import { Flex, Text, Button } from '@chakra-ui/react'

export const Footer = ({ todosArray, setTodosArray }) => {
  const textFooter =
    todosArray.length === 0
      ? "You don't have tasks :("
      : `You have ${todosArray.length} pending tasks`

  const deleteAllTodos = () => {
    setTodosArray([])
    localStorage.setItem('localTodos', JSON.stringify([]))
  }
  return (
    <Flex as='footer' justifyContent='space-between' marginTop='9px'>
      <Text
        display='flex'
        fontSize='20px'
        marginLeft='10px'
        alignItems='center'
        fontFamily='initial'
      >
        {textFooter}
      </Text>
      <Button
        bg='purple.500'
        color='white'
        fontFamily='initial'
        fontSize='20px'
        height='42px'
        fontWeight='normal'
        borderRadius='30px'
        _hover={{ bg: 'purple.700' }}
        onClick={deleteAllTodos}
      >
        Clear all
      </Button>
    </Flex>
  )
}
