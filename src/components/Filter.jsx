import { Flex, Select } from '@chakra-ui/react'

export const Filter = ({ setTodosArray }) => {
  const filterAllTodos = (valueToFilter) => {
    const todosFromLocal = localStorage.getItem('localTodos')
      ? JSON.parse(localStorage.getItem('localTodos'))
      : []

    if (valueToFilter === 'all') {
      const newArr = [...todosFromLocal]
      setTodosArray(newArr)
    }
    if (valueToFilter === 'active') {
      const newArr = todosFromLocal.filter((item) => item.isChecked === false)
      setTodosArray(newArr)
    }
    if (valueToFilter === 'complite') {
      const newArr = todosFromLocal.filter((item) => item.isChecked === true)
      setTodosArray(newArr)
    }
  }
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      position='relative'
      overflow='hidden'
      borderRadius='30px'
      height='50px'
      _after={{
        content: '"\\25BC"',
        position: 'absolute',
        bg: 'rgb(255, 200, 0)',
        top: '0',
        right: '0',
        padding: '18px',
        pointerEvents: 'none',
        transition: 'all 0.3s ease',
      }}
      _hover={{ _after: { bg: 'white', color: 'rgb(255, 200, 0)' } }}
    >
      <Select
        name='todos'
        onChange={(event) => filterAllTodos(event.target.value)}
        border='none'
        color='rgb(255, 200, 0)'
        bgColor='rgb(255, 255, 255)'
        height='55px'
        width='155px'
        cursor='pointer'
        fontSize='22px'
        fontFamily='initial'
        borderRadius='32px'
        _hover={{ border: 'none' }}
      >
        <option>all</option>
        <option>active</option>
        <option>complite</option>
      </Select>
    </Flex>
  )
}
