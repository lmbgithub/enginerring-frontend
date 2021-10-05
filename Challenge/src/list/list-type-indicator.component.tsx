import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import {
    StyleService,
    useStyleSheet,
    List,
} from '@ui-kitten/components';

import { ItemLineGraph } from './item-line-graph.component';
import { ItemPrice }  from './item-price.component';
import { ItemPriceChange } from './item-price-change.component';
import { ItemShares } from './item-shares.component';

export const ListTypeIndicator = ({ data, isListHorizontal, clickHandler = null, ...props }): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);


    const renderListItem = (info): React.ReactElement => {

        let itemLogo = null;
        if (info.item.logo === 'apple')
            itemLogo = require('../assets/logo-apple.png');
        else if (info.item.logo === 'amazon')
            itemLogo = require('../assets/logo-amazon.png');
        else if (info.item.logo === 'tesla')
            itemLogo = require('../assets/logo-tesla.png');
        else if (info.item.logo === 'shopify')
            itemLogo = require('../assets/logo-shopify.png');

        return (
            <TouchableOpacity
                onPress={clickHandler}
                activeOpacity={0.95}
            >
                <View
                    key={info.index.toString()}
                    style={[styles.item,
                    ]}
                >
                    <View
                        style={styles.itemHeader}
                    >
                        <View
                            style={[{
                                flexDirection: 'row',
                                alignItems:'center',
                            }]}
                        >
                            <Image style={styles.itemHeaderLogo} 
                            source={itemLogo}
                            ></Image>
                        </View>
                        <View
                            style={[{
                                flexDirection:'column',
                            }]}
                        >
                            <Text style={styles.itemTicker} >{info.item.ticker}</Text>
                            <Text style={styles.itemTitle} >{info.item.title}</Text>
                        </View>
                    </View>
                    <ItemLineGraph data={info.item.graph} />
                    <ItemPrice data={info.item.price} />
                    <ItemPriceChange data={info.item.priceChange} />
                    <ItemShares data={info.item.shares} />
                </View>
            </TouchableOpacity>
        );
    };

    let titleView = (props.title)?
        (<Text style={[styles.title,
        {
            color: props.titleColor || 'black',
        }]} >
            {props.title}
        </Text>):null;

    return (
        <View style="styles.content" >
            { titleView }
            <List
                style={styles.list}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderListItem}
            >
            </List>
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
    },

    title: {    
        fontSize:24,  
        marginBottom:5,
        color:'black',
    },

    list: {
        backgroundColor:'rgba(0,0,0,0)',
        marginLeft:-20,
        marginRight: -20,
        marginBottom: 50,
    },

    item: {
        padding: 20,
        marginLeft:20,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'white',  
        // overflow:'hidden',
        borderRadius:25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 1.0,
            height: 1.0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        elevation: 3.0,
        width: 240,
        // height: 230,
        // flexDirection:'column',
    },

    itemTitle: {
        fontSize:14,
        color:'#cccccc',
    },

    itemHeader : {
        marginBottom: 25,
        flexDirection: 'row',
    },

    itemTicker: {
        fontSize:18,
        color:'black',
        marginBottom:0,
        fontWeight:'bold',
    },

    itemStockCount: {
        fontSize:12,
        color:'#FF63AF',
    },

    itemHeaderLogo: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        marginRight:15,
    }
});