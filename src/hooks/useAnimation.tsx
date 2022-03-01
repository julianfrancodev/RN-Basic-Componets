import { useRef } from "react";
import { Animated, Easing } from 'react-native';


export const useAnimation = ()=>{

    const opacity = useRef(new Animated.Value(0.4)).current;
    const position = useRef (new Animated.Value(0)).current;

    const fadeIn = ()=>{
        Animated.timing(
            opacity,
            {
                toValue: 1,
                useNativeDriver: true
            }
        ).start();
    }
    const fadeOut = ()=>{
        Animated.timing(
            opacity,
            {
                toValue: 0.2,
                useNativeDriver: true
            }
        ).start();

        
    }

    const startMovingPosition = ( initPosition: number )=>{

        position.setValue(initPosition);

        Animated.timing(
            position,
            {
                toValue:0,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        ).start();
    }


    return {
        opacity, 
        position, 
        fadeIn,
        fadeOut, 
        startMovingPosition
    }

}