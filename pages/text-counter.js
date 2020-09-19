import React from 'react'
import {Input} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class TextCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            text_length: 0
        };
    }

    render() {
        console.log(this.state.text); // I just left it here so that you can see in console that state is changing
        return (
            <>
                <TextField
                    id="text"
                    label="Label"
                    style={{margin: 8}}
                    rows={10}
                    multiline={true}
                    placeholder="Enter your text here to get number of symbols"
                    defaultValue={this.state.text}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        const {value} = event.target;
                        this.setState({text: value})
                    }}
                />
                <TextField
                    id="text_length"
                    label="Length of text"
                    style={{margin: 8}}
                    placeholder="Enter your text here to get number of symbols"
                    defaultValue={this.state.text}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => {
                        const {value} = event.target;
                        this.setState({text: value})
                    }}
                />

            </>
        )
    }
}

export default TextCounter