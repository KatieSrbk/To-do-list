import { Box, Flex, Text, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { setTodosArray } from '../redux/slice/taskList'
import { useDispatch, useSelector } from 'react-redux'

export const Tasks = () => {
  const dispatch = useDispatch()
  const { todosArray } = useSelector((state) => state.taskList)
  const [inputForEdit, setInputForEdit] = useState('')

  const changeInputForEdit = (event) => {
    setInputForEdit(event.target.value)
  }

  const deleteTask = (id) => {
    const filterTodos = todosArray.filter((item) => item.id !== id)
    dispatch(setTodosArray({ array: filterTodos, isSaveInStorage: true }))
  }

  const taskCompletionButton = (id) => {
    const updatedTodos = todosArray.map((item) => {
      if (item.id === id) {
        const newObject = {
          ...item,
          isChecked: item.isChecked === true ? false : true,
        }
        return newObject
      } else {
        return item
      }
    })
    dispatch(setTodosArray({ array: updatedTodos, isSaveInStorage: true }))
  }

  const editTask = (id) => {
    const newTodos = todosArray.map((item) => {
      if (item.id === id) {
        const newEditTodo = { ...item }
        newEditTodo.isEdited = !item.isEdited
        setInputForEdit(item.text)
        return newEditTodo
      } else {
        const newEditTodo = { ...item }
        newEditTodo.isEdited = false
        return newEditTodo
      }
    })
    dispatch(setTodosArray({ array: newTodos, isSaveInStorage: false }))
  }

  const saveEditedTask = (id) => {
    const editedArray = todosArray.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          text: inputForEdit,
          isEdited: false,
        }
        return newItem
      } else {
        return item
      }
    })
    dispatch(setTodosArray({ array: editedArray, isSaveInStorage: true }))
    setInputForEdit('')
  }
  const cancelEditingForTask = (id) => {
    const newCancellationFeature = todosArray.map((item) => {
      if (item.id === id) {
        const newItem = {
          ...item,
          isEdited: false,
        }
        return newItem
      } else {
        return item
      }
    })
    dispatch(
      setTodosArray({ array: newCancellationFeature, isSaveInStorage: false })
    )
    setInputForEdit('')
  }

  return (
    <Box>
      {todosArray.map((item, index) => {
        if (item.isEdited === false || item.isEdited === undefined) {
          return (
            <Flex
              key={index}
              opacity={item.isChecked === true ? 0.5 : 1}
              justifyContent='space-between'
              bg='white'
              margin='6px 0px'
              alignItems='center'
              overflow='hidden'
              transitionDuration='0.5s'
              paddingLeft='20px'
              fontSize='22px'
              borderRadius='32px'
              border='none'
              variant='unstyled'
              fontFamily='initial'
              height='50px'
            >
              <Text
                flexGrow={1}
                display='flex'
                justifyContent='flex-start'
                textDecoration={
                  item.isChecked === true ? 'line-through' : 'none'
                }
              >
                {item.text}
              </Text>
              <Box paddingRight='20px'>
                <Button
                  colorScheme='teal'
                  variant='ghost'
                  borderRadius='16px'
                  fontSize='18px'
                  onClick={() => taskCompletionButton(item.id)}
                >
                  ok
                </Button>
                <Button
                  colorScheme='yellow'
                  variant='ghost'
                  borderRadius='16px'
                  fontSize='18px'
                  onClick={() => editTask(item.id)}
                >
                  edit
                </Button>
                <Button
                  colorScheme='red'
                  variant='ghost'
                  borderRadius='16px'
                  fontSize='18px'
                  onClick={() => deleteTask(item.id)}
                >
                  del
                </Button>
              </Box>
            </Flex>
          )
        } else {
          return (
            <Flex
              key={index}
              justifyContent='space-between'
              bg='white'
              margin='6px 0px'
              alignItems='center'
              overflow='hidden'
              transitionDuration='0.5s'
              paddingLeft='20px'
              fontSize='22px'
              borderRadius='32px'
              border='none'
              variant='unstyled'
              fontFamily='initial'
              height='50px'
            >
              <Input
                value={inputForEdit}
                onChange={changeInputForEdit}
                flexGrow={1}
                variant='unstyled'
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                fontSize='22px'
              ></Input>
              <Flex paddingRight='20px'>
                <Button
                  colorScheme='red'
                  variant='ghost'
                  borderRadius='16px'
                  fontSize='18px'
                  onClick={() => cancelEditingForTask(item.id)}
                >
                  cancel
                </Button>
                <Button
                  colorScheme='teal'
                  variant='ghost'
                  borderRadius='16px'
                  fontSize='18px'
                  onClick={() => saveEditedTask(item.id)}
                >
                  ok
                </Button>
              </Flex>
            </Flex>
          )
        }
      })}
    </Box>
  )
}
