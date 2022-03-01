import React from 'react'
import { View, Text, Button, Alert } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import prompt from 'react-native-prompt-android';

interface Props {}

function AlertsScreen(props: Props) {
    const {} = props;

    const showAlert = ()=>{
        Alert.alert(
            "Titulo de la alerta",
            "Este el mensaje de alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "destructive"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: ()=> console.log("on Dissmis")
            }
          );
    }


    const showPrompt = ()=>{

        // Alert.prompt(
        //     'Estas seguro?',
        //     'Esta accion no se puede revertir',
        //     (value: string)=> console.log('info:', value),
        //     'login-password'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }

    return (
        <View style={{marginHorizontal: 20}}>
            <HeaderTittle title='Alertas'/>
            <Button
            title='Mostrar Alerta'
            onPress={()=> showAlert()}
            />
            <View style={{height:10}}/>
            <Button
            title='Mostrar Prompt'
            onPress={()=> showPrompt()}
            />
        </View>
    )
}

export default AlertsScreen
