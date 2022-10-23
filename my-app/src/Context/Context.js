import React, { useState } from 'react'
import users from './MockData/UsersData'

const InstFraudContext = React.createContext();

const InstFraudProvider=({children})=> {
    const [InstUsers, setInstaUsers] = useState([]);
    const [isTwittClicked, setIsTwittClicked] = useState(false)
  return (
        <InstFraudContext.Provider value={{
                InstUsers,
                setInstaUsers,
                isTwittClicked,
                setIsTwittClicked,
            }}>
                {children}
        </InstFraudContext.Provider>
  )
}

export {InstFraudContext, InstFraudProvider}