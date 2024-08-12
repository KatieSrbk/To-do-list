import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { Tasks } from '../components/Tasks'
import { useEffect } from 'react'
import { PartAdd } from '../components/PartAdd'
import { Footer } from '../components/Footer'
import { useDispatch } from 'react-redux'
import { writeInitialTodos } from '../redux/slice/taskList'
import { PAGE_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

export const TodoList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(writeInitialTodos())
  }, [])

  return (
    <Flex flexDirection='column'>
      <Flex
        alignItems='center'
        flexDirection='column'
        textAlign='center'
        minH='100%'
        justifyContent='center'
        paddingY='70px'
      >
        <Flex
          width={['90%', '90%', '90%', '90%', '49%']}
          maxW='650px'
          maxH='15px'
          justifyContent='flex-end'
        >
          <Button
            as={Link}
            to={PAGE_URL.ABOUT}
            variant='navPage'
            borderTopLeftRadius='14px'
            _hover={{
              transform: 'translateY(-5px)',
              transition: '0.3s ease',
              borderTopRightRadius: '4px',
            }}
          >
            INFO
          </Button>
          <Button
            as={Link}
            to={PAGE_URL.ERROR}
            variant='navPage'
            borderTopRightRadius='14px'
            _hover={{
              transform: 'translateY(-5px)',
              transition: '0.3s ease',
              borderTopLeftRadius: '4px',
            }}
          >
            ERR
          </Button>
        </Flex>
        <Box
          background='rgb(241, 233, 255)'
          maxW='650px'
          width={['90%', '90%', '90%', '90%', '49%']}
          borderRadius='14px'
          borderTopRightRadius='none'
          paddingX='35px'
          paddingY='38px'
        >
          <Flex mb='15px'>
            <Heading
              as='h1'
              fontSize='4xl'
              fontFamily='initial'
              fontWeight='800'
            >
              My To-Do
            </Heading>
          </Flex>
          <PartAdd />
          <Tasks />
          <Footer />
        </Box>
      </Flex>
    </Flex>
  )
}
