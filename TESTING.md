# Testing 

## Testing Validator Testing 
 **HTML** - I tested the HTML with [W3C Validation Testing](https://validator.w3.org/) 

 At first i got back 13 warnings but 12 where in relation to naming convention with regards to my blank image. There was accidently a space I removed the space and one got back one warning regarding H2 - H6 headings. This is a styling choice. 

 Click [Here](/workspace/Mario-Memory-game/assets/images/html.png) to view HTML results.

 **CSS** - I tested the css code with [W3C CSS validation Testing](https://jigsaw.w3.org/css-validator/)

 I recieved no errors. 

 Click [Here](/workspace/Mario-Memory-game/assets/images/css.png) to view CSS results.

 **Jshint** - I tested the Javascript code using [JSHint](https://jshint.com/).

 At first i recieved over 23 warnings and one unused variable due to esversion 6 and using arrow functions. I fixed 22 of the warnings by adding  /*jshint esversion: 6 */ to the top of the code this instucts JSHint to ignore these. So then i was left with one warning and one unused variable and one redefinition of variable. The one unused variable was for the reset function which is working perfectly when you hit play again. 

 Click [Here](/assets/images/JSHint.png) to view results.

 **Lighthouse** - The lighthouse report was created using chrome dev tools on my laptop. 

 Click [Here](/assets/images/lighthouse.png) to view the results. 

 ## Functionality 
1. As a user of the game i should be able to see the rules of the game. - The user is able to click on the rules button to view the game rules - Passed 
1. As a user of the game i should be able to click on a card to begin the game. - The user is able to click on any card to begin the game - Passed 
1. As a user of the game i should only be allowed to click on two cards at a time. - The user is only able to click on two cards at a time the board will lock - Passed
1. Any card matches should stay facing upwards. - The cards will only stay facing upwards when two cards have matched - Passed
1. Any cards not marched should turn backwards. - If the cards don't match they will flip backwards - Passed 
1. As a user of the game i should know the numer of flips i have had. - The flip counter at the bottom of the page counts the number of flips - Passed
1. As a user of the game i should recieve a win message once all matches have been made - The win modal pops up once all the matches have been found and includes a total number of flips - Passed
1. By using the game i should be able to test my memory. - Remembering where each card is positioned is testing my memory. Replaying the game to see if i can reduce my number of flips will challenge my memory - Passed 
1. By clicking the links on the footer it should take me to social media sites - Passed 

## Responsiveness 

- For all my responsiveness testing I used chrome dev tools
- Family and Friends also tested on different mobile devices

The results are listed below;

### Game Area -  tested using chrome dev tools
|Device    |Images     |Flip    |Flip Counter   |Rules Modal    |Win Modal
|---       |---        |---     |---   |--- |--- 
|Samsung S5     |Responsive      |Responsive     | Responsive|Responsive|Responsive|
|iphone 5   |Responsive |Responsive |Responsive|Responsive|Responsive|
|iphone 6/7/8     |Responsive      |Responsive     |  Responsive     |Responsive|Responsive|
|ipad     |Responsive      |Responsive    |Responsive       |Responsive|Responsive|
|ipad pro |Responsive      |Responsive    |Responsive       |Responsive|Responsive|
|Desktop 1024px |Responsive      |Responsive    |Responsive       |Responsive|Responsive|

Click [Here](https://vimeo.com/653126593/23b7fb45ca) to review a video on testing responsiveness on Chrome Dev tools 

## Browser Compatibility Testing
### **Browser type**

 |**Chrome**|**Internet Explorer**|**Firefox**|**Edge**|
 |---|---|---|---|
 |Responsive|Responsive|Responsive|Responsive|
 |Appearance Good|Appearance Good|Appearance Good|Appearance Good|
 
 # BUGS

## Unsolved

The site is working on all devices and is fully responsive using chrome dev tools. However when using an iphone the flip function is not fully rotating. I have tried numerous fixes to overcome this however from the research i have conducted i have found that this bug is extremely common on IOS devices. 

I am documenting the bug here