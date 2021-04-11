# Pig Game | Play it ![here](https://confusedrobo.github.io/zodiac-libra-pig-race/)

This game is a called a pig race game which basically, uses the random dice roll concept.
For example, when you roll a dice in real life you're bound to get any number between **{1, 2, 3, 4, 5, 6}** assuming you're using a dice that has six faces.
So, this game utilizes this logic by adding up the random numbers upto hundred. And, if a player reaches the goal score before the opponent then they'll have won the match.

---

## Setting Up

Just clone this repo and double click on the `index.html` file and you're all set.

## Properties and Instructions

-   There are currently two players called `DARK` and other `LIGHT`
-   Initial score will be **0**
-   `HOLD` button will _transfer_ the current score to the main scoreboard i.e. located in the middle of each opponent's section
-   `ROLL DICE` button will fetch any random number between `1 - 6` and add it with current score
-   `NEW GAME` button will start a new session you can also do this by reloading the page
-   If it's Dark's turn then the screen will glow white similarly, if it's Light's turn then the screen will glow white
-   Note that `LIGHT` will start their turn first
-   After the match the winner's screen will glow even brighter and the hold and roll buttons will be hidden

## Rules

1.  No cheating ;)
2.  If a player encounters `1` as their roll then the turn will be shifted to their opponent
    <img src="./readme-assets/FqILv5T.gif" alt="focus shift" />
3.  See in the above image that the current value has been discarded. And, to escape this you should use the hold button because it'll save the score and add it to the main scoreboard otherwise, you'll lose your hard earned score!
    <img src="./readme-assets/ibGku2B.gif" alt="save score" />
4.  `NEW GAME` will reset the entire session
    <img src="./readme-assets/fSXmTM2.gif" alt="new game button" />
5.  That's it! Enjoy!

---

## Customizations

Tweaking the code and making changes to background, foreground, changing the fonts, etc.

### Changing the background

1.  Go to the `style.css` file
2.  Look for this snippet:

    ```css
    body {
    	font-family: "Nunito", sans-serif;
    	font-weight: 400;
    	height: 100vh;
    	color: #333;
    	background-image: linear-gradient(to top left, #100029 0%, #920540 100%);
    	display: flex;
    	align-items: center;
    	justify-content: center;
    }
    ```

3.  Now, in this line `background-image: linear-gradient(to top left, #100029 0%, #920540 100%);` you'd need to change `#100029` and `#920540` to any other color like `aquamarine` and `darkorchid` or, any hex/rgb color codes. Also, you can play around with the angle, alignment and percentage as well
    <img src="./readme-assets/tSDVgzI.gif" alt="demo" />

### Changing the font

1.  Go to the `style.css` file
2.  Look for this snippet:

    ```css
    body {
    	font-family: "Nunito", sans-serif;
    	font-weight: 400;
    	height: 100vh;
    	color: #333;
    	background-image: linear-gradient(to top left, #100029 0%, #920540 100%);
    	display: flex;
    	align-items: center;
    	justify-content: center;
    }
    ```

3.  Now, in this line `font-family: "Nunito", sans-serif;` you'd need to change `"Nunito"` to any other font like `"courier new"`. Also, if you're using a custom font then import it first
    <img src="./readme-assets/ent18jr.gif" alt="demo" />
