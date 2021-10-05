import React from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
} from 'react-native';
import {
    StyleService, 
    useStyleSheet ,
    List,
} from '@ui-kitten/components';

import { Pages } from 'react-native-pages';

export const HeaderList = ({data,...props}): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    const renderListItem = (info, index): React.ReactElement => {
        
        let changeIndicator = null;
        if ( info.modification ) {
            const isGoingUp:Boolean = (info.modification.direction === "up") ? true : false;

            let indicatorIcon = isGoingUp ?
                require('../assets/indicator-up.png') :
                require('../assets/indicator-down.png');

            changeIndicator = <View style={{flexDirection:'row'}}><View style={styles.itemModificationIndicator} >
                <Image style={styles.itemModificationIndicatorIcon}
                    source={indicatorIcon}
                 ></Image>
                <Text style={[styles.itemModificationIndicatorText,
                    { color: isGoingUp ? '#34B78F' :'#FF63AF'}
                ]} >
                    {info.modification.value} ({info.modification.percentage})
                </Text>
                <Text style={[styles.itemModificationIndicatorText,
                { color: 'black' }
                ]} >
                    {' ' + info.modification.date}
                </Text>
            </View>
            </View>
        };


        return (
            <View
                key={index.toString()}
                style={styles.item}
            >
                <Text style={styles.itemTitle} >
                    {info.title}
                </Text>
                <View style={styles.itemPrice}>
                    <Text style={styles.itemPriceValue} >
                        {info.price}
                    </Text>
                    <Text style={styles.itemPriceCurrenty} >
                        {info.priceCurrency}
                    </Text>

                </View>

                { changeIndicator }
            </View>
        );
    };

    return (
        <View
            style={styles.content} >
            
            <Pages
                containerStyle={styles.list}
            >
                {data.map((d, idx) => renderListItem(d, idx)) }
            </Pages>

        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        marginTop:50,
    },

    list: {
        backgroundColor: 'rgba(0,0,0,0)',
        height: 150,
        marginLeft:-20,
        marginRight: -20,
    },

    item: {
        height:150,
        paddingLeft:20,
        paddingRight:20,
    },

    itemTitle: {
        color:'white',
        // fontWeight: 'bold',
    },

    itemPrice: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 15,
        marginBottom: 7,
    },

    itemPriceValue: {
        color: 'white',
        fontSize:40,
        fontWeight:'bold',
    },
    itemPriceCurrenty: {
        color: 'white',
        marginLeft: 8,
        fontSize: 17,
    },

    itemModificationIndicator: {
        marginTop:10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 20,
        overflow: 'hidden',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',    
    },

    itemModificationIndicatorIcon : {
        width:9,
        height:9,
        marginRight:4,
    },

    itemModificationIndicatorText: {
        fontSize:13,    

    },
});
