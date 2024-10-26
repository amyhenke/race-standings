import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import DriversPage from './pages/DriversPage'
import DriverPage from './pages/DriverPage'
import NotFoundPage from './pages/NotFoundPage'
import StandingsPage from './pages/StandingsPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/standings" element={<StandingsPage />} />
                <Route path="/drivers" element={<DriversPage />} />
                <Route path="/driver/:id" element={<DriverPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </>
    )
  )
  return <RouterProvider router={router} />
}

export default App
