import React from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTittle from '../components/HeaderTittle';
import ItemSeparator from '../components/ItemSeparator';
interface Props { }


function HomeScreen(props: Props) {

    const { } = props

    const renderListHeader = () => {
        return (
           <HeaderTittle title='Opciones del menu'/>
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>



            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={ ()=> renderListHeader()}
                ItemSeparatorComponent={()=> <ItemSeparator/> }
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default HomeScreen
