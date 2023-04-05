import { CollapseResults } from "../../components/CollapseResults"
import React from "react"

const ResultsPage = () => {
    const tresults = [
        { blocName: "Bloc 1", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: true }], valid: true },
        { blocName: "Bloc 2", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: true }], valid: true },
        { blocName: "Bloc 3", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: false }], valid: false },
        { blocName: "Bloc 4", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: true }], valid: true },
        { blocName: "Bloc 5", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: false }], valid: false },
        { blocName: "Bloc 6", blocResults: [{ matiere: "Matiere 1", moyenne: 12, valid: true }, { matiere: "Matiere 2", moyenne: 12, valid: true }], valid: true },
    ]
    return (
        <div>
            <h1>Results</h1>
            <div className="space-y-3">
                {tresults.map((result) => (
                    <CollapseResults blocName={result.blocName} blocResults={result.blocResults} valid={result.valid} />
                ))}
            </div>
        </div>
    )
}


export default ResultsPage