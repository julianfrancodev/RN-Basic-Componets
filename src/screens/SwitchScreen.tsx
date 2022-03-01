import React, { useState } from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTittle from '../components/HeaderTittle';

interface Props {
}

function SwitchScreen(props: Props) {
    const {} = props;

    const [state, setstate] = useState({
        isActive: false,
        isHungry: false,
        isHappy: true
    });

    const onChange = (value: boolean, field: string)=>{
        setstate({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{marginHorizontal: 20}}>
            <HeaderTittle title='Switch'/>

            <View style={styles.switchRow}>

                <Text style={styles.switchText}>isActive</Text>

                <CustomSwitch isOn={state.isActive} onChangeSwitch={(value)=> onChange(value, 'isActive')}/>
                <CustomSwitch isOn={state.isHappy} onChangeSwitch={(value)=> onChange(value, 'isHappy')}/>
                <CustomSwitch isOn={state.isHungry} onChangeSwitch={(value)=> onChange(value, 'isHungry')}/>

            </View>

            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>
            
        </View>
    )
}



export default SwitchScreen;

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
