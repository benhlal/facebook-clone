export const formatDate = (timestamp) => {
    let toFormat = new Date(timestamp?.toDate())
    return toFormat.getUTCFullYear() +
        '-' + ('0' + toFormat.getUTCMonth()).slice(-2) +
        '-' + ('0' + toFormat.getUTCDate()).slice(-2) +
        ' ' + ('0' + toFormat.getUTCHours()).slice(-2) +
        ':' + ('0' + toFormat.getUTCMinutes()).slice(-2) +
        ':' + ('0' + toFormat.getUTCSeconds()).slice(-2)
}
