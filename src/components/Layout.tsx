import React from "react"
import { useNavigate, useParams } from "react-router-dom"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useNavigate()
    const path = useParams()

    const display = React.useMemo(() => {
        if (path.pathname === '/') return false
        else return true
    }, [path])

    return (
        <div className="p-5 space-y-2 h-full">
            <div className="flex justify-evenly items-center space-y-1 relative">
                <h1>ESGI Bloc compétences </h1>
                <div onClick={() => router('/')} className={`${display ? 'hidden' : 'btn'}`}>
                    Retour
                </div>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

