import React from "react";
import { getCurrentTabUId, getCurrentTabUrl } from "../../chrome/utils";
import { ChromeMessage, Sender } from "../../types";
import { useNavigate } from "react-router-dom";

interface RowData {
    matiere: string;
    note: string;
}

const ScannerPage = () => {
    const tableRef = React.useRef<HTMLTableElement | null>(null);
    const [tab, setTab] = React.useState<string | null>();
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
                    sender,
                    (response) => {
                        console.log(response);
                        if (response) {
                            setTab(Object.values(response).join(" "));
                        }
                    }
                )
        })
    }

    return (
        <div className="space-x-2">
            <button onClick={handleScanForTable} className="btn btn-primary">Scan for table</button>
            <button onClick={() => router('/results')} className="btn btn-success">Découvrir ma moyenne 🤞</button>
            {tab && (
                <React.Fragment>
                    <pre>{tab}</pre>
                    <table ref={tableRef} className="table"></table>
                </React.Fragment>
            )}
        </div>
    );
};

export default ScannerPage;
