import { openContractCall } from "@stacks/connect";
import { networkType, myStxAddress } from "./auth"; // the auth file is provided to you

// All possible Helper Functions to Convert to Clarity Values

import {
    callReadOnlyFunction,
    trueCV,
    falseCV,
    stringAsciiCV,
    noneCV,
    someCV,
    intCV,
    uintCV,
    standardPrincipalCV,
    contractPrincipalCV,
    responseErrorCV,
    responseOkCV,
    cvToJSON,
    listCV,
    tupleCV,
    bufferCV,
    FungibleConditionCode,
    makeStandardSTXPostCondition,
} from "@stacks/transactions";


// template function for calling read-only function
async function appCallReadOnlyFunction(optionsProps) {

    // if no function details provided
    if (!optionsProps)
        return new Promise((resolve, reject) => reject("no arguments provided"));

    const options = {
        ...optionsProps,
        network: networkType(),
        senderAddress: myStxAddress(),
    };

    return callReadOnlyFunction(options)
        .then((response) => {
            const responseJson = cvToJSON(response);

            return new Promise((resolve, reject) => resolve(responseJson));
        })
        .catch((e) => {
            return new Promise((resolve, reject) => reject(e));
        });
}

// template function for calling public function
async function appCallPublicFunction(optionsProps) {

    // if no function details provided
    if (!optionsProps)
        return new Promise((resolve, reject) => reject("no arguments provided"));

    const options = {
        ...optionsProps,
        network: networkType(),
        appDetails: {
            name: "YourAppName",
            icon: window.location.origin + "/YourAppLogo.svg",
        },
        senderAddress: myStxAddress(),
    };


    openContractCall(options);

};

export async function CallFunction(Args) {

    try {

        // Convert your function arguments to Clarity type first. Write them in order as you have written in your smart contract
        const functionArgs = [
            standardPrincipalCV(myStxAddress()), // JS String to Clarity Principal
            stringAsciiCV("String"),  // JS String to Clarity Ascii String
            uintCV(1), // JS Unsigned Int to Clarity uint
            intCV(-1), // JS Signed Int to Clarity int
            listCV([trueCV(), falseCV()]), // list of same data type
            someCV("String") // Optional Clarity Value
        ];

        // In Case you are transfering STX/NFT, you must pass Post Conditions in the 'options' declared below
        // More About Post Conditions at the end of this page: https://www.npmjs.com/package/@stacks/transactions

        const postConditionAddress = myStxAddress(); // The STX Address who will perform this perform condition
        const postConditionCode = FungibleConditionCode.GreaterEqual; // The Post Condition Logic
        const postConditionAmount = uintCV(0).value; // The amount that must be transferred or else the transaction will roll back

        const postConditions = [
          makeStandardSTXPostCondition(postConditionAddress, postConditionCode, postConditionAmount),
        ];

        // In case of No Function Parameters 

        // const functionArgs = [];

        const options = {
            contractAddress: "ContractDeployerSTXAddress", // The STX Address of the account who deployed the contract
            contractName: "ContractName", // The Contract Name used when deployed on the network
            functionName: "FunctionName", // The Function Name you want to call from the smart contract
            functionArgs, // The 'functionArgs' array, writted above and passed here automatically
            // postConditions, // un-comment this if your function is transfering stx/nft.
        }

        const ReadOnlyResponse = await callReadOnlyFunction(options); // return value from Read Only Function
        const PublicResponse = await appCallPublicFunction(options); // return value from Public Function

        console.log(ReadOnlyResponse);
        console.log(PublicResponse);
    }

    catch (err) {
        console.log(err);
        return;
    }

}