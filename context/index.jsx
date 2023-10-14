import { createContext } from 'react'

const init = {
  updated: false,
  setUpdated: () => {}
}

export const CreateContext = createContext(init)
