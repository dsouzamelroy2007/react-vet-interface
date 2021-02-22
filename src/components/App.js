import { bind, without } from 'lodash';
import { Component } from 'react';
import '../css/App.css';
import { AddAppointments } from "./AddAppointments";
import {  ListAppointments} from "./ListAppointments";
import { SearchAppointments } from "./SearchAppointments";

class App extends Component {
  constructor(){
    super();
    this.state = {
      petData : [],
      lastIndex : 0,
      hideDisplay : true
    }
    this.addAppointment = this.addAppointment.bind(this);

    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleAddAppointment = this.toggleAddAppointment.bind(this);
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
     .then( result => {
        const apts = result.map(item => {
          item.appId = this.state.lastIndex;
          this.setState({lastIndex : this.state.lastIndex + 1 });
          return item;
        })
        this.setState({
          petData : apts
        });
     });

  }

  addAppointment(apt){
    console.log(apt);

    let tempAppointments = this.state.petData;
    apt.appId =  this.state.lastIndex;
    tempAppointments.unshift(apt);
    console.log(tempAppointments);
    this.setState({
      petData  : tempAppointments,
      lastIndex : this.state.lastIndex + 1
    });
  }

  deleteAppointment(apt){
    let tempAppointments = this.state.petData;
    tempAppointments = without(tempAppointments, apt);
    
    this.setState({
      petData : tempAppointments
    })
  }

  toggleAddAppointment(){
    this.setState({
       hideDisplay : !this.state.hideDisplay
    })
  }

render() {
  return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myName}
                <AddAppointments 
                   hideAddAppointmentDisplay = {this.state.hideDisplay}
                   toggleAddAppointment = {this.toggleAddAppointment}
                   addAppointment = {this.addAppointment}
                />
                <SearchAppointments />
                <ListAppointments 
                   appointments = {this.state.petData}
                   deleteAppointment = {this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
  }
}

export default App;
