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


const CustomizedTables extends React.Component {

    const classes = useStyles()

    constructor(props)
    {
        super(props)
    }

    const [densityArr, setDensityArr] = useState([
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5}
    ])

    componentDidMount()
    {
    }

    render()
    {
        return (
            <Container>
                <h1>Container {densityArr.length}</h1>
                {densityArr.map((word, index) => {
                    <h1>Hello</h1>
                })}
            </Container>
            // <div style={{color: 'black'}}>
            //     <h4>Most common words</h4>
            //     <Row className={classes.container}>
            //         <Col md={7} className={classes.wordSpan}>
            //             {props.word}
            //         </Col>
            //         <Col md={2} className={classes.procentSpan}>
            //             %67
            //         </Col>
            //         <Col md={3} className='text-right' style={{
            //             borderRadius: '0px 8px 8px 0px',
            //             padding: 10,
            //             color: 'black',
            //             background: 'white'
            //         }}>
            //         </Col>
            //     </Row>
            // </div>
        )
    }
}

export
defaut
CustomizedTables