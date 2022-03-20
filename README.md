# Red light, green light
My first front-end project, written after a month @Ironhack web dev bootcamp.
<br><br>
It was inspired by the tv show 'Squid Game' and is a combination of the children game 'red light, green ligth' and an obstacles race.

## <b>Technologies used :</b> 
HTML, CSS, JS, Canvas

## Details
When the player clicks on 'Play', the game canvas is drawn and the music starts playing.<br>
Tortillon, the turtle has to reach the sea, but can only move if music is playing.<br>
The player makes Tortillon move using the arrow keys (right, left, up).

There are three differents music speeds, which are played randomly.<br>
Once a music comes to end, a new one is played at a random time between 2 and 4s.

If Tortillon moves when music is not playing, he returns to the starting point and there is a sound message explaning the penalty.

Crabs move in the opposite direction of Tortillon when music is playing. <br>
If not, they stay in their position.

If Tortillon gets pinched by a crab or bumps into a fence, music stops playing and a sound indicating the collision is played.<br>
A “gameover” message appears in the form of a cloud in the sky.<br>
A timer is activated (setTimeout) and after 2s, the player returns to the homepage.

If Tortillon reaches the sea, the player wins, the music stops playing, and there is a diving sound.<br>
A plane flies in the sky showing a congratulations message, then the player returns to the homepage.

## Give it a try
<a href="https://cindyconfiant.github.io/RedLightGreenLight/">Click to play </a>
<br><br>

## Homepage
![Homepage](https://user-images.githubusercontent.com/87827626/159142884-42ec23fa-d1b2-40bc-9412-93e21bd04df7.png)
<br> <br>

## Playing
![Playing](https://user-images.githubusercontent.com/87827626/159142915-c24f4e0b-cfaa-4495-a98d-cbef7bb9658b.png)
<br> <br>

## Game over
![Game over](https://user-images.githubusercontent.com/87827626/159142963-a28015cd-7401-4d68-8b3a-118adc840965.png)
<br><br>

## Win
![Win](https://user-images.githubusercontent.com/87827626/159143018-ade60eb5-2de6-427b-9613-4da4df12710b.png)
