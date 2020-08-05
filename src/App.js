import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    ['grandParentOnClickHandler',
      'parentOnClickHandler',
      'childOnClickHandler'
    ].forEach(handler => {
      this[handler] = this[handler].bind(this);
    });
  }

  grandParentOnClickHandler() {
    console.log("Grand Parent Handler");
  }

  parentOnClickHandler() {
    console.log("Parent Handler");
  }

  childOnClickHandler( event ) {
    console.log("Child Handler");    
  }

  render() {
    return (
      <div className="grand-parent" onClick={this.grandParentOnClickHandler}>
        <div className="parent" onClick={this.parentOnClickHandler}>
          <button onClick={this.childOnClickHandler}>Click me</button>
        </div>
      </div>
    );
  }
}

