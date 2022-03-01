import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';


interface Props {
    menuItem: MenuItem
}

function FlatListMenuItem(props: Props) {
    const { menuItem } = props;

    // const {colors} = useTheme();

    const navitagation = useNavigation();

    return (
        <TouchableOpacity
        onPress={()=> navitagation.navigate(menuItem.component as any)}
        >

        
        <View style={styles.container}>
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={'#5856d6'}
                    size={23}
                />
                <Text style={{...styles.itemText}}>{menuItem.name}</Text>
            </View>

            <View>
                <Icon
                    name={"chevron-forward-outline"}
                    color={'#5856d6'}
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
