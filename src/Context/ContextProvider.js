import React , {createContext, useContext, useState } from 'react'

const StateContext = createContext()



export const ContextProvider = ({children}) => {

  const [Camera, setCamera] = useState()  
    console.log(Camera);
  return (
    <StateContext.Provider
    value={{
        Camera, setCamera
    }}
    >
   {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)