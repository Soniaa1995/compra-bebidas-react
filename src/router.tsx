import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import {lazy, Suspense} from 'react'
const FavoritePages = lazy(() => import('./pages/FavoritePages'))
const IndexPage = lazy(() => import('./pages/IndexPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={
                <Suspense fallback='Cargando..'>
                    <IndexPage />
                </Suspense>
              }/>
              <Route path="/favoritos" element={
                <Suspense fallback='Cargando..'>
                    <FavoritePages />
                </Suspense>
              } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
