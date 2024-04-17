import { View as ViewTag, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../../theme';

const styles = StyleSheet.create({
    tag: {
        display: 'inline-block',
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 4,
    },
});


const Tag = ( { style, children, ...props }) => {
    const tagStyle = [
        styles.tag,
        style
    ];

    return (
        <Text>
            <ViewTag style={tagStyle} {...props}>
                    <Text color='white'>{children}</Text>
            </ViewTag>
        </Text>
    )
}

export default Tag;