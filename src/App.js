import './App.css'
import { TodoList } from './components/TodoList'
import { ChakraProvider, ChakraBaseProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WonderPage } from './components/WonderPage'
import { ErrorPage } from './components/ErrorPage'
import { AboutPage } from './components/AboutPage'
import { PAGE_URL } from './utils/constants'

const router = createBrowserRouter([
  {
    path: PAGE_URL.TODO_LIST,
    element: <TodoList />,
    errorElement: <ErrorPage />,
  },
  {
    path: PAGE_URL.WONDER,
    element: <WonderPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PAGE_URL.ABOUT,
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PAGE_URL.ERROR,
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
])

function App() {
  return (
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraBaseProvider>
    </ChakraProvider>
  )
}

export default App
