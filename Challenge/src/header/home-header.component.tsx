import React from 'react';
import {
    Image,
    ImageSourcePropType,
    ImageStyle,
    ListRenderItemInfo,
    ScrollView,
    View,
} from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { HeaderUserBar } from './header-user-bar.component';
import { HeaderList } from './header-list.component';


export const HomeHeader = ({ data, children, props }): React.ReactElement => {

    const styles = useStyleSheet(themedStyles);

    return (<> 
        <View style={styles.content} >
            <HeaderUserBar 
                userName={"@" + data.username} />
            <HeaderList data={data.slide} />
        </View>
    </>);
}

const themedStyles = StyleService.create({

    userBar: {

    },
});
