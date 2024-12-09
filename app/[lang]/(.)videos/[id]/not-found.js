"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


const SingleNotFound = () => {
    const pathname = usePathname();
    const videoId = pathname.split('/').pop();
    return (
        <div className="  h-full w-full flex justify-center items-center">
            <div className=" flex justify-center items-center gap-4 h-[300px] lg:h-[400px] w-[300px] sm:w-[500px] ">
                <p>"This video with
                    <span className=" px-1 text-red-500 font-semibold">
                        {videoId}
                    </span>id was not found!"</p>
                <Link href={'/'}>
                    <button className="px-2 py-3 rounded-md text-white border-2 border-green-500">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleNotFound;
