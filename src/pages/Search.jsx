import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';

import { Input } from "@chakra-ui/react"

export default function Search (props) {
    return (
        <div>
            <Header title="Search" {...props} />

            <div className="searchContainer">
                <Input className="searchInput" variant="flushed" placeholder="@CoolUsername" />
            </div>

            <Navbar {...props} />
        </div>
    );
}
