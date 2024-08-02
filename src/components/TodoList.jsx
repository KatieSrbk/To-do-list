import { Box, Flex, Heading } from '@chakra-ui/react'
import { Tasks } from './Tasks'

const testTodos = [
  {
    text: 'Привет!',
    id: 843,
    isChecked: false,
    isEdited: false,
  },
]

export const TodoList = () => {
  return (
    <Flex
      textAlign='center'
      minH='100%'
      justifyContent='center'
      paddingY='50px'
    >
      <Box
        background='rgba(252, 252, 252, 0.8);'
        width={['90%', '90%', '49%']}
        borderRadius='21px'
        paddingX='50px'
        paddingY='38px'
      >
        <Flex mb='15px'>
          <Heading as='h1' fontSize='4xl'>
            My To-Do
          </Heading>
        </Flex>
        <Tasks todos={testTodos} />
      </Box>
    </Flex>
  )
}
