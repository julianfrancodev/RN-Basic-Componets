import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    title: string,
}

function HeaderTittle(props: Props) {
    const {title} = props;

    const {top} = useSafeAreaInsets();


    return (
        <View style={{marginTop: top + 10, marginBottom: 30, }}>
        <Text style={{...styles.title, color: 'black'}}>
           {title}
        </Text>
    </View>
    )
}

export default HeaderTittle
