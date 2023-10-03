import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorComponent = () => {
  const error= useRouteError();
  console.log(error);
  return (
    <div>
    <h1>{error.status}</h1>
    <p>{error.statusText}</p>
    </div>
  )
}

export default ErrorComponent