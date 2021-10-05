import React, { useState }  from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
} from 'react-native';

import {
    StyleService, 
    useStyleSheet ,
    Button,
} from '@ui-kitten/components';



export const ListManager = ({ children,dataPie,
    clickHandler = null,
    dataIndicators,...props } ): React.ReactElement => {
    
    const [isListHorizontal, setIsListHorizontal] = useState(true);

    const styles = useStyleSheet(themedStyles);

    const modeSwitchHandler = ( _isListHorizontal ) => {

        console.log('modeSwitchHandler', !isListHorizontal);
        setIsListHorizontal(!isListHorizontal );
    };

    const ListHeader = (): React.ReactElement => (
        <View style={styles.listHeader}>    
            {/* <Button onPress={(ev) => { modeSwitchHandler( false ) }}><Text>Change</Text></Button> */}
        </View>
    );

    children = React.Children.toArray(children);

    return (
        <View
            {...props}
            style={styles.content} >
            <ListHeader />
            {children.map( (child) => {
                if ( React.isValidElement(child) ) {
                    return React.cloneElement(child, { "isListHorizontal": isListHorizontal });
                }    
                return child; 
                })}
        </View>
    );
};

const themedStyles = StyleService.create({
    content: {
        marginTop:20,
    },

    listHeader: {
        position:'absolute',
        top:0,
        right:0,
        zIndex:10,
    },
});