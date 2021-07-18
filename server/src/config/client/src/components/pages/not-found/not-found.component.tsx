import "./not-found.styles.scss"
import { Header } from '../../header/header.component'

export const NotFound = () => {
  return (
    <>
      <Header />
      <main className='not-found page'>
        <h1>404</h1>
        <h2>Page not found</h2>
      </main>
    </>
  )
}