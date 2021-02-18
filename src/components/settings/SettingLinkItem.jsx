import { Text } from "@chakra-ui/react";
import styles from "./settings.module.sass";

export default function SettingLinkItem ({ url, title, Icon }) {

    return (
        <a href={ url } target="_blank" rel="noreferrer">
            <div className={styles.settingGroup}>
                <div className={styles.leftSide}>
                    <Icon size={30} />
                    <Text className={styles["settingLabel"]}>{title}</Text>
                </div>
            </div>
        </a>
    )

}