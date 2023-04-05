import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const router = useNavigate()
    return (
        <div className="space-x-2">
            <div onClick={() => router('/import')} className="btn cursor-pointer">import</div>
            <div onClick={() => router('/scan')} className="btn cursor-pointer">Scanner</div>
        </div>
    )
}

export default HomePage