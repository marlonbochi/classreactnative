import { createStackNavigator, createAppContainer } from 'react-navigation';

// Pages
import Main from './pages/main';

const AppNavigator = createStackNavigator({
    Main
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFFFFF"
    }
});

export default createAppContainer(AppNavigator);