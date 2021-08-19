import React, {Component} from 'react'
import Card from './Card'
class CardContainer extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            results: 3
        }
    }
    componentDidMount(){
        fetch(`https://randomuser.me/api/?results=${this.state.results}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data:data.results
            })
        })
    }
    
    showNewUsers(e){
        e.preventDefault()
        fetch(`https://randomuser.me/api/?results=${e.target.elements.newUsers.value}`)
        .then(response => response.json())
        .then(data => {
            this.state.data.push(...data.results)
            this.setState({
                data:this.state.data
            })
        })
    }
    
    deleteCard(id){
        this.setState({
            data: this.state.data.filter(user => user.login.uuid !== id)
        })
    }
    
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-3">
                    <form onSubmit={(e) => this.showNewUsers(e)}>
                        <div className="mb-3">
                            <label className="form-label">Nuevos usuarios</label>
                            <input type="number" className="form-control" name="newUsers"/>
                            <div id="emailHelp" className="form-text">Ingrese la cantidad de nuevos usuarios a ver.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </form>
                </div>
                <div className="col-9">
                    <div className="row justify-content-center" >
                    
                    {this.state.data.map((user, idx) => (
                        <Card key={idx}
                        id={user.login.uuid}
                        firstName={user.name.first}
                        lastName={user.name.last}
                        email={user.email}
                        image={user.picture.large}
                        age={user.dob.age}
                        date={user.dob.date}
                        street={user.location.street.name}
                        streetNumber={user.location.street.number}
                        city={user.location.city}
                        state={user.location.state}
                        country={user.location.country}
                        postcode={user.location.postcode}
                        registered={user.registered.date}
                        cell={user.cell}
                        delete={()=>this.deleteCard(user.login.uuid)}
                        showDetail={this.showDetail}
                        />
                        ))}
                        
                        </div>
                </div>
            </div>
                )
            }
        }
        
        export default CardContainer