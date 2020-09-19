import React from 'react';
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

export default function CustomizedTables(props) {

    const classes = useStyles();

    return (
        <div style={{color: 'black'}}>
            <h4>Most common words</h4>
            <Row className={classes.container}>
                <Col md={7} className={classes.wordSpan}>
                    word
                </Col>
                <Col md={2} className={classes.procentSpan}>
                    %67
                </Col>
                <Col md={3} className='text-right' style={{
                    borderRadius: '0px 8px 8px 0px',
                    padding: 10,
                    color: 'black',
                    background: 'white'
                }}>
                    6
                </Col>
            </Row>
        </div>
    );
}