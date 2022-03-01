import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/appTheme';

interface Props {}

function ChangeThemeScreen(props: Props) {
    const {} = props

    return (
        <View style={styles.globalMargin}>
            <HeaderTittle title='Theme'/>

            <TouchableOpacity
            activeOpacity={0.8}
            style={{
                backgroundColor: '#5856d6', 
                justifyContent: 'center',
                width: 150,
                height: 50,
                borderRadius: 10,
                
            }}
            >
                <Text
                style={{color: 'white', textAlign: 'center', fontSize: 22}}
                >
                    Light / Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangeThemeScreen;


