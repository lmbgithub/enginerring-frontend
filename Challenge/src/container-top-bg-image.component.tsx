import React from 'react';
import { ScrollView, 
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { useStyleSheet, StyleService } from '@ui-kitten/components';

export const ContainerTopBGImage = ({children, source,...props}) => {

    const styles = useStyleSheet(themedStyles);
    
    return (
        <ScrollView  {...props} style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flexGrow: 1 }}>
                <ImageBackground
                    source={source}
                    style={styles.image}>
                    <View style={[
                        StyleSheet.absoluteFill,
                    ]} />
                </ImageBackground>
                <View style={styles.content} >
                    {children}
                </View>
            </View>
        </ScrollView>
    );
};

const themedStyles = StyleService.create({
    container: {
    },

    content: {
        position: 'absolute',
        top: 30,
        width: '100%',
        left: 0,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 100,
    },

    image: {
        height: 400,
        borderRadius: 15,
        overflow: 'hidden',
        underlayColor: '#fff',
    },

});