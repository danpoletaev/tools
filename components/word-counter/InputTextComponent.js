import React, { useState } from 'react'
import {Container, Col, Row} from "react-bootstrap"
import TextField from '@material-ui/core/TextField'
import CommonWordsTable from '../word-counter/CommonWordsTable'

const InputText = (props) => {

    const [text, setText] = useState('')
    const [words, setWords] = useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParaghraphs] = useState(0)
    const [densityArr, setDensityArr] = useState([
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5},
        {word: 'word', density: 5}
    ])

    const textChangeHandler = (event) => {
        const mainStr = event.target.value
        setText(mainStr)
        setWords((mainStr.split(' ')).length - 1)
        setSentences((mainStr.split('.')).length - 1)
        setParaghraphs((mainStr.split('\n')).length - 1)
    }

    return (
        <Container className='container-fluid' style={{padding: 20, margin: 0,  marginTop: 20}}>
            <Row className='w-75 ml-2'>
                <Col className='m-0'>
                    <TextBox
                        text='Words'
                        number={words}/>
                </Col>
                <Col className='m-0'>
                    <TextBox
                        text='Characters'
                        number={text.length}/>
                </Col>
                <Col>
                    <TextBox
                        text='Sentences'
                        number={sentences}/>
                </Col>
                <Col>
                    <TextBox
                        text='Paragraphs'
                        number={paragraphs}/>
                </Col>
                <Col>
                    <TextBox
                        text='Spaces'
                        number={words}/>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <TextField
                        id="outlined-full-width"
                        style={{marginLeft: 20, marginTop: 20}}
                        placeholder="Enter your text here"
                        rows={12}
                        multiline={true}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={textChangeHandler}
                        variant="outlined"
                    />
                </Col>
                <Col md={3} style={{padding: 10}}>
                    <CommonWordsTable data={densityArr}/>
                </Col>
            </Row>
        </Container>
    )
}

const TextBox = (props) => {
    return (
        <Container className='container-fluid w-auto' >
            <Row>
                <Col md={3}>
                    <h4 style={{fontSize: 14, color: '#aaaaaa'}}>{props.text}</h4>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <h1>{props.number}</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default InputText