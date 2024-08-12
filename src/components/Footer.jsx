import { Flex, Text, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PAGE_URL } from '../utils/constants'

export const Footer = () => {
  const { todosArray } = useSelector((state) => state.taskList)

  const textFooter =
    todosArray.length === 0
      ? "You don't have tasks :("
      : `You have ${todosArray.length} pending tasks`

  return (
    <Flex
      as='footer'
      justifyContent='space-between'
      alignItems='center'
      marginTop='9px'
    >
      <Text
        display='flex'
        fontSize='20px'
        marginLeft={[0, '10px', '10px', '10px', '10px']}
        alignItems='center'
        fontFamily='initial'
      >
        {textFooter}
      </Text>
      <Button
        as={Link}
        to={PAGE_URL.WONDER}
        bg='purple.500'
        color='white'
        fontFamily='initial'
        fontSize='20px'
        height='42px'
        fontWeight='normal'
        borderRadius='30px'
        _hover={{ bg: 'purple.700' }}
      >
        Clear all
      </Button>
    </Flex>
  )
}
