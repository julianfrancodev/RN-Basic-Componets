import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Platform, StyleSheet } from 'react-native';

interface Props {
    isOn: boolean,
    onChangeSwitch:  (value: boolean) => void
}

function CustomSwitch(props: Props) {

    const { isOn, onChangeSwitch } = props;

    const [isEnabled, SetIsEnabled] = useState(isOn);



    const toggleSwitch = () => {
        SetIsEnabled(!isEnabled);
        onChangeSwitch(!isEnabled)
    };

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: "#5856d6" }}
            thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch;


