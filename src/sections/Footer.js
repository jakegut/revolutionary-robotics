import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h6>Copyright &copy; 2017 - Revolutionary Robotics</h6>
                    </div>
                    {/* <div className="col-6">
                        <h6 className="text-right">Website made by <a href="http://www.jakerg.me">Jake Gutierrez</a></h6>
                    </div> */}
                </div>
            </div>
            </div>
        )
    }
}
