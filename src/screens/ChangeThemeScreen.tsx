import React, { useContext } from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {}

function ChangeThemeScreen(props: Props) {
    const {} = props;


    const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTittle title='Theme'/>
            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                marginHorizontal: 10
                }}>

            <TouchableOpacity
            onPress={()=> setDarkTheme()}
            activeOpacity={0.8}
            style={{
                backgroundColor: theme.colors.primary, 
                justifyContent: 'center',
                width: 150,
                height: 50,
                borderRadius: 10,
                
            }}
            >
                <Text
                style={{color: 'white', textAlign: 'center', fontSize: 22}}
                >
                    Dark
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> setLightTheme()}
            activeOpacity={0.8}
            style={{
                backgroundColor: theme.colors.primary, 
                justifyContent: 'center',
                width: 150,
                height: 50,
                borderRadius: 10,
                
            }}
            >
                <Text
                style={{color: 'white', textAlign: 'center', fontSize: 22}}
                >
                    Light
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChangeThemeScreen;


