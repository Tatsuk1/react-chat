import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { white } from "ansi-colors";


export default class ChatBox extends React.Component {
  render() {
    const style ={
      backgroundColor: '#f0f0f0',
      position: "fixed",
      right: 1,
      bottom: 1
    }
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            <TextField name='user_name' onChange={this.props.onTextChange} className=""  placeholder="Name" />
<br />
            <TextField name='profile_image' onChange={this.props.onTextChange} className="" placeholder="Profile Image URL" />
          </div>
          <TextField rows="4" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
          <RaisedButton primary="true" label="Send" className="" onClick={this.props.onButtonClick} />
        </div>
        
      </MuiThemeProvider>
    );
  }
}