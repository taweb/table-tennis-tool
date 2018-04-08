# Table Tennis Tournament Generator

Developed as my final Developme project task, the app generates a table tennis tournament structure from a list of names provided by the user.

Technologies used: React, Redux, Javascript, HTML, CSS, SASS, Git

You can view the finished app by visiting here: http://tim.developme.space/

## Installing Locally

- You will need Yarn (or npm) installed to run the app locally on your machine
- Clone the github repository
- run `yarn install` in the newly cloned repo to add all the dependancies for the project
- run `yarn start` to run the local development server

## The Brief

The exercise is to create a tool which randomly creates pairings for a table tennis tournament from a list of names collected from the user.

### Optional Advanced Features

- ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs
- continued rounds until the final (last 2 players who have won all matches to date play each other)

## Chosen Technologies

I used React and Redux to build my app as I found these technologies very interesting and challenging during the course, and because I felt they fitted well with the project brief, especially for the rendering of the tournament structure and the UI elements.

## Workflow

I decided to use Git to version manage the project, specifically the Gitflow method (primarily working off development branch on feature branches). This was great to reinforce the workflow learnt on the course, and helped to give clarity and focus to my approach each task in turn.

## Key Project Notes

I identified 3 key aspects of development:
  - Understanding the Redux state structure required
  - player name input form and display
  - rendering of tournament structure

I wanted to build the app to be scalable and flexible, and attempt to implement the ability to track match winners through to a tournament winner.

### Page Structure

I decided to use a 2 page structure for the app, using React Router.

  - Player Input Page
  - Tournament Page

### Understanding Byes

I wanted to make my application to be flexible to handle any number of player names provided by the user. In order to do this byes had to be considered. 

Therefore, a key step in the early planning stages was understanding what links there are between the number of players entries in a tournament, the number of players at each level of the draw, and how many rounds would be required to see the tournament through to an eventual winner. I considered this important to address in the early stages as this could also have important implications for the shape of the redux state.

#### Initial Bye Handling Method

I initially settled on bye handling strategy such that byes could occur in any round up to the Semi-final stage, depending on the number of player inputs (I changed this logic later on so that byes could only occur in the first round).

In the initial system, byes were handled as follows:

  - 5 initial players
    - First round: 5 players (1 bye)
    - Second round: 3 players (1 bye)
    - Final 2

  - 13 initial players
      - First round: 13 players (1 bye)
      - Second round: 7 (1 bye)
      - Third round: 4
      - Final: 2

Using this system, I found the relationship between initial players and number of rounds to be:

   - Number-of-rounds = Math.ceil(Math.sqrt(Number-of-players))

And the link between initial players and players at each level of the draw:

  - Players-in-next-round = Math.ceil(players-in-previous-round / 2)

#### Revised Bye Handling Method

I altered my bye handling process during development so that byes could occur in the first round only. I found this was a straightforward change due to the simple redux state structure used for the application (next section).

The updated bye hadling method was based on the following:

Number of byes in first round = next highest square number / number of players

eg.

9 teams = 16 - 9 (7 byes required)
28 teams = 32 - 28 (4 byes required)

This simplified the logic as the second round onwards always has a power of 2 number of players, down to 2 finalists.

### Redux State

Having decided on a bye handling strategy I had a better idea of what the shape my redux state should be.

In its simplist form the redux state has 2 phases.

#### Player Input Phase

During the player input phase, the redux state is as shown below, with a single "players" property. Each new player name entry is added into the players array as an object, with an id for purposes of targeting a specific name if as required.

```
{
	players: [
		{
			id: 0,
			name: 'player'
		},
		{
			id: 1,
			name: 'player2'
		}...
	]
}
```

#### Tournament Generation Phase

When the user clicks on the button to generate the tournament, the redux state changes to also include a "rounds" property. This is an array which itself holds nested arrays of names (in a randomised order) present in each round of the draw (number of nested arrays relates to the number of rounds required for the number of input names provided).

As names in the draw are not known initially after the first round, placeholder empty quotation marks were used as placeholders in the state.

This nested array structure of the rounds property meant I could iterate through the names contained within them and render them to the page in either Match or Bye components.

```
{
	players: [
		...
	]
	rounds: [
		[round-1-players],
		["", "", "",...],
		["", "", "",...]
		arrays for each round...
	[
}
```
 
### Player Input and Display

The first step to coding my app was focused on the player input (home) page functionality and display. As well as new player input functionality, features include player deletion and name editing capability.

#### Form Validation and Error Handling

Player inputs from the user were controlled using the following basic validation rules:

  - There must be at least 4 players in a tournament (maxiumum number of players 32 due to styling considerations)
  - There must be at least 3 characters in a name
  - All player names must be unique
  - White space was trimmed from beginning and end of the name

### Tournament Display

A key consideration to displaying the tournament structure was how and when to render either Match or Bye components. 

This was handled in my application by, for each round, accepting the corresponding round array (holding players present in that round) from redux state as a prop, and formatting the "flat" array into a nested array structure of either 1 or 2 names. This meant I could render either Match or Bye components depending on the length of each nested array.

eg.

round-array-from-state = ["player1", "player2", "player3"]
formatted-array-for-render = [["Player1", "player2"], ["player3"]]

In this example above, player1 and player2 would be rendered in a Match component, with player3 (as in an array of length=1) rendered in a Bye component.

## Styling 
I used the CSS pre-processor SASS for styling the app, which simplified the process. Splitting styles into seperate files in a modular way helped with consistancy. The app has been built to be mobile responsive.

## Improvements

I was disappointed not to implement the ability to track match winners through to a tournament winner, however I am pleased that the app is flexible enough to allow for any number of player inputs. The maximum player limit of 32 was only added to allow for more manageable responsive styling, however it could potentially be scaled up to accomodate any number of input names.

Another point is that I perhaps focused too heavily on the functionality of the app to start with, which made styling more difficult later on. I think considering both aspects equally during the build would have been more efficient in this respect.

Overall I am happy with the UI and functionality of the app. 


