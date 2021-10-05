import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';

import {
    StyleService, 
    useStyleSheet ,
    List,
} from '@ui-kitten/components';



export const ItemPriceChange = ({data,...props}): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    const isGoingUp: Boolean = (data.direction === "up") ? true : false;
    let indicatorIcon = isGoingUp ? 
        require('../assets/indicator-up.png') :
        require('../assets/indicator-down.png');

    return (
        <View
            style={styles.content} >
            <Image style={styles.icon}
                source={indicatorIcon}
            ></Image>
            <Text style={[styles.text,
            { color: isGoingUp ? '#34B78F' : '#FF63AF' }
            ]} >
                {data.value} ({data.percentage})
            </Text>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        marginTop: 0,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        width: 8,
        height: 8,
        marginRight: 4,
    },

    text: {
        fontSize: 14,
    },
});