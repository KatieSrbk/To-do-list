import './App.css'
import { TodoList } from './components/TodoList'
import { ChakraProvider, ChakraBaseProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </ChakraBaseProvider>
    </ChakraProvider>
  )
}

export default App
