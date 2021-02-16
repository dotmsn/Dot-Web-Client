import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';

import SettingsGroupItem from "../components/settings/SettingGroupItem"

import { AiOutlineUser, AiOutlineNotification, AiOutlineEye, AiOutlineLock, AiOutlineInfoCircle } from "react-icons/ai"

export default function Settings (props) {
    return (
        <div>
            <Header title="Settings" {...props} />

            <div className="container">
                <div class="settingContainer">
                    <SettingsGroupItem Icon={AiOutlineUser} url="/settings/account" title="Account"/>
                    <SettingsGroupItem Icon={AiOutlineNotification} url="/settings/notifications" title="Notifications"/>
                    <SettingsGroupItem Icon={AiOutlineEye} url="/settings/appearence" title="Appearence"/>
                    <SettingsGroupItem Icon={AiOutlineLock} url="/settings/privacy" title="Privacy"/>
                    <SettingsGroupItem Icon={AiOutlineInfoCircle} url="/settings/help" title="Help & Support"/>
                </div>
            </div>

            <Navbar {...props} />
        </div>
    )
}