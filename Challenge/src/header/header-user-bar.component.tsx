import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import {
    StyleService, 
    Button, 
    useStyleSheet 
} from '@ui-kitten/components';

export const HeaderUserBar = (props): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    return (
        <View
            style={styles.content} >
            
            <View style={styles.userBadge}>
                <Image style={styles.userBadgeImage}
                    source={require('../assets/header-user-icon.png')}
                ></Image>
                <Text style={styles.userBadgeText}>{props.userName}</Text>
            </View>

            <View style={styles.button}>
                <Image style={styles.buttonImage}
                    source={require('../assets/header-user-hat.png')}
                ></Image>
            </View>

        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        margin:0,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    userBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        overflow: 'hidden',
        paddingTop:6,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
        width:'auto',
        flexDirection:'row',
        alignItems: 'center',
    },

    userBadgeImage: {
        width: 20,
        height:20,
        resizeMode:"contain",
    },

    userBadgeText: {
        color: 'white',
        marginLeft:10,
        fontSize:15,
        fontWeight:'bold',
        maxWidth:200,
        overflow:'hidden',
    },

    button: {
        backgroundColor:'#E9E7FE',
        padding:5,
        borderRadius: 10,
        overflow: 'hidden',
    },

    buttonImage: {
        width:20,
        height:20,
    }

});
