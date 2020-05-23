import { createDrawerNavigator} from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import HomeStack from "./homeStack"
import AboutStack from "./aboutStack"


const screens = {
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    }
}

const rootHomeNavigator = createDrawerNavigator(screens);

export default createAppContainer(rootHomeNavigator);
