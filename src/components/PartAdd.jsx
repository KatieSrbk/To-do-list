import { useState } from 'react'
import { Flex, Button, Input, Text } from '@chakra-ui/react'
import { Filter } from './Filter'
import { useDispatch, useSelector } from 'react-redux'
import { setTodosArray } from '../redux/slice/taskList'

export const PartAdd = () => {
  const dispatch = useDispatch()
  const { todosArray } = useSelector((state) => state.taskList)
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
        isEdited: false,
      }
      const newArr = [newTodo, ...todosArray]
      dispatch(setTodosArray({ array: newArr, isSaveInStorage: true }))
      setInputText('')
    }
  }

  const enter = (event) => {
    if (event.keyCode === 13) {
      clickOnAdd()
    }
  }

  return (
    <Flex
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap', 'nowrap']}
      alignItems='center'
      justifyContent={['center', 'center', 'center', 'center', 'space-between']}
      flexGrow={1}
    >
      <Flex
        height='50px'
        justifyContent='space-between'
        flexGrow={1}
        mb={[3, 0, 0, 0, 0]}
      >
        <Input
          id='add_input'
          type='text'
          onKeyUp={enter}
          onChange={changeInput}
          value={inputText}
          placeholder='Write your task...'
          variant='unstyled'
          fontSize='22px'
          bg='white'
          paddingLeft='20px'
          borderRadius='32px'
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
          margin='0px 3px'
          borderRadius='32px'
          display='flex'
          alignItems='center'
          width='85px'
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
      <Filter />
    </Flex>
  )
}
