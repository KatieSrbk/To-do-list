import { Flex, Text, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodosArray } from '../redux/slice/taskList'

export const Footer = () => {
  const dispatch = useDispatch()
  const { todosArray } = useSelector((state) => state.taskList)

  const textFooter =
    todosArray.length === 0
      ? "You don't have tasks :("
      : `You have ${todosArray.length} pending tasks`

  const deleteAllTodos = () => {
    dispatch(setTodosArray({ array: [], isSaveInStorage: true }))
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
