import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pets from "../pages/Pets";
import Detail from "../pages/Detail";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                name='pets'
                component={Pets}
            />
            <Screen
                name='detail'
                component={Detail}
            />
        </Navigator>
    )
}