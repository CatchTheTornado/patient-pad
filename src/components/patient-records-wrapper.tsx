import { useContext } from "react";
import NewPatientRecord from "./patient-record-form";
import PatientRecordList from "./patient-record-list";
import { PatientContext } from "@/contexts/patient-context";
import DatabaseLinkAlert from "./shared/database-link-alert";
import { ConfigContext } from "@/contexts/config-context";
import { NoRecordsAlert } from "./shared/no-records-alert";
import { ListIcon } from "lucide-react";

export default function PatientRecordsWrapper({}) {
  const patientContext = useContext(PatientContext);
  const configContext = useContext(ConfigContext);
  return (
    <div className="grid min-h-screen w-full bg-zinc-100 dark:bg-zinc-950">
      <div className="p-6">
        { (patientContext?.currentPatient !== null) ? (
          <div>
            <div className="flex-1 overflow-auto">
              <div className="grid gap-6">
                { (configContext?.dataLinkStatus.isReady()) ? (
                  <PatientRecordList key={0} patient={patientContext?.currentPatient} />
                ) : (
                  <DatabaseLinkAlert />
                ) }
              </div>
            </div>
          </div>
        ) : (
        <NoRecordsAlert title="No patients found">
          <div className="flex items-center">Please do select current patient using the <ListIcon className="flex ml-4 mr-4" /> icon above.</div>
        </NoRecordsAlert>          
        ) }
      </div>
    </div>
  )
}