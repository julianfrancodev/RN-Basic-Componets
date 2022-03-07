import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {}

function PullToRefreshScreen(props: Props) {
    const {} = props;

    const {theme} = useContext(ThemeContext);

    const [refreshing, setrefreshing] = useState(false);
    const [data, setdata] = useState<string>();

    const onRefresh = ()=>{
        setrefreshing(true);

        setTimeout(() => {
            console.log("Terminamos");
            setrefreshing(false);
            setdata('Hola Mundo')
        }, 1500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={()=> onRefresh()}
                    style={{backgroundColor: 'orange'}}
                    tintColor="white"
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTittle title='Pull To Refresh'/>

                <Text style={{color: theme.colors.text}}>
                    {data}
                </Text>
            </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen
