import React from "react";
import { getCurrentTabUId, getCurrentTabUrl } from "../../chrome/utils";
import { ChromeMessage, Sender } from "../../types";
import { useNavigate } from "react-router-dom";

interface RowData {
    matiere: string;
    note: string;
}

const ScannerPage = () => {
    const [tableData, setTableData] = React.useState<RowData[]>([]);
    const router = useNavigate();

    const sender: ChromeMessage = {
        message: "scan",
        from: Sender.React,
    };

    const handleScanForTable = () => {
        getCurrentTabUId((id) => {
            id &&
                chrome.tabs.sendMessage(
                    id,
                    { message: "findTable" },
                    (response) => {
                        console.log(response);
                        if (response && response.tableData) {
                            setTableData(response.tableData);
                        }
                    }
                )
        })
    }

    return (
        <div className="space-x-2">
            <button onClick={handleScanForTable} className="btn btn-primary">Scan for table</button>
            <button onClick={() => router('/results')} className="btn btn-success">Découvrir ma moyenne 🤞</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Matière</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr>
                            <td>{row.matiere}</td>
                            <td>{row.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScannerPage;
