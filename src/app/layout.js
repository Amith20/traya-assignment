import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
