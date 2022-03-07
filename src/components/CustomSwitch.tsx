import React, { useContext, useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Platform, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean,
    onChangeSwitch:  (value: boolean) => void
}

function CustomSwitch(props: Props) {

    const {theme} = useContext(ThemeContext);

    const { isOn, onChangeSwitch } = props;

    const [isEnabled, SetIsEnabled] = useState(isOn);



    const toggleSwitch = () => {
        SetIsEnabled(!isEnabled);
        onChangeSwitch(!isEnabled)
    };

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: theme.colors.primary }}
            thumbColor={(Platform.OS === 'android') ? '#5856d6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch;


