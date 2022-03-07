import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    title: string,
}

function HeaderTittle(props: Props) {
    const {title} = props;

    const {theme} = useContext(ThemeContext);

    const {top} = useSafeAreaInsets();


    return (
        <View style={{marginTop: top + 10, marginBottom: 30, }}>
        <Text style={{...styles.title, color: theme.colors.text}}>
           {title}
        </Text>
    </View>
    )
}

export default HeaderTittle
