import React from 'react';
import { marked } from 'marked';
import Editor from '../components/Editor';

import { sampleText } from '../components/sampleText';

class Test extends React.Component {
    state = {
        text: sampleText
    };

    handleChange = (event:any):void => {
        console.log("Change")
        const text = event.target.value
        this.setState({ text })
    };

    renderText = (text: string) => {
        const __html = marked(text, { sanitize: true })
        return { __html }
      }


    render() {
        return (
            <>
                <div>
                    <textarea
                        id='text'
                        onChange={this.handleChange}
                        className='form-control'
                        rows={35}>{this.state.text}</textarea>
                    <div dangerouslySetInnerHTML= {this.renderText(this.state.text)} />
                </div>
                <div>
                    <Editor />
                </div>
            </>
        )
    }
}

// const Test: React.FC = () => {
//     return <div>Test Test</div>
// }

export default Test;