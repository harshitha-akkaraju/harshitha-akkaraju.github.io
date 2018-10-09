import React, { Component } from 'react';
import './Project.css';
import './Koconut.css';

class AI extends Component {
	render() {
		return(
				<div>
					<div className={'projHeader'}>
						<div className={'koconutDesc'}>
							<p className={'projTitle'}>Tic Tac Toe</p>
							<p className={'when'}><em>Summer 2018</em></p>
							<p className={'projSummary'}>
								After watching an MIT lecture on AI and search algorithms,
								I set out to build a single player tic tac toe game using the
								Minimax Algorithm. Assuming the player is also making optimal
								decisions, the worst outcome of the current implementation is a
								tie. I built the front-end in Vue.js and deployed the app on Heroku.
							</p>
							<div style={{display: 'flex', justifyContent: 'flex-start', width: '40%', margin: '3% 0 3% 0'}}>
								<a href={'https://minimax-tic-tac-toe.herokuapp.com/'}
									 target={'_blank'}><button className={'projButton'}>Website</button></a>
								<a href={'https://github.com/harshitha-akkaraju/tic-tac-toe'}
									 target={'_blank'}><button className={'projButton'}>Github</button></a>
							</div>
						</div>
					</div>
					<div className={'projBody'}>
						<div>
							<p className={'sectionHeading'}>Implementation Details</p>

							<p className={'sectionText'}>
								I used the Minimax Algorithm to implement the computer's play in
								this game. This section details the purpose and run time of the
								functions essential to implement the AI game logic.
								<br/>

								<span className={'code'}>getEmptyIndices(board)</span><br/>
								<span className={'code'}>board</span>: array of strings that represents the state of the game
								Iterates over the board to find empty indices; runs in O(N) time and uses constant space.
								<br/>

								<span className={'code'}>isWinning(board, player)</span><br/>
								<span className={'code'}>board</span>: array of strings that represents the state of the game
								player: string; either "X" or "O"
								Determines if the player is winning. Runs in O(1) time and uses constant space.
								<br/>

								<span className={'code'}>minimax(board)</span><br/>
								Computes the optimal move that the computer can make given the
								current state of the game. Runs in O(b^m) time where b represents
								the number of possible moves and m is the maximum depth of the
								tree and uses constant space.
								<br/>

								<span className={'bolder'}>Minimax Algorithm</span>
								<br/>
								The <span className={'bolder standout'}>minimax algorithm </span>
								lets us compute the optimal moves the
								computer can make assuming that the other player is also making
								optimal moves. This results in two helper functions, maximizer
								and the minimizer.<br/>

								The maximizer is tasked with finding the most optimal move for
								the computer. Whereas the minimizer function works to minimize
								that utility for maximizer. The maximizer invokes the minimizer
								with a move on the board and the minimizer also makes a move
								and invokes the maximizer. This recursive invocation continues
								until the we reach a terminal state on the board.<br/>

								When these recursive calls unwind to the first invocation of
								the maximizer function, it results in a move that results the
								maximum utility to the computer. In my implementation, I let
								the human player make the first move and invoke the minimax
								function to get the computer's move.
							</p>
							<br/><br/>
						</div>
					</div>
				</div>
		)
	}
}

export default AI;