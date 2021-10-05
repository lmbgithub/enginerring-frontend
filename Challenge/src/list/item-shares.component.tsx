import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';

import {
    StyleService,
    useStyleSheet,
    List,
} from '@ui-kitten/components';

export const ItemShares = ({data, ...props}): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    let pieImage = null;
    if ( data.color && data.color === 'red' )
        pieImage = require('../assets/small-pie-red.png');
    else
        pieImage = require('../assets/small-pie-green.png');

    return (
        <View
            style={styles.content} >
            <View
                style={styles.content} >
                <Image
                    style={styles.pie}
                    source={pieImage}
                ></Image>
                <Text style={styles.percentage} >
                    {data.percentage}
                </Text>
            </View>

            <Text style={styles.shares} >
                ≈{data.count} shares
            </Text>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 5,
        marginBottom: 0,
        justifyContent:'space-between',
    },
    
    pie: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },

    percentage: {
        color:'black',
        fontSize:9,
        fontWeight:'bold',
        textAlign:'center',
        position:'absolute',
        top: 25,
        width: 60,
    },

    shares: {
        color: 'black',
        fontSize: 12,
        // fontWeight: 'bold',
        marginBottom:0,
    }

});