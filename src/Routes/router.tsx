import { Layout } from "../components/Layout"
import React from "react"
import { Routes, Route } from "react-router-dom"

const HomePage = React.lazy(() => import("../pages/home"))
const ImportPage = React.lazy(() => import("../pages/import"))
const ScannerPage = React.lazy(() => import("../pages/scan"))
const ResultsPage = React.lazy(() => import("../pages/results"))

const Router: React.FC = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/import" element={<ImportPage />} />
                    <Route path="/scan" element={<ScannerPage />} />
                    <Route path="/results" element={<ResultsPage />} />
                </Routes>
            </Layout>
        </React.Suspense>
    )
}


export default Router