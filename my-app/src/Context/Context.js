import React, { useState } from 'react'
import users from './MockData/UsersData'

const InstFraudContext = React.createContext();

const InstFraudProvider=({children})=> {
    const [InstUsers, setInstaUsers] = useState([]);
    const [registerClicked, setRegisterClicked] = useState(false)
    const [isTwittClicked, setIsTwittClicked] = useState(false)

    
  return (
        <InstFraudContext.Provider value={{
                InstUsers,
                setInstaUsers,
                registerClicked, 
                setRegisterClicked,
                isTwittClicked,
                setIsTwittClicked,
            }}>
                {children}
        </InstFraudContext.Provider>
  )
}

export {InstFraudContext, InstFraudProvider}