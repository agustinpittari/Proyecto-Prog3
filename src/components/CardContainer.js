import React, {Component} from 'react'
import Card from './Card'
class CardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            results: 12
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

    eliminarTarjeta(){
        
    }

    render(){
        return(
            <div className="row justify-content-center" >
                {this.state.data.map((user, idx) => (
                    <Card key={idx}
                        firstName={user.name.first}
                        lastName={user.name.last}
                        email={user.email}
                        image={user.picture.large}
                        age={user.dob.age}
                        date={user.dob.date}
                    />
                ))}
                
            </div>
        )
    }
}

export default CardContainer