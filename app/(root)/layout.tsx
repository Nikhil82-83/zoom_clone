import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <>
    <h1>header</h1>
    <div>{children}</div>
    <h1>footer</h1>
    </>
  )
}

export default RootLayout