import { ConfigDTO, configDTOSchema } from "@/data/dto";
import ServerConfigRepository from "@/data/server/server-config-repository";
import { genericDELETE, genericGET, genericPUT, getDatabaseId } from "@/lib/generic-api";
import { NextRequest } from "next/server";

export async function PUT(request: Request) {
    const apiResult = await genericPUT<ConfigDTO>(await request.json(), configDTOSchema, new ServerConfigRepository(getDatabaseId(request)), 'key');
    return Response.json(apiResult, { status: apiResult.status });
}

export async function GET(request: NextRequest) {
    return Response.json(await genericGET<ConfigDTO>(request, new ServerConfigRepository(getDatabaseId(request))));
}

// clear all configuration
export async function DELETE(request: Request) {
    const allConfigs = await genericGET<ConfigDTO>(request, new ServerConfigRepository(getDatabaseId(request)));
    if(allConfigs.length <= 1){
        return Response.json({ message: "Cannot delete the last configuration", status: 400 }, {status: 400});
    } else {
        const deleteResults = [];
        for(const config of allConfigs){
            deleteResults.push(await genericDELETE(request, new ServerConfigRepository(getDatabaseId(request)), { key: config.key}));
        }
        return Response.json({ message: 'Configuration cleared!', data: deleteResults, status: 200 }, { status: 200 });
    }
}