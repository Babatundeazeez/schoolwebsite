import { createContext, useContext, useState } from "react"

export const authContext = createContext()
export const useAuth = () => useContext(authContext)
const AuthProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleLinkBar = () =>{
        if (window.innerWidth < 768){
            setIsNavOpen(false)
            setIsOpen(false)
        }
    }


    const value = {
        isOpen,
        setIsOpen,
        isNavOpen,
        setIsNavOpen,
        handleLinkBar

    }
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}
export default AuthProvider