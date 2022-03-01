import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';

interface Props { }

function InfiniteScrollScreen(props: Props) {
    const { } = props;

    const [numbers, setnumbers] = useState([0, 1, 2, 3, 4, 5, 6]);


    const loadMore = () => {

        const newArray: number[] = [];

        for (let index = 0; index < 5; index++) {
           
            newArray[index] = numbers.length + index;
            
        }

        setTimeout(() => {
            setnumbers([...numbers, ...newArray]);
        }, 1500);


    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`}/>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <HeaderTittle title='Infinite Scroll' />}
                onEndReached={() => loadMore()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={()=> (
                    <View style={{height: 100, justifyContent:'center', alignItems:'center', width:'100%'}}>
                        <ActivityIndicator size={20} color='#5856d6'/>
                    </View>
                )}
            />

        </View>
    )
}

export default InfiniteScrollScreen;

const styles = StyleSheet.create({
    textItem: {
        height: 150
    }
})
