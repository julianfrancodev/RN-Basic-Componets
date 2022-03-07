import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { ThemeContext } from '../context/theme/ThemeContext';


interface Props {
    menuItem: MenuItem
}

function FlatListMenuItem(props: Props) {
    const { menuItem } = props;

    const {theme} = useContext(ThemeContext);

    const navitagation = useNavigation();

    return (
        <TouchableOpacity
        onPress={()=> navitagation.navigate(menuItem.component as any)}
        >

        
        <View style={styles.container}>
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={theme.colors.primary}
                    size={23}
                />
                <Text style={{...styles.itemText, color: theme.colors.text}}>{menuItem.name}</Text>
            </View>

            <View>
                <Icon
                    name={"chevron-forward-outline"}
                    color={theme.colors.primary}
                    size={23}

                />
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default FlatListMenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between', 
    },
    itemText: {
        marginLeft: 10,
        fontSize: 20
    }
})
