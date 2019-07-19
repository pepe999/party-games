import React from 'react';

// import axios from 'axios';

import { connect } from "react-redux";

import ReactPlayer from 'react-player'

import { nactiHlaskySaga, dalsiHlaska } from "../../redux/actions/index";

import { Container, Row, Col, Button } from 'reactstrap';


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
    this.state.videoHeight === "0px" ? this.setState({videoHeight: "200%"}) : this.setState({videoHeight: "0px"}); 
  }
  
  // dodělat přepisování start/stop + pokud video dohraje - nastavit state na playing false
  handlePlay(e) {  
    this.setState({playing: !this.state.playing}); 
  } 
  
  handleNext(e) {  
    if (this.props.aktHlaska != null){
      this.props.dalsiHlaska(this.props.aktHlaska.id);
    }    
  } 
  
  handleAnswer(e) {  
    this.setState({answer: !this.state.answer}); 
  } 

  render() {
    return (
      <Container>
        <Row>
          <Col xl={{ size: 8, offset: 2 }}>
            <Button onClick={(e) => this.handleShowVideo(e)}>{this.state.videoHeight === "0px" ? "zobrazit video" : "skrýt video"}</Button>
            &nbsp; 
            <Button onClick={(e) => this.handleNext(e)}>další hláška</Button>
            &nbsp;
            <Button onClick={(e) => this.handlePlay(e)}>start/stop</Button>
            &nbsp;
            <Button onClick={(e) => this.handleAnswer(e)}>zobrazit/skrýt odpověď</Button>
          </Col>
        </Row>
        <Row>
          <Col xl={{ size: 8, offset: 2 }}>
            { this.state.answer && this.props.aktHlaska != null && this.props.aktHlaska.nazev}
          </Col>
        </Row>
        <br />
         <Row>
          <Col xl={{ size: 8, offset: 2 }}>
            { this.state.loaded && this.props.aktHlaska != null && <ReactPlayer 
                                                          url={this.props.aktHlaska.url} 
                                                          height={this.state.videoHeight} 
                                                          width={"100%"} 
                                                          playing={this.state.playing} /> } 
          </Col>
        </Row>
        
      </Container>
    )
  }
}
const Hlasky = connect(mapStateToProps, mapDispatchToProps)(connectedHlasky);
export default Hlasky;