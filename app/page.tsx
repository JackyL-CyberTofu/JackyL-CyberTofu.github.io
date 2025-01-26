import React from "react";
import FrontPage from "@/components/main/front_page";
import InfoPage from "@/components/main/InfoPage";
import SidebarIcons from "@/components/common/SidebarIcons";

export default function MyPage() {
    return (
        <div className="relative min-h-screen flex">

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                {/* First container keeps its styles if you want FrontPage centered */}
                <div className="min-h-screen flex items-center justify-center ml-8 mr-8">
                    <FrontPage />
                </div>

                {/* Second container with fixed width */}
                <div className="min-h-screen flex justify-center">
                    <div className="w-full max-w-6xl">
                        <InfoPage />
                    </div>
                </div>

            </div>

            {/* Sidebar */}
            <SidebarIcons/>
        </div>
    );
}