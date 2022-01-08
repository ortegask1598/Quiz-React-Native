import React from 'react';
import {View} from 'react-native';


export default function Finished(props) {

    return(
        <>
        <View className='score'>Tu puntuación es: {props.score}</View>
        </>
    );
}
