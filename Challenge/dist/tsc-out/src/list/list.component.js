import React from 'react';
import { View } from 'react-native';
export const ListManager = ({ children, props }) => {
    return React.createElement(View, Object.assign({}, props), children);
};
export const ListHeader = ({ children, props }) => {
    return React.createElement(View, Object.assign({}, props), children);
};
export const List = ({ children, props }) => {
    return React.createElement(View, Object.assign({}, props), children);
};
//# sourceMappingURL=list.component.js.map