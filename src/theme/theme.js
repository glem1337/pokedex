import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    overrides: {
        MuiCardMedia: {
            img: {
                objectFit: 'contain',
                padding: '8px',
            },
        },
    },
});
