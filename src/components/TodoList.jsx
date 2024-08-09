import { Box, Flex, Heading } from '@chakra-ui/react'
import { Tasks } from './Tasks'
import { useEffect } from 'react'
import { PartAdd } from './PartAdd'
import { Footer } from './Footer'
import { useDispatch } from 'react-redux'
import { writeInitialTodos } from '../redux/slice/taskList'

export const TodoList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(writeInitialTodos())
  }, [])
  return (
    <Flex
      textAlign='center'
      minH='100%'
      justifyContent='center'
      paddingY='70px'
    >
      <Box
        background='rgba(255, 255, 255, 0.8);'
        maxW='650px'
        width={['90%', '90%', '49%']}
        borderRadius='14px'
        paddingX='35px'
        paddingY='38px'
      >
        <Flex mb='15px'>
          <Heading as='h1' fontSize='4xl' fontFamily='initial' fontWeight='800'>
            My To-Do
          </Heading>
        </Flex>
        <PartAdd />
        <Tasks />
        <Footer />
      </Box>
    </Flex>
  )
}
