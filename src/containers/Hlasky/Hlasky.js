import React from 'react';

// import axios from 'axios';

import { connect } from "react-redux";

import ReactPlayer from 'react-player'

import { nactiHlaskySaga, dalsiHlaska } from "../../redux/actions/index";

import { Button } from "reactstrap";



const mapStateToProps = state => {
  return { hlasky: state.hlasky, aktHlaska: state.aktHlaska };
};

function mapDispatchToProps(dispatch) {
  return {
    // nactiHlasky: hlasky => dispatch(nactiHlasky(hlasky)),
    nactiHlaskySaga: hlasky => dispatch(nactiHlaskySaga(hlasky)),
    dalsiHlaska: hlasky => dispatch(dalsiHlaska(hlasky))
  };
}

class connectedHlasky extends React.Component{
  state = {
    videoHeight: "0px",
    loaded: false,
    playing: true,
    answer: false
  }

  componentDidMount() {
    this.props.nactiHlaskySaga(null);
    this.setState({loaded: true})
    // axios.get('http://localhost/api/games/read.php')
    //   .then(res => {
    //     const newHlasky = res.data.records;
        
    //     // this.props.nactiHlasky({ hlasky: newHlasky.map(obj=> ({ ...obj, prehrano: 'false' }))});
    //     this.setState({loaded: true})
    //   })
  }

  handleShowVideo(e) {  
    this.state.videoHeight === "0px" ? this.setState({videoHeight: "300px"}) : this.setState({videoHeight: "0px"}); 
  }
  
  // dodělat přepisování start/stop + pokud video dohraje - nastavit state na playing false
  handlePlay(e) {  
    this.setState({playing: !this.state.playing}); 
  } 
  
  handleNext(e) {  
    if (this.props.aktHlaska != null){
      this.props.dalsiHlaska(this.props.aktHlaska.id);
    }
    
    // this.state.videoHeight === "0px" ? this.setState({videoHeight: "300px"}) : this.setState({videoHeight: "0px"}); 
  } 
  
  handleAnswer(e) {  
    this.setState({answer: !this.state.answer}); 
  } 

  render() {
    return (
      <div>
        { this.state.answer && this.props.aktHlaska != null && this.props.aktHlaska.nazev}
         <Button onClick={(e) => this.handleShowVideo(e)}>{this.state.videoHeight === "0px" ? "zobrazit video" : "skrýt video"}</Button>

        { this.state.loaded && this.props.aktHlaska != null && <ReactPlayer 
                                                          url={this.props.aktHlaska.url} 
                                                          height={this.state.videoHeight} 
                                                          playing={this.state.playing} /> } 
         
         <Button onClick={(e) => this.handleNext(e)}>další hláška</Button>

         <Button onClick={(e) => this.handlePlay(e)}>start/stop</Button>

         <Button onClick={(e) => this.handleAnswer(e)}>zobrazit/skrýt odpověď</Button>
      </div>
    )
  }
}
const Hlasky = connect(mapStateToProps, mapDispatchToProps)(connectedHlasky);
export default Hlasky;