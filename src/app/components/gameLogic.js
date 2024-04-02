"use client"
import React, { Component } from "react";

const max = 10;
const min = 1;
const tries = 3;

class NumberGuessGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Enter a Number (1-10)',
      guess: '',
      target: Math.floor(Math.random() * 10) + min,
      tries: tries,
      guessClicked: false
    };
  }

  decrmTry = () => {
    const numTries = Number(this.state.tries);
    this.setState({ tries: numTries - 1 });
    this.playAnimation('tries', 'animate-shake');
  }

  inRange = (value) => {
    const numValue = Number(value);
    return !isNaN(numValue) && numValue >= min && numValue <= max;
  }

  restartGame = () => {
    this.setState({ 
      message: 'Enter a number (1-10)',
      guess: '',
      target: Math.floor(Math.random() * 10) + min,
      tries: tries,
      guessClicked: false
  })}

  handleGuess = () => {
    const { guess, target, tries } = this.state;
    const inputBox = document.getElementById('input');
    if (!this.inRange(guess)) {
      this.setState({ message: 'Please enter a valid number (1-10)' });
    } else {
      const numGuess = Number(guess);
      if (numGuess > target) {
        this.setState({ message: 'Lower!' });
        this.decrmTry();
      } else if (numGuess < target) {
        this.setState({ message: 'Higher!' });
        this.decrmTry();
      } else {
        this.setState({ message: 'Congratulations! You guessed the correct number!' });
        this.setState({ guessClicked: true })
      }
    }
  }

  playAnimation = ( element, animation ) => {
    const toAnimate = document.getElementById(element);
    if (toAnimate) {
      toAnimate.classList.remove(animation);
      void toAnimate.offsetWidth;
      toAnimate.classList.add(animation);
    } else {
      console.log('No element found');
    }
  }
  
  render() {
    const { guess, message, tries, target, guessClicked } = this.state;

    if (tries < 1) {
      return (
        <div id="main-wrap" className="flex flex-col text-cyan-300 items-center justify-center">
          <h1 className="text-5xl text-center transition hover:animate-wiggle">Super Cool Number Guessing Game</h1>
          <div id="info-box" className="flex flex-col mt-48 items-center justify-center">
            <p className="text-2xl">WOMP WOMP YOU LOSE</p>
            <button id="restart" className="px-1 border-2 m-2 rounded-md bg-gray-100 text-black shadow-[0_9px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-[0_1px_0_rgba(0,0,0,1)] hover:translate-y-1 active:translate-y-2 active:bg-gray-300 transition" onClick={this.restartGame}>Restart</button>
          </div>
        </div>
      );
    }

    return (
      <div id="main-wrap" className="flex flex-col text-cyan-300 items-center justify-center">
        <h1 className="text-5xl text-center transition hover:animate-wiggle">Super Cool Number Guessing Game</h1>
        <div id="info-box" className="flex flex-col mt-48 items-center justify-center">
          <h1 id="tries" className="text-xl">{tries}</h1>
          <p className="text-2xl">{message}</p>
          <div id="input" className="flex flex-col items-center justify-center m-10">
            {this.state.guess !== this.state.target &&
              <input
              id="input"
              className="text-black"
              type="number"
              value={guess}
              onChange={(e) => this.setState({ guess: e.target.value })}
              placeholder="Enter your guess"
            />
            }
            <div id="button-wrap" >
              {!guessClicked && tries > 0 && 
                <button id="guess" className="px-1 border-2 m-2 rounded-md bg-gray-100 text-black shadow-[0_9px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-[0_1px_0_rgba(0,0,0,1)] hover:translate-y-1 active:translate-y-2 active:bg-gray-300 transition" onkey onClick={this.handleGuess}>Guess</button>
              }
              <button id="restart" className="px-1 border-2 m-2 rounded-md bg-gray-100 text-black shadow-[0_9px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-[0_1px_0_rgba(0,0,0,1)] hover:translate-y-1 active:translate-y-2 active:bg-gray-300 transition" onClick={this.restartGame}>Restart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberGuessGame;

// Work on styling and animations
