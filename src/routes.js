import { createStackNavigator, createAppContainer } from 'react-navigation';

// Pages
import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
    Main,
    Product
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFFFFF"
    }
});

export default createAppContainer(AppNavigator);