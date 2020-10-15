import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {Container, Col, Row} from "react-bootstrap"

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
    container: {
        border: '1px solid black',
        borderRadius: 10,
        background: 'black'
    },
    wordSpan: {
        borderRadius: 8,
        color: 'white',
        padding: 10
    },
    procentSpan: {
        borderRadius: 8,
        color: 'white',
        padding: 10
    },
    repeatsSpan: {
        borderRadius: 8,
        color: 'black',
        background: 'white',
        padding: 10
    }
});


const CustomizedTables = () => {

    const classes = useStyles()

    const [densityArr, setDensityArr] = useState([
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5}
    ])

    return (
        <Container>
            {/*<h1>Density of words</h1>*/}
            {/*{densityArr.map((word, index) => {*/}
            {/*    <h1>Hello</h1>*/}
            {/*})}*/}
        </Container>
    )

}

export default CustomizedTables