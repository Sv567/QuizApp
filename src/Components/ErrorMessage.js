import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{color:'red'}}>
        {children}
    </div>
  )
}

export default ErrorMessage ;