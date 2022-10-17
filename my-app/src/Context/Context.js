import React, { useState } from 'react'
import users from './MockData/UsersData'

const InstFraudContext = React.createContext();

const InstFraudProvider=({children})=> {
    const [InstUsers, setInstaUsers] = useState([])
  return (
        <InstFraudContext.Provider value={{
                InstUsers,
                setInstaUsers,
            }}>
                {children}
        </InstFraudContext.Provider>
  )
}

export {InstFraudContext, InstFraudProvider}