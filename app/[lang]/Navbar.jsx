
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "./dictionaries/distionaries";

const Navbar = async ({ lang }) => {
    const dictonary = await getDictionary(lang)
    return (
        <header className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-8">
                <Image
                    width={100}
                    height={165}
                    src="/logo.svg"
                    alt="LWS Xstream Logo"
                    className="h-6" />
                <nav className=" hidden md:flex space-x-6">
                    <Link href="/blog" className="text-color-purple font-semibold">{dictonary.top}</Link>
                    <Link href="/home" className="text-gray-400 hover:text-white">{dictonary.game}</Link>
                    <Link href="/go" className="text-gray-400 hover:text-white">{dictonary.teams}</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <div className="relative">
                    <input type="text" placeholder="Search"
                        className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple" />
                    <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
                <Image
                    width={100}
                    height={165}
                    src="/avatar.png"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full" />
            </div>
        </header>
    )
}

export default Navbar