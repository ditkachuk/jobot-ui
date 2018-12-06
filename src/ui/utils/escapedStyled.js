import React from 'react';
import { styled } from '@smooth-ui/core-sc';

const omit = (obj, fields) => {
    const shallowCopy = { ...obj };

    for (let i = 0; i < fields.length; i += 1) {
        const key = fields[i];
        delete shallowCopy[key];
    }

    return shallowCopy;
};

export const passArgs = (...args) => args;

export const escapedStyled = (escape, getEscapeStyles, styles) => WrappedComponent => {
    const Escaped = props => {
        const Component = styled(
            p => <WrappedComponent {...omit(p, escape)} />
        )(...getEscapeStyles(props));

        return <Component {...props} />;
    };

    return styled(Escaped)(...styles);
}
