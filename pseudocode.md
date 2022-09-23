HTML will be a card with empty divs to be later populated
p class header

start button 
	Eventlistener
Reset button
	Event listener
p class lowerText

state array (called pages)
	each page will be an object inside this array. set up as following
	{
		head: header text. the most important info
		btnBot: will either say GO to start, or <- for reset
		btnTop: the big next page button
		lowerText: secondary info!
	}	


Functions

Pages [
Btn text: “”
	Header text: “”
	helper text: “”
	Example text: “”
	]

numbered()
	N = 0
	if N < 100
	push into array .push(N)
	N++
	return N


 pageUp()
	x = 2   (this function doesnt become necessary until the secon obj in pages array)
	changes the pages HTML elements with .getElementById
	set elements to object[x].HTMLelement
	x++


randomizeSymbols()
	Randomize list of 9
	arr.sort into math.random


reset()
	uses .getElementById to change the page back to page 2 (the page after the go button)
	runs the function randomizeSymbols()
	sets x = 2 (the page number variable)
	return x

container OBJ{
	Pagesarray[
		page1{
	
