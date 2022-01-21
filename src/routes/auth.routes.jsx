import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../screens/Home'
import {UserHome} from '../screens/UserHome'
import { Register } from '../screens/Register';
import { SignIn } from '../screens/SignIn';
import { AddWarnings } from '../screens/AddWarnings';
import {RemoveWarnings} from '../screens/RemoveWarnings';
import { EditWarnings } from '../screens/EditWarnings';
import { EditSelectedWarning } from '../screens/EditSelectedWarning';
const {Navigator,Screen} = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home}/>
            <Screen name="Register" component={Register}/>
            <Screen name="UserHome" component={UserHome}/>
            <Screen name="AddWarnings" component={AddWarnings}/>
            <Screen name="RemoveWarnings" component={RemoveWarnings}/>
            <Screen name="EditWarnings" component={EditWarnings}/>
            <Screen name="EditSelectedWarning" component={EditSelectedWarning}/>
        </Navigator>
    )
}
