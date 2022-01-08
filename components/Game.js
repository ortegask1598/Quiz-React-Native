import React from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';


export default function Game(props) {
    const fotoquizurl = (props.quiz.attachment) ? props.quiz.attachment.url : 'https://images5.memedroid.com/images/UPLOADED2/50dda4c4d2e08.jpeg';
    const fotoautorurl = (props.quiz.author) ? props.quiz.author.photo.url : 'https://es.web.img3.acsta.net/r_654_368/newsv7/19/01/15/15/29/1148475.jpg';

    return (
    <>
    <View>{props.quiz.question}</View>
    <Image source={{uri: {fotoquizurl}}}></Image>
    <TextInput style={} onChangeText={(ans) => props.save(ans)} placeholder='Respuesta'></TextInput>
    <input  type="text" id="answer" placeholder="Answer"></input>
    <Image source={{uri: {fotoautorurl}}}></Image>
    <Text > {props.quiz.author.username ? props.quiz.author.username : 'Anónimo'} </Text>
    <View>
        <TouchableHighlight onPress={props.previous}>
            <Text>Anterior</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={props.next}>
            <Text>Siguiente</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={props.submit}>
            <Text>Enviar</Text>
        </TouchableHighlight>

    </View>
    </>
    );
}
    