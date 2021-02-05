export const headerLG = () => {
    return `
        font-size: 2rem;
        font-family: 'Source Sans Pro', sans-serif;
        color: #f7f7f7;
        font-weight: 600;
        margin-bottom: 2rem;
    `
}

export const headerMd = () => {
    return `
        font-size: 1.5rem;
        font-family: 'Source Sans Pro', sans-serif;
        color: #f7f7f7;
        font-weight: 600;
        margin-bottom: .5rem;
    `
}

export const defaultFont = () => {
    return `
        font-family: 'Source Sans Pro', sans-serif;
        color: #f7f7f7;
    `
}

export const CardBaseStyling = () => {
    return `
        background: #2F3438;
        margin: .75rem 1.5rem .75rem 0;
        border-radius: 12px;
        padding: 2rem 1rem;
        overflow: hidden;

        * {
            color: #E2DDDD;
        }
        *:not(i) {
            font-family: 'Source Sans Pro', sans-serif;
        }
    `
}

export const SevenColLayout = () => {
    return `
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        > * {
            flex-basis: calc((100% / 7) - 2rem);
            margin-left: 1rem;
            margin-right: 1rem;
        }
    `
} 