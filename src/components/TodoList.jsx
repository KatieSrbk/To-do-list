import { Box, Flex, Heading } from '@chakra-ui/react'
import { Tasks } from './Tasks'
import { useEffect, useState } from 'react'
import { PartAdd } from './PartAdd'
import { Footer } from './Footer'

export const TodoList = () => {
  const [todosArray, setTodosArray] = useState([])

  useEffect(() => {
    if (localStorage.getItem('localTodos') === null) {
      setTodosArray([])
    } else {
      const newArr = JSON.parse(localStorage.getItem('localTodos'))
      setTodosArray(newArr)
    }
  }, [])
  return (
    <Flex
      textAlign='center'
      minH='100%'
      justifyContent='center'
      paddingY='50px'
    >
      <Box
        background='rgba(255, 255, 255, 0.8);'
        maxW='650px'
        width={['90%', '90%', '49%']}
        borderRadius='14px'
        paddingX='50px'
        paddingY='38px'
      >
        <Flex mb='15px'>
          <Heading as='h1' fontSize='4xl' fontFamily='initial' fontWeight='800'>
            My To-Do
          </Heading>
        </Flex>
        <PartAdd todosArray={todosArray} setTodosArray={setTodosArray} />
        <Tasks todosArray={todosArray} />
        <Footer todosArray={todosArray} setTodosArray={setTodosArray} />
      </Box>
    </Flex>
  )
}
