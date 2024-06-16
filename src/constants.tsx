import { Eye, LayoutDashboard, LayoutList, Mails } from 'lucide-react';
import { SideNavItem } from './types';


export const SideBarItem: SideNavItem[] = [
    {
        title: "Dashboard",
        path: '/',
        icon : <LayoutDashboard size={24}/>
    },
    {
        title: "Manage",
        path: '/manage',
        icon : <LayoutList size={24}/>,
        submenu: true,
        subMenuItems: [
            {title: "Manage Scholar", path: "/manage/scholar"},
            {title: "Duty Schedule", path: "/manage/duty_schedule"},
            {title: "Manage Announcement", path: "/manage/announcement"},
        ]
    },
    {
        title: "View",
        path: '/view',
        icon : <Eye size={24} />,
        submenu: true,
        subMenuItems: [
            {title: "Duty and Schedule", path: "/view/duty_schedule"},
            {title: "Daily Record", path: "/view/daily_records"},
            {title: "Renewal Records", path: "/view/renewal_records"},
        ]
    },
    {
        title: "Request",
        path: '/request',
        icon : <Mails size={24} />,
        submenu: true,
        subMenuItems: [
            {title: "Renewal Request", path: "/request/renewal"},
            {title: "Re-schedule Request", path: "/request/re-schedule"}
        ]
    },
]