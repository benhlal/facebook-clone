import {makeStyles} from "@material-ui/core/styles";

export const formatDate = (timestamp) => {
    let toFormat = new Date(timestamp?.toDate())
    return toFormat.getUTCFullYear() +
        '-' + ('0' + toFormat.getUTCMonth()).slice(-2) +
        '-' + ('0' + toFormat.getUTCDate()).slice(-2) +
        ' ' + ('0' + toFormat.getUTCHours()).slice(-2) +
        ':' + ('0' + toFormat.getUTCMinutes()).slice(-2) +
        ':' + ('0' + toFormat.getUTCSeconds()).slice(-2)
}

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));
