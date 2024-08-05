import { useState } from 'react'
import { Flex, Button, Input, Text } from '@chakra-ui/react'

export const PartAdd = ({ todosArray, setTodosArray }) => {
  const [inputText, setInputText] = useState('')

  const changeInput = (event) => {
    setInputText(event.target.value)
  }

  const clickOnAdd = () => {
    if (inputText === '') {
      return
    } else {
      const newTodo = {
        id: Math.random(),
        text: inputText,
        isChecked: false,
      }
      const newArr = [newTodo, ...todosArray]
      setTodosArray(newArr)
      setInputText('')
      localStorage.setItem('localTodos', JSON.stringify(newArr))
    }
  }
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Flex width='400px' height='50px' justifyContent='space-between'>
        <Input
          type='text'
          onChange={changeInput}
          value={inputText}
          placeholder='Write your task...'
          variant='unstyled'
          fontSize='22px'
          bg='white'
          paddingLeft='20px'
          borderRadius='32px'
          width='400px'
          border='none'
          fontFamily='initial'
        ></Input>
        <Button
          onClick={clickOnAdd}
          bg='#ffffff'
          variant='solid'
          cursor='pointer'
          transition='all 0.3 ease'
          padding='20px 10px'
          borderRadius='32px'
          display='flex'
          alignItems='center'
          width='100px'
          height='50px'
          _hover={{ bg: 'rgb(255, 200, 0)' }}
        >
          <Text
            fontWeight='normal'
            padding='1px 10px'
            bg='white'
            color='rgb(255, 200, 0)'
            borderRadius='32px'
            fontSize='22px'
            fontFamily='initial'
          >
            Add
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
