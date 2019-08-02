import React, { Component } from 'react';
import './index.scss';

class Employee extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React Simple CRUD Application',
      act: 0,
      index: '',
      datas: []
    }
    this.fSubmit = this.fSubmit.bind(this)
    this.fRemove = this.fRemove.bind(this)
    this.fEdit = this.fEdit.bind(this)
    this.fGo = this.fGo.bind(this)
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit (event) {
    event.preventDefault();

    const datas = this.state.datas;
    const name = this.refs.name.value;
    const age = this.refs.age.value;

    if(this.state.act === 0){   //new
      const data = {
        name, age
      }
      datas.push(data);
    } else{                      //update
      const index = this.state.index;
      datas[index].name = name;
      datas[index].age = age;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove (i) {
    const datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit (i) {
    const data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.age.value = data.age;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }

  fGo (event)  {
    event.preventDefault();
    this.props.history.push("/home")

  }

  render() {
    const datas = this.state.datas;
    return (
      <div className="employee">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="Employee name"
            className="formField" />
          <input type="text"
           ref="age"
           placeholder="Employee age"
           className="formField" />
          <button onClick={(event)=>this.fSubmit(event)} className="myButton">submit </button>
          <button onClick={(event) => this.fGo(event)} className="myButton"> Go </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.age}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default Employee