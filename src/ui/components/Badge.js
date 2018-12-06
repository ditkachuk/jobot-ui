import { Box, css, th } from '@smooth-ui/core-sc';

import { escapedStyled, passArgs } from '../utils/escapedStyled';

const badgeTheme = {
    primary: css`
        background: ${th('primary')};
    `,
    secondary: css`
        background: #7f8c8d;
    `,
    light: css`
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        &:hover{
            ${p => p.link && css`
                background: #FF4F57;
            `}
        }
    `,
    success: css`
        background: ${th('success')};
    `,
    danger: css`
        background: ${th('danger')};
    `,
    warning: css`
        background: ${th('warning')};
    `,
    info: css`
        background: ${th('info')};
    `,
    dark: css`
        background: ${th('dark')};
    `,
};
const sizeStyle = {
    sm: css`
        padding: 0 .7rem;
        font-size: ${th('fontSizeSm')};
    `,
    md: css`
        padding: .2rem .9rem;
        font-size: ${th('fontSizeBase')};
    `,
    lg: css`
        padding: .3rem 1.1rem;
        font-size: ${th('fontSizeLg')};
    `,
};

export const Badge = escapedStyled(['link'], ({ link }) =>
passArgs`
    cursor: ${console.log(link) || link === 'true' ? 'pointer' : 'inherit'};
`,
passArgs`
    ${p => p.variant && badgeTheme[p.variant]};
    ${p => p.size && sizeStyle[p.size]};
`)(Box);

Badge.defaultProps = {
    size: 'md',
    variant: 'primary',
    display: 'inline-block',
    color: '#fff',
    mr: '10px',
    borderRadius: '4px',
    textDecoration: 'none'
};
