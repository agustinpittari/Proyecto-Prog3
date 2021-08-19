import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo:false
        }
    }
    showDetail(e){
        if(this.state.showInfo){
            this.setState({
                showInfo: false
            })

        }else {
            this.setState({
                showInfo: true
            })
        }
    }

    render(){

        return(
            
            <div className="card col-3 m-1">
                <button type="button" className="btn-close" aria-label="Close" onClick={() => this.props.delete(this.props.id)}></button>
                <img src={this.props.image} className="card-img-top" alt="profile"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.email}</h6>
                    <p className="card-text">{this.props.date}({this.props.age})</p>
                    <div className={this.state.showInfo ? 'd-block' : 'd-none'}>
                        <ul>
                            <li className="card-text"><strong>Direccion:</strong> {this.props.street}, {this.props.streetNumber}</li>
                            <li className="card-text"><strong>Ciudad:</strong> {this.props.city}/{this.props.state}</li>
                            <li className="card-text"><strong>Pais:</strong> {this.props.country}</li>
                            <li className="card-text"><strong>CP:</strong> {this.props.postcode}</li>
                            <li className="card-text"><strong>Fecha de Registro:</strong> {this.props.registered}</li>
                            <li className="card-text"><strong>Telefono:</strong> {this.props.cell}</li>
                        </ul>
                    </div>
                    <button className="btn btn-primary" onClick={(e)=>this.showDetail(e)}>{this.state.showInfo? 'Ver menos': 'Ver mas' }</button>
                </div>
                
            </div>
        )

    }
}
export default Card