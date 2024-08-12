import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { PAGE_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
  return (
    <Flex bg='rgb(186,143,255)' alignItems='center' justifyContent='center'>
      <Flex
        textAlign='center'
        minH='100%'
        justifyContent='center'
        paddingY='70px'
      >
        <Flex
          background='rgb(241, 233, 255)'
          maxW='700px'
          width='90%'
          borderRadius='14px'
          paddingX='35px'
          paddingY='38px'
          flexDirection='column'
          alignItems='center'
        >
          <Flex mb='15px' flexDirection='column'>
            <Heading fontSize='3xl' fontFamily='initial' fontWeight='800'>
              Information about the to-do list
            </Heading>
            <Text fontFamily='initial' fontSize='18px' margin='18px'>
              To-do list is a task management tool that helps you organize tasks
              and track their completion. The main function of such a list is to
              add tasks where users can record the tasks that need to be
              completed. An important part of the functionality is the ability
              to edit tasks, which allows you to make changes or add details as
              needed. Deleting tasks is also provided to keep the list
              up-to-date and delete completed or more irrelevant tasks. The user
              interface is usually intuitive, with simple buttons for adding,
              editing, and deleting tasks. It may also be possible to mark tasks
              as completed, which helps to visually track progress. Some to-do
              lists support organizing tasks by category or priority, which
              helps to structure the list better. Additional features may
              include reminders or deadlines so that tasks are not forgotten.
              The to-do list is useful both for personal use and for work teams
              where coordination and joint task execution are required. As a
              result, it is a powerful tool for increasing productivity and time
              management.
            </Text>
          </Flex>
          <Flex>
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
    </Flex>
  )
}
