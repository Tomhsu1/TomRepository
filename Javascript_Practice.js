<!DOCTYPE HTML>

<html>
        <! -- For the body, when copied, it calls doNotCopy() function -->
        
        // -- Variables that are functions (ie, doNotCopy)
        // -- Variables that are numbers -- counter
        // -- Variables that are strings -- (ie StringExample)
        // -- Variables that are booleans (true, false)
    
    <head>
        
		<title>Warm Up Exercise #1</title>

		<script>
            
            var counter = 0
			
            var helloWorld = function()    {
                alert("You cannot copy this!");
            }
            
            var confirm = function()    {
                counter = counter + 1
                if (counter > 0)
                    alert("Please stop clicking me");
            }    else   {
                    alert("You clicked me");
            }
            
            var doNotCopy = function()  {
                alert("Copying the page? Nice try");
            }
            
            var stop = function()   {
                alert("Stop trying to copy this website");
            }
            
            var done = function()   {
                alert("I told you not to copy the title");
            }
            
		</script>
		
	</head>

	<body oncopy = doNotCopy()>

		<h1> Warm Up Exercise #1 </h1>

        <h3> On this page: </h3>

		<ul>
			<li>All the text,</li>
			<li>From this,</li>
			<li>to this,</li>
			<li>to that.</li> 
            </ul> 

		<p oncopy = helloWorld()> Should yell at the user if they try to copy it! </p>
        
        <button onclick = confirm() onmouseover = "style.color = 'red'"> <marquee> Click here </marquee> </button>
        
        <p oncopy = stop()> Copy this for more information </p>
		
	</body>

</html>