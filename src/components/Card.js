import React, {Component} from 'react'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...props,
            showInfo:false
        }
    }

    showDetail(event){
        console.log(event);
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
            <div className="card col-3">
                <button type="button" className="btn-close" aria-label="Close"></button>
                <img src={this.state.image} className="card-img-top" alt="profile"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.firstName} {this.state.lastName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.email}</h6>
                    <p className="card-text">{this.state.date}({this.state.age})</p>
                    <button className="btn btn-primary" onClick={this.showDetail.bind(this)}>Ver detalle</button>
                    <div className="card-info">
                        <p className="card-text">Direccion: Calle y numero</p>
                        <p className="card-text">Ciudad: Ciudad/Estado</p>
                        <p className="card-text">Pais: Pais</p>
                        <p className="card-text">CP: Codigo Postal</p>
                        <p className="card-text">Fecha de Registro: Fecha de Registro</p>
                        <p className="card-text">Telefono: Telefono</p>
                    </div>
                </div>
                
            </div>
        )

    }
}

export default Card