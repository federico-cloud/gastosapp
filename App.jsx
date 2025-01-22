import { Route, Routes } from "react-router"
import { DashboardLayout } from "./layouts"

export const App = () => {
  return (
    <Routes>
      {/* Rutas del Dashboard */}
      <Route path="/" element={ <Home /> } />
      <Route element={ <DashboardLayout /> }>
        {/* <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/expenses" element={<Expenses />} />
        <Route path="/dashboard/settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  )
}
