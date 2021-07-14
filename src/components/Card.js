import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...props,
            ref: React.createRef(),
            showInfo:false
        }
    }

    showDetail(event){
        console.log(this.state.ref);
        if(this.state.showInfo){
            this.setState({
                showInfo: false
            })
            event.target.nextSibling.style.display = 'none'

        }else {
            this.setState({
                showInfo: true
            })
            event.target.nextSibling.style.display = 'block'
        }
    }

    render(){

        return(
            <div className="card col-3 m-1">
                <button type="button" className="btn-close" aria-label="Close" onClick={this.props.delete}></button>
                <img src={this.state.image} className="card-img-top" alt="profile"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.firstName} {this.state.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.email}</h6>
                    <p className="card-text">{this.state.date}({this.state.age})</p>
                    <button className="btn btn-primary" onClick={this.showDetail.bind(this)}>Ver detalle</button>
                    <div className="card-info">
                        <p className="card-text"><strong>Direccion:</strong> {this.state.street}, {this.state.streetNumber}</p>
                        <p className="card-text"><strong>Ciudad:</strong> {this.state.city}/{this.state.state}</p>
                        <p className="card-text"><strong>Pais:</strong> {this.state.country}</p>
                        <p className="card-text"><strong>CP:</strong> {this.state.postcode}</p>
                        <p className="card-text"><strong>Fecha de Registro:</strong> {this.state.registered}</p>
                        <p className="card-text"><strong>Telefono:</strong> {this.state.cell}</p>
                    </div>
                </div>
                
            </div>
        )

    }
}
export default Card