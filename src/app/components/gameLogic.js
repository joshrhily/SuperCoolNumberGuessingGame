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
    const { guess, target, guessClicked } = this.state;
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
    console.log(target);
    if (this.state.tries <= 1) {
      this.setState({ message: 'WOMP WOMP YOU LOSE' });
      this.setState({ guessClicked: true })
    }
  }

  render() {
    const { guess, message, tries, target, guessClicked } = this.state;

    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl animate-bounce">Super Cool Number Guessing Game</h1>
        <h1>{tries}</h1>
        <p>{message}</p>
        {this.state.guess !== this.state.target &&
          <input
          type="number"
          value={guess}
          onChange={(e) => this.setState({ guess: e.target.value })}
          placeholder="Enter your guess"
        />
        }
        <div>
          {!guessClicked && tries > 0 && 
            <button className="px-1 border-2 m-2 rounded-md bg-gray-100 shadow-[0_9px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-[0_1px_0_rgba(0,0,0,1)] hover:translate-y-1 active:translate-y-2 active:bg-gray-300 transition" onClick={this.handleGuess}>Guess</button>
          }
          <button className="px-1 border-2 m-2 rounded-md bg-gray-100 shadow-[0_9px_0_rgba(0,0,0,1)] hover:shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-[0_1px_0_rgba(0,0,0,1)] hover:translate-y-1 active:translate-y-2 active:bg-gray-300 transition" onClick={this.restartGame}>Restart</button>
        </div>
      </div>
    );
  }
}

export default NumberGuessGame;
