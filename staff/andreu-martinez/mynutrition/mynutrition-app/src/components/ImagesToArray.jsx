import React, { Component } from 'react';

class ImagesToArray extends Component {
    render() {
        let names = ['wood', 'sun', 'moon', 'sea'].map( (name, index) => {
            return <img key={index} className="img-responsive" alt="" src={require(`./icons/${name}.png`)} />
        } );
        return (
            <div className="container">
                <footer className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <h4>some text</h4>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        { names }

                    </div>
                </footer>
            </div>
        );
    }
}


export default ImagesToArray;