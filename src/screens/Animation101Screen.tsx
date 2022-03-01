import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {}

function Animation101Screen(props: Props) {
    const {} = props;

   const {fadeIn, fadeOut, opacity, position, startMovingPosition} = useAnimation();


    return (
        <View style={styles.container}>

            <Animated.View
            style={{
                ...styles.purpleBox, 
                opacity: opacity,
                transform: [{
                    translateY: position
                }]
            }}
            />

            <Button
            title='FadeIn'
            onPress={()=> {
                fadeIn();
                startMovingPosition(100);

            }}
            />

            <Button
            title='fadeOut'
            onPress={()=> fadeOut()}
            />

            

        </View>
    )
}

export default Animation101Screen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: "center"
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150
    }
})
