HTML will be a card with empty divs to be later populated
New button 
	Eventlistener
Resetbutton
	Event listener
State (obj)			(each page will have an object like this)
	Current page: int
	Example text
	Btn text: “”
	Header text: “”
	helper text: “”
	Symbols: [  ] (9)
Randomized symbols: [   ] (100) 
Answer symbol:

Pages [
Btn text: “”
	Header text: “”
	helper text: “”
	Example text: “”
	]


Functions
	init()
 updatePage()
	Set to new text
		If header text
			Getelementbyid.header = page.headertext
		If button text
		Getelementbyid.btn = page.btntext
			Else change button to hidden
		(do for all elements)

randomizeSymbols()
	Randomize list of 9
	Loop to 100
		Create element
		I is the number
		% 9 on the random array is the symbol
nextpage()
reset()
	Getelementbyid.reset on all elements. Might be necessary for each page change

container OBJ{
	Pagesarray[
		page1{
	
