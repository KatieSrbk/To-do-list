import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PAGE_URL } from '../utils/constants'

export const ErrorPage = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      bg='rgb(165, 80, 92)'
      position='fixed'
      height='100%'
      width='100%'
    >
      <Flex
        background='rgba(255, 255, 255, 0.8);'
        flexDirection='column'
        maxW='600px'
        width='500px'
        borderRadius='14px'
        paddingX='30px'
        paddingY='40px'
        marginBottom='110px'
      >
        <Flex justifyContent='center' flexDirection='column' mt={5}>
          <Heading textAlign='center' fontFamily='initial'>
            Whoops...there was an error!
          </Heading>
          <Text
            textAlign='center'
            margin='45px 0px'
            fontFamily='initial'
            fontSize='20px'
          >
            Please try reloading the website page and ensure that the URL has
            been entered correctly.
          </Text>
        </Flex>
        <Flex justifyContent='space-around'>
          <Button
            as={Link}
            to={PAGE_URL.TODO_LIST}
            padding='10px 30px'
            backgroundColor='#38a057'
            color='white'
            transition='300ms'
            fontFamily='initial'
            borderRadius='32px'
            _hover={{ transform: 'scale(1.1)' }}
          >
            OK
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
