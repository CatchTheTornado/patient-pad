import ServerPatientRepository from "@/data/server/server-patient-repository";
import { genericDELETE, getDatabaseIdHash } from "@/lib/generic-api";

export async function DELETE(request: Request, { params }: { params: { id: number }} ) {
    const recordLocator = params.id;
    if(!recordLocator){
        return Response.json({ message: "Invalid request, no id provided within request url", status: 400 }, {status: 400});
    } else { 
        return Response.json(await genericDELETE(request, new ServerPatientRepository(getDatabaseIdHash(request)), { id: recordLocator}));
    }
}