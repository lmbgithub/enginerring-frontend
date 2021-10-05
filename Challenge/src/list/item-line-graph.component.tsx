import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import {
    StyleService,
    useStyleSheet,
} from '@ui-kitten/components';

export const ItemLineGraph = ({data,...props}): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    let image = '';
    if ( data.color === 'blue' )
        image = require('../assets/line-graph-blue.png');
    else if (data.color === 'green')
        image = require('../assets/line-graph-green.png');
    else
        image = require('../assets/line-graph-red.png');

    return (
        <View
            style={styles.content} >
            <Image style={styles.graph} 
            source={image}
            ></Image>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
    },

    graph: {
        width:'100%',
        height:50,  
        marginBottom:15,      
        resizeMode: "contain",
    }
});