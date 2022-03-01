import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTittle from '../components/HeaderTittle';
import { useForm } from '../hooks/useForm';

interface Props { }

function TextInputScreen(props: Props) {
    const { } = props;

    const {onChange, form} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTittle title='TextInputs' />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType="email-address"

                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"

                        />

                        <View style={styles.switchContainer}>
                            <Text>
                                Suscribirme
                            </Text>
                            <CustomSwitch
                                isOn={form.isSubscribe} onChangeSwitch={(value) => onChange(value, 'isSubscribe')}
                            />
                        </View>


                        <Text>
                            {JSON.stringify(form, null, 3)}
                        </Text>

                    </View>
                    <View style={{ height: 100 }} />
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

export default TextInputScreen;

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10
    },
    switchContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:20
    }
})
