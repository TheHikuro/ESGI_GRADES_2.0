import { ChromeMessage, Sender } from "../types";
import { getCurrentTabUId } from "./utils";

type MessageResponse = (response?: any) => void;

const validateSender = (
    message: ChromeMessage,
    sender: chrome.runtime.MessageSender
) => {
    return sender.id === chrome.runtime.id && message.from === Sender.React;
};

const messagesFromReactAppListener = (
    message: ChromeMessage,
    sender: chrome.runtime.MessageSender,
    response: MessageResponse
) => {
    const isValidated = validateSender(message, sender);

    if (!isValidated) return;

    switch (message.message) {
        case "scan":
            const fromDom = {
                table: document.querySelector('#marksForm\\:marksWidget\\:coursesTable'),
            }
            chrome.runtime.sendMessage({
                from: Sender.Content,
                message: "scan",
                data: {
                    uid: getCurrentTabUId((id) => id),
                    table: fromDom.table,
                },
            });
            response(fromDom);
            break;
        default:
            break;
    }
};

const main = () => {
    console.log("[content.ts] Main");
    console.log(document.querySelector('#marksForm\\:marksWidget\\:coursesTable'))
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log(message, sender, sendResponse)
        chrome.runtime.sendMessage({
            from: Sender.Content,
            message: "scan",
            data: {
                uid: getCurrentTabUId((id) => id),
                table: document.querySelector('#marksForm\\:marksWidget\\:coursesTable'),
            },
        });
    });
    /**
     * Fired when a message is sent from either an extension process or a content script.
     */
    chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
};

main();
