import Image from "next/image";
import SideBar from "../components/AdminComponents/SideBar";
import assets from "../assets/assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark"/>
                
                <SideBar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <div className="font-medium ">Admin Panel</div>
                        <Image src={assets.author_image} width={40} />
                    </div>
                    {children}
                </div>
            </div>



        </>
    )
}