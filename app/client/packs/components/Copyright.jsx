import React from "react";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {'2008 - '}
            { new Date().getFullYear()}
            {' '}
            <Link color="inherit" href="https://github.com/ololo534">
                My github
            </Link>
            {'.'}
        </Typography>
    );
}
