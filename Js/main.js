//External JS

//Defining the function toggle() for changing the image from the webpage
function toggle() {
    var p1 = document.getElementById("1");  //Accessing the images with its id 
    var p2 = document.getElementById("2");
    
    if (p1.style.display == "none") {
        p1.style.display = "block";         //Block displays the image in the webpage
        p2.style.display = "none";          //None hides the image from the webpage.
    } 
    else {
        p1.style.display = "none";
        p2.style.display = "block";
    }
}

//Defining the function display_date() for displaying the date

function display_date() {
            document.getElementById('date').innerHTML = Date();     //Accessing the element using its id and changing its property/Inner Html
            setTimeout(display_date,1000);                          //Setting the timeout for the display.
        }      



 //Defining the function validateform() for displaying an alert message during form validation.
function validateform( ) 
                {
                            var name = document.forms ["form"]  ["name"].value;
                            var email = document.forms ["form"]  ["email"].value;
                            var message = document.forms ["form"]  ["Message"].value;
                            var phone = document.forms ["form"]  ["phone"].value;
                            if   (name == "" || email == "" || message == "" || phone == "")
                                {
                                        alert ("Empty field found!! Please fill the form correctly!");
                                    }
                            else {
                                        alert ("Thankyou for giving a genuine feedback!");
                                    }       
                }       

                