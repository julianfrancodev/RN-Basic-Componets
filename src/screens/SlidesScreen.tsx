import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props { }

const { width, height } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

function SlidesScreen(props: Props) {

    const [activeIndex, setActiveIndex] = useState(0);

    const { } = props


    const renderItem = (item: Slide) => {

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.subtitle}>
                    {item.desc}
                </Text>
            </View>
        )

    }

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 50 }}
        >

            <Carousel
                //   ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={width}
                itemWidth={height}
                layout='default'
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                }}
            />

            <View style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center'
                }} >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: '#5856d6'
                    }}
                />
                {
                    activeIndex === items.length - 1 ?
                    (
                        <TouchableOpacity
                        onPress={()=> console.log("hola")}
                        activeOpacity={0.8}
                         style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856d6',
                            width: 140,
                            height: 50,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
        
                            <Text style={{ fontSize: 24, color: 'white', marginRight: 5 }}>
                                Ingresar
                            </Text>
                            <Icon
                                color={'white'}
                                size={30}
                                name='arrow-forward-circle-outline'
                            />
        
                        </TouchableOpacity>
                    ):
                    (
                       null
                    )
                }

              

            </View>


        </SafeAreaView>
    )
}

export default SlidesScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6'
    },
    subtitle: {
        fontSize: 16,

    }
})
