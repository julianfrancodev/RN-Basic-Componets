import React from 'react'
import { Button, Modal, View, Alert, Text } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

interface Props { }

function ModalScreen(props: Props) {
    const { } = props;

    const [modalVisible, setModalVisible] = useState(false);



    const openModal = () => {

    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTittle title='Modals' />
            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
            >
                <View style={{
                    flex: 1, backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>

                    <View style={{ backgroundColor: 'white', width: 300, height: 300, justifyContent: 'center', alignItems: 'center' }}>
                        <HeaderTittle title='Modal' />
                        <Text style={{ marginBottom: 20 }}>
                            Cuerpo del modal
                        </Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setModalVisible(false)}
                        />

                    </View>

                </View>
            </Modal>
            <Button
                title='Abrir Modal'
                onPress={() => setModalVisible(true)}
            />
        </View>
    )
}

export default ModalScreen
