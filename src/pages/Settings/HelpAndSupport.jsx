import Header from '../../components/layout/Header';
import Navbar from '../../components/layout/Navbar';

import SettingsLinkItem from "../../components/settings/SettingLinkItem"

import { AiOutlineMail } from "react-icons/ai"
import { FaPatreon, FaGithub } from "react-icons/fa"

export default function HelpAndSupport (props) {
    return (
        <div>
            <Header title="Help and Support" {...props} />

            <div className="container">
                <div className="settingContainer">
                    <SettingsLinkItem Icon={AiOutlineMail} url="https://twitter.com/sammwy" title="Contact with me"/>
                    <SettingsLinkItem Icon={FaGithub} url="https://github.com/dotmsn" title="Github repository"/>
                    <SettingsLinkItem Icon={FaPatreon} url="https://patreon.com/dotmsn" title="Support us on Patreon"/>
                </div>
            </div>

            <Navbar {...props} />
        </div>
    )
}