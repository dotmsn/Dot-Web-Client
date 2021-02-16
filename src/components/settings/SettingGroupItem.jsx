import { LinkBox, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./settings.module.sass";

export default function SettingsGroupItem ({ url, title, Icon }) {

    return (
        <LinkBox to={ url }>
            <div className={styles.settingGroup}>
                <div className={styles.leftSide}>
                    <Icon size={30} />
                    <Text className={styles["settingLabel"]}>{title}</Text>
                </div>

                <div className={styles.rightSide}>
                    <AiOutlineArrowRight size={30}/>
                </div>
            </div>
        </LinkBox>
    )

}