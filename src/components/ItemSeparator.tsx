import React from 'react'
import { View } from 'react-native';

interface Props { }

function ItemSeparator(props: Props) {
    const { } = props

    return (
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical: 25
            }}
        />
    )
}

export default ItemSeparator
