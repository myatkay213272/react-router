import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import NewProducts from './components/NewProducts'
import FeacturedProducts from './components/FeacturedProducts'
import User from './components/User'
import UserDetatail from './components/UserDetail'
import Admin from './components/Admin'
import Profile from './components/Profile'
import { AuthProvider } from './components/auth'

const LazyAbout = React.lazy(() => import('./components/About'))

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeacturedProducts />} />
          <Route path="feactured" element={<FeacturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User />}>
          <Route path=":userId" element={<UserDetatail />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
