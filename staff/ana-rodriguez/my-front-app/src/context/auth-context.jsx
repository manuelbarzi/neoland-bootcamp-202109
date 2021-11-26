import React, {createContext} from 'react'

const authContext = createContext({
    token: '',
  setToken: () => {},
})

export default authContext