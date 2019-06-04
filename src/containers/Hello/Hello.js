import React from 'react';

import { Button } from "reactstrap";

export default class Hello extends React.Component {

    constructor(){
        super();
        this.state = {counter: 0}; //state (stav komponenty) - counter
      }

    handleClickA(e) {
        this.setState(previousState => { // jedna z možností aktualizace state na základě předchozího stavu
          return {counter: previousState.counter + 1};
        });
      }

    handleClick(e) { // aktualizace state na základě předchozího stavu
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
          <div>
            Kliknul jsi {this.state.counter}x. <br/>  {/* výpis state */}
            <button onClick={(e) => this.handleClick(e)}>  {/* onClick předání funkce přes arrow funkci (kvůli contextu) */}
              Klikni!
            </button>
                    <Button color="danger">Danger!</Button>
          </div>
        );
      }
}