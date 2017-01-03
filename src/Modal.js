import React, { Component } from 'react';

class Moda extends Component{
    render(){
        const compny = this.props.details;
        //let comp = this.compny.city;
        return(
        <div className={this.props.showModa ? 'show' : 'hide'}>
            <div className='cDiv'>
                <h2>{ this.props.details.name }</h2>
                <p className='text-left'>
                    username: { this.props.details.username }<br/>
                    website: { this.props.details.website }<br/>
                    email: { this.props.details.email }
                    
                </p>
                <p className='text-right'>
                    Phone: { this.props.details.phone }, {compny.name}<br/>
                    
                </p>
                <p><button onClick={this.props.closeDetail}>Close</button></p>
            </div>
        </div>
        )
    }
}

export default Moda;