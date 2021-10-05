import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { BottomNavigation } from './navigation/bottom-navigation.component';
import { Header } from './header/header.component';
import { ListManager, List, ListHeader } from './list/list.component';
import { useStyleSheet, StyleService } from '@ui-kitten/components';
export const HomeScreen = ({ navigation }) => {
    const styles = useStyleSheet(themedStyles);
    const navigateDetails = () => {
        navigation.navigate('Details');
    };
    return (React.createElement(SafeAreaView, { style: { flex: 1 } },
        React.createElement(ScrollView, { style: styles.container },
            React.createElement(Header, null),
            React.createElement(ListManager, { style: styles.listManager },
                React.createElement(ListHeader, null),
                React.createElement(List, null),
                React.createElement(List, null))),
        React.createElement(BottomNavigation, null)));
};
const themedStyles = StyleService.create({
    container: {},
});
//# sourceMappingURL=home.component.js.map