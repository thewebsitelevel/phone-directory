import React,{Component} from 'react';
import '../styles/form.css';

export class Form extends Component{
    constructor(){
        super();
        this.state = {
            name : "",
            phone_number : ""
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
    }

    onNameChange(e){
        this.setState({
            name : e.target.value,
        })
    }
    onNumberChange(e){
        this.setState({
            phone__number : e.target.value,
        })
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.name && this.state.phone__number){
            this.props.handleSubAdd({name : this.state.name,number : this.state.phone__number});    
        }        
    }

    render(){
        return (
            <div className="form">
                <form  onSubmit={this.onSubmit}>  
                <label className="form__input__label--name" htmlFor="form-name">Name:</label>                  
                <input className="form__input--name" type="text" id="form-name" name="name" placeholder="Name" value={this.state.name} onChange={this.onNameChange}></input>
                <label className="form__input__label--number" htmlFor="form-num">Phone:</label>
                <input className="form__input--number"type="text" id="form-num" name="number" placeholder="Phone number" defaultValue={this.state.phone__number} onChange={this.onNumberChange}></input>
                <div className="form__subscriber">
                    <h4 className="form__subscriber--title">Subscriber to be added:</h4>
                    <p className="form__subscriber--name">Name : <span className="form__subscriber--name--content">{this.state.name}</span> </p>
                    <p className="form__subscriber--number">Phone : <span className="form__subscriber--name--content">{this.state.phone__number}</span></p>
                </div>
                <button onClick={this.onSubmit} className="form__btn--add">Add</button>
                </form>                
            </div>
        )
    }
    
}