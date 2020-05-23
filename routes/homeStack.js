import { createStackNavigator} from "react-navigation-stack"
import Home from "../screens/Home"
import Review from "../screens/Review"
import React from "react"
import Header from "../shared/Header"

const screens = {
    Home : {
        screen : Home,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle :   () => ( <Header navigation = {navigation}  title = "GameZone" />)   }
        }
    },
    Review : {
        screen : Review
    }
}

const homeStack = createStackNavigator(screens,{
    defaultNavigationOptions : {
        headerTintColor : "#444",
        headerStyle : {
            backgroundColor : "#eee",
            height : 60
        }
    }});

export default homeStack;