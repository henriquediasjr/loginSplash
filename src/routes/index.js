import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Invoices from '../pages/Invoices';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="Invoices"
                component={Invoices}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}