import './App.css'
import { TodoList } from './components/TodoList'
import { ChakraProvider, ChakraBaseProvider } from '@chakra-ui/react'
import theme from './styles/theme'

function App() {
  return (
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <TodoList />
      </ChakraBaseProvider>
    </ChakraProvider>
  )
}

export default App
