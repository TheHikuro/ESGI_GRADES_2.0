import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi"


type BlocResult = {
    matiere: string;
    moyenne: number;
    valid: boolean;
}

interface CollapseResults {
    blocName: string;
    blocResults: BlocResult[];
    valid: boolean;
}

export const CollapseResults = ({ blocName, blocResults, valid }: CollapseResults) => {
    return (
        <Disclosure as="div" key={blocName}>
            {({ open }) => (
                <React.Fragment>
                    <Disclosure.Button className={`flex justify-between w-full px-4 py-5 text-sm font-medium text-left text-gray-900 ${valid ? 'bg-green-500' : 'bg-red-500'} bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                        <span>{blocName}</span>
                        <FiChevronDown
                            className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500 ease-in-out duration-150`}
                        />
                    </Disclosure.Button>
                    <Transition
                        show={open}
                        enter="transition ease-out duration-125"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm text-gray-500 space-y-2">
                            {blocResults.map((result) => (
                                <div key={result.matiere} className="flex justify-evenly py-2 drop-shadow-md rounded-lg bg-white">
                                    <p>{result.matiere}</p>
                                    <p>{result.moyenne}</p>
                                    <p>{result.valid ? "✅" : "❌"}</p>
                                </div>
                            ))}
                        </Disclosure.Panel>
                    </Transition>
                </React.Fragment>
            )}
        </Disclosure>
    )
}
