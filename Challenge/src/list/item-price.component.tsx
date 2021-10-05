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

export const ItemPrice = ({data, size = 22,...props}): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    return (
        <View
            style={styles.content} >
            <Text style={[styles.itemPriceValue,
                { fontSize: parseFloat(size || 22 ) }
            ]} >
                {data.value}
            </Text>
            <Text style={[styles.itemPriceCurrenty,
                { fontSize: parseFloat(size || 22)*0.54 }
            ]} >
                {data.currency}
            </Text>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 0,
        marginBottom: 5,
    },

    itemPriceValue: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    itemPriceCurrenty: {
        color: 'black',
        marginLeft: 4,
        fontSize: 13,
    },
});