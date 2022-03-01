import React from 'react'
import { ActivityIndicator, Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useState } from 'react';

interface Props {
    uri: string
}

function FadeInImage(props: Props) {
    const { uri } = props;

    const { opacity, fadeIn } = useAnimation();

    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            {
                isLoading &&
                <ActivityIndicator style={{ position: 'absolute' }} color={'#5856d6'} size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => fadeIn()}
                style={{ width: '100%', height: 400, opacity }}
            />

        </View>
    )
}

export default FadeInImage;
