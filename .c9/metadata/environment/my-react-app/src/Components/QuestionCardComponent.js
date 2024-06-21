{"filter":false,"title":"QuestionCardComponent.js","tooltip":"/my-react-app/src/Components/QuestionCardComponent.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["import React, {Component} from 'react';","","class SelectionButtonComponent extends Component{","    render(){","        return(","            <div className = \"button\">","                <button name = \"B1\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","                <button name = \"B2\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button><br/>","                <button name = \"B3\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","                <button name = \"B4\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","            </div>","        );","    }","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["import React, {Component} from 'react';","","class SelectionButtonComponent extends Component{","    render(){","        return(","            <div className = \"button\">","                <button name = \"B1\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","                <button name = \"B2\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button><br/>","                <button name = \"B3\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","                <button name = \"B4\"onClick={e => this.props.onClick(e.target.name)}>There is a button here</button>","            </div>","        );","    }","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":19,"column":37},"action":"insert","lines":["import React, {Component} from 'react';","","class QuestionCardComponent extends Component{","    render(){","        ","        // Store the destructed assignment values to variables","        let {questionHeader} = this.props;","        let {paragraphPrompt} = this.props;","        ","        // Display the values from the destructed assignments to a heading and a paragraph","        return(","            <div classsName = \"question-card\">","                <h2>{questionHeader}</h2>  ","                <p>{paragraphPrompt}</p>","            </div>","        );","    }","}","","export default QuestionCardComponent;"]}]]},"ace":{"folds":[],"scrolltop":29,"scrollleft":0,"selection":{"start":{"row":19,"column":37},"end":{"row":19,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1718985562501,"hash":"aa0776f333fa749f84379d05409a6ef968dfedf6"}