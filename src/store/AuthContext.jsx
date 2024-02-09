import { createContext } from "react"


const AuthContext = createContext({
  isUserLoggedIn: false,
  logout() {},
  login(token, email) {},
})

AuthContext.displayName = 'MusuAuthCtx'

export default AuthContext;