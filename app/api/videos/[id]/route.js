import { deleteVideoById, getPhotoById, updateData } from "@/lib/videos-data";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const videoId = params?.id;
    const data = await getPhotoById(videoId);
    return NextResponse.json(data);
}
export async function PATCH(request, { params }) {
    const videoId = params?.id;
    const data = await updateData(videoId, request)
    return NextResponse.json(data);
}
export async function DELETE(request, { params }) {
    const videoId = params?.id;
    const data = await deleteVideoById(videoId);
    return NextResponse.json(data)
}
