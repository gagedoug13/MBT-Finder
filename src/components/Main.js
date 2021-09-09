import React from 'react'
import CardContainer from './CardContainer'
import MapPage from './MapPage'
import Media from './Media'
import { Route, Link } from "react-router-dom";


export default class Main extends React.Component {

    state = {
      trails: [],
      searchTerm: "",
      news: [],
    }

    filteredTrails = () => {
      return this.state.trails.filter(trail => {
        const trailName = trail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        const trailLocation = trail.location.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        
        return trailName || trailLocation
      })
    }

    updateSearchTerm = event => {
      this.setState({
        searchTerm: event.target.value
      })
    }
    
    componentDidMount() {
      fetch('http://localhost:3001/trails')
      .then(response => response.json())
      .then(response =>  this.setState({ trails: response.trails }))
    }
   
    render() {
      return (
        <div className="main">
            <div>
                <div className="ulDiv">
                  <ul className="ulButtons">
                    <li>
                        <Link to="/"><button className="navButtons">Go Back</button></Link>
                    </li>
                    <li>
                        <Link to="/main/media"><button className="navButtons">Media</button></Link>
                    </li>
                    <li>
                        <Link to="/main"><button className="navButtons">All Trails</button></Link>
                    </li>
                    <li>
                        <Link to="/main/maps"><button className="navButtons">Map</button></Link>
                    </li>
                  </ul>
                </div>
                
                <Route exact path="/main" render={() => <CardContainer 
                  trails={this.filteredTrails()}
                  searchTerm={this.state.searchTerm} 
                  updateSearchTerm={this.updateSearchTerm}
                />}/>

                <Route path="/main/media" render={() => <Media news={this.state.news} /> }/>
                <Route path="/main/maps" render={() => <MapPage  trails={this.state.trails}/>} />
            </div>
        </div>
      )
    }
  }