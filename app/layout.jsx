import './globals.css';

import SideBar from './(SideBar)/SideBar';
import Providers from './(components)/(Provider)/Provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <body>
          <Providers >
            <SideBar />
            {children}
            <div id='portal' ></div>
            <div id='modalBackdrop' ></div>
          </Providers>
          
        </body>
    </html>
  )
}
