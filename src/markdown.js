import React, { Component } from 'react';

class Markdown extends Component {

	constructor(props){
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.getMarkdownText = this.getMarkdownText.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	getMarkdownText(){
		var marked = require('marked');
		var el = marked(this.state.value, {sanitize:true});
		return { __html: el };
	}

	render(){

		return(
			<div>
				<div className="inputDiv col-1-2">
					<form>
						<textarea className="theTextarea" value={this.state.value} onChange={this.handleChange} />
					</form>
				</div><div className="displayDiv col-1-2">
					<div dangerouslySetInnerHTML={this.getMarkdownText()} />
				</div>
			</div>
		);
	}
}

export default Markdown;