import { ConfigContextType } from "@/contexts/config-context";
import { PatientRecord } from "../client/models";

type PromptContext = {
    record?: PatientRecord;
    config?: ConfigContextType | null;
}
export const prompts = {
    patientRecordParse: (context: PromptContext) => {
        return 'This is my health result data. Please parse it to JSON array AND covnert to markdown text. \
                First: JSON should be all in original language. \
                Each medical record should a row of returned JSON array, for example: \
                [ { type: "blood_results", subtype: "morphology", findings: [], ... }, {type: "mri", subtype: "head mri", ...}]. \
                Include the type of this results in english (eg. "blood_results", "rmi") in "type" key of JSON and then more detailed type in "subtype" key.  \
                Include the language of the document inside "language" key.  If the result is single block of text please try additionaly to saving text result  \
                extract very detailed and all features from it and put it as an array under "findings" key. Second: Markdown text - please do kind of OCR - so convert all the \
                attachments to text, as detailed as you can. Please use markdown to format it nicely and return after JSON object, \
                wrap it with  ```markdown on start and  ``` on end of the text. This part should be in the language of the document itself'
    },
    patientRecordIntoChat: (context: PromptContext) => {
        return 'This is my health result data in JSON format: ```\n\n' + JSON.stringify(context.record.json) + '\n\n```. \nJSON Please describe the results in plain language markdown. This part should be in the language of the document itself. Note all exceptions from the norm and tell me what it could mean?"'
    } 
};