import './App.css'
import { TodoList } from './components/TodoList'
import {
  ChakraProvider,
  ChakraBaseProvider,
  extendBaseTheme,
} from '@chakra-ui/react'

const theme = extendBaseTheme({})

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
