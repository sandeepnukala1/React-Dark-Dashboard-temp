import React from 'react'
import CardContent from './CardContent'

const Content = () => {
    return (
        <div className="cards">
           <div className="column1">
              <div className="card">
                  <h4 className="card-title">Reviews</h4>
                  <div className="card-content">
                    <CardContent data="1,281"/> 
                    <CardContent /> 
                    <CardContent />     
                  </div>
              </div>
              <div className="card">
                  <h4 className="card-title">Average Rating</h4>
                  <div className="card-content">
                    <CardContent data="4.6"/> 
                    <CardContent /> 
                    <CardContent />    
                  </div>
              </div>
              <div className="card">
                  <h4 className="card-title">Sentimental Analysis</h4>
                  <div className="card-content">
                    <CardContent data="960"/> 
                    <CardContent data="122"/> 
                    <CardContent data="321"/>     
                  </div>
              </div>
           </div>
           <div className="column2">
           <div className="big-card">
                  <h4 className="card-title">Website Visitors</h4>
                  <h4 className="card-title">821</h4>
                  <div className="card-sub-content">
                    <CardContent /> 
                  </div>
              </div>
           </div>
        </div>
    )
}

export default Content;