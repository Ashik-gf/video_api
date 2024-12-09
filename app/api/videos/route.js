import { getAllvideos } from "@/lib/videos-data";
import { NextResponse } from "next/server";

export const GET = async () => {
    const data = await getAllvideos();
    return NextResponse.json(data);
}