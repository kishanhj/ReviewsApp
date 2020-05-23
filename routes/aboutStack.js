import { createStackNavigator} from "react-navigation-stack"
import About from "../screens/About"
import React from "react"
import Header from "../shared/Header"

const screens = {
    About : {
        screen : About,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle :   () => ( <Header navigation = {navigation}  title = "About" />)   }
        }
    }
}

const aboutStack = createStackNavigator(screens,{
    defaultNavigationOptions : {
        headerTintColor : "#444",
        headerStyle : {
            backgroundColor : "#eee",
            height : 60
        }
    }});

export default aboutStack;