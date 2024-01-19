//Irida ad appearance and closing buttons script
        
            var adsEl = document.getElementById("ad-container");
            var close1Button = document.getElementById("close1");
            var close2Button = document.getElementById("close2");
            var close3Button = document.getElementById("close3");
            var ad1El = document.getElementById("ad1");
            var ad2El = document.getElementById("ad2");
            var ad3El = document.getElementById("ad3");

            var adsAppearance = function(){
                adsEl.style.display = "block";
            }

            setTimeout(adsAppearance,500);

            var close1ButtonAction = function() {
                close1Button.style.display = "none";
                ad1El.style.display = "none";
            }

            var close2ButtonAction = function() {
                close2Button.style.display = "none";
                ad2El.style.display = "none";
            }

            var close3ButtonAction = function() {
                close3Button.style.display = "none";
                ad3El.style.display = "none";
            }

            close1Button.addEventListener("click",close1ButtonAction);
            close2Button.addEventListener("click",close2ButtonAction);
            close3Button.addEventListener("click",close3ButtonAction);
        
        
//Anna popup image script
            var slideShowImage = document.getElementById("item-displayed");
            
            var slideClickAction = function() {
                document.querySelector(".popup-image img").src = slideShowImage.getAttribute('src');
                document.querySelector(".popup-image").style.display = 'block';
            }
            
            slideShowImage.addEventListener("click",slideClickAction);
            
            var xButton = document.querySelector(".popup-image span");
            var xClickAction = function() {
                document.querySelector(".popup-image").style.display = "none";
            }
            xButton.addEventListener("click", xClickAction);           
            
    
        
//Anna popup slideshow script
            var posterElements = document.getElementsByClassName("slideshow-image");
            var showPopUp = 0;
            var popUpDisplayed = document.querySelector(".popup-image img");            
            
            var nextClickAction = function() {
                showPopUp++
                
                if (showPopUp >= posterElements.length){
                    showPopUp=0;
                }
                
                popUpDisplayed.src = posterElements[showPopUp].src
            }
            
            var prevClickAction = function() {
                showPopUp--
                
                if (showPopUp < 0 ){
                    showPopUp = posterElements.length - 1;
                }
                
                popUpDisplayed.src = posterElements[showPopUp].src
            }
            
            var popUpNext = document.getElementById("nextpop");
            var popUpPrev = document.getElementById("prevpop");
            
            popUpNext.addEventListener("click", nextClickAction);
            popUpPrev.addEventListener("click", prevClickAction);
            
      

//Irida star rating script 
            var submitButton = document.getElementById("ratingSubmitButton");
            var changeButton = document.getElementById("ratingChangeButton");
            changeButton.style.display = "none";
            var ratingAlertFunction = function(){
                var checkStar1 = document.querySelector('input[id="star1"]:checked');
                var checkStar2 = document.querySelector('input[id="star2"]:checked');
                var checkStar3 = document.querySelector('input[id="star3"]:checked');
                var checkStar4 = document.querySelector('input[id="star4"]:checked');
                var checkStar5 = document.querySelector('input[id="star5"]:checked');

                if((checkStar1 === null) && (checkStar2 === null) && (checkStar3 === null) && (checkStar4 === null) && (checkStar5 === null)) {
                    window.alert("Hi, there! Please input a rating!");
                }
                else{
                window.alert("Thank you for your input.");
                submitButton.disabled = true;
                changeButton.style.display = "block";
                }
            }

            var ratingChangeFunction = function(){
                submitButton.disabled = false;
                changeButton.style.display = "none";
            }

            submitButton.addEventListener("click", ratingAlertFunction);
            changeButton.addEventListener("click",ratingChangeFunction);

            
//Dimitris comments appending script
            var nameInput = document.getElementById("nameInput");
            var commentInput = document.getElementById("commentInput");
            var submitBtn = document.getElementById("commentSubmit");
            var commentSection = document.getElementById("appendedComments");

            function logComment() { 
                var userName = nameInput.value;
                var userComment = commentInput.value;
                var newComment = document.createElement("p");

                newComment.innerHTML = "<strong>"+userName+"</strong>: <br><br>"+userComment+"<br><br>";
                
                if(userName === ""){
                    nameInput.value = "";
                    commentInput.value = "";    
                    window.alert("Please enter a username before posting your comment!");
                } 
                else if(userComment === ""){
                    if(userName !== ""){
                        nameInput.value = "";
                        commentInput.value = "";    
                        window.alert("Hi, "+userName+"! Don't forget to write a comment to post!");
                    }
                    else{
                        nameInput.value = "";
                        commentInput.value = "";    
                        window.alert("Hi, there! Please enter your username and a comment to post!");    
                    }
                }
                else{
                    commentSection.appendChild(newComment);
                    nameInput.value = "";
                    commentInput.value = "";
                }    
            }

            submitBtn.addEventListener("click", logComment);


//Irida posters slideshow script
           var slideShowPosters = document.getElementsByClassName("slideshow-image");
           var showItem=0;
           var posterOne = document.getElementById("poster1");
           var posterTwo = document.getElementById("poster2");
           var posterThree = document.getElementById("poster3");
           var displayedItem = document.getElementById("item-displayed");

           var nextButtonAction = function(){
                showItem++;
                if(showItem>=slideShowPosters.length){
                    showItem=0;
                }
                displayedItem.src = slideShowPosters[showItem].src;
            }

            var previousButtonAction = function(){
                showItem--;
                if(showItem<0){
                    showItem=slideShowPosters.length-1;
                }
                displayedItem.src = slideShowPosters[showItem].src;
            }

            var posterOneAction = function(){
                displayedItem.src = posterOne.src;
            }

            var posterTwoAction = function(){
                displayedItem.src = posterTwo.src;
            }

            var posterThreeAction = function(){
                displayedItem.src = posterThree.src;
            }

            var nextButton = document.getElementById("next");
            nextButton.addEventListener("click",nextButtonAction);

            var prevButton = document.getElementById("previous");
            prevButton.addEventListener("click",previousButtonAction);

            var posterOneButton = document.getElementById("container-poster1");
            posterOneButton.addEventListener("click",posterOneAction);

            var posterTwoButton = document.getElementById("container-poster2");
            posterTwoButton.addEventListener("click",posterTwoAction);

            var posterThreeButton = document.getElementById("container-poster3");
            posterThreeButton.addEventListener("click",posterThreeAction);


//Irida see more see less button script
            var plotEl = document.getElementById("plot-text");
            var seeMoreButton = document.getElementById("seeMore");
            var seeLessButton = document.getElementById("seeLess");
            plotEl.style.maxHeight = "115px";
            plotEl.style.overflow = "hidden";
            seeLessButton.style.display = "none";
            var seeMoreAction = function(){
                plotEl.style.overflow = "visible";
                plotEl.style.maxHeight = "none";
                seeMoreButton.style.display = "none";
                seeLessButton.style.display = "block";
            }

            var seeLessAction = function(){
                plotEl.style.overflow = "hidden";
                plotEl.style.maxHeight = "115px";
                seeMoreButton.style.display = "block";
                seeLessButton.style.display = "none";
            }

            seeMoreButton.addEventListener("click",seeMoreAction);
            seeLessButton.addEventListener("click",seeLessAction);


//Irida inactive message
            var timer;
            var timeout = function () {
                alert("God is always watching!");
            }
            timer = setTimeout(timeout, 300000);
            window.onmousemove = function() {
                clearTimeout(timer);
                timer = setTimeout(timeout, 300000);
                document.body.style.cursor  = "auto";
            };

            
//Anna critics' reviews slideshow script
            var slideIndex = 1;
            showSlides(slideIndex);

            function nextSlide(n) {
              showSlides(slideIndex += n);
            }

            function currentSlide(n) {
              showSlides(slideIndex = n);
            }

            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("critic-slides");              
              if (n > slides.length) {
                  slideIndex = 1}    
              if (n < 1) {
                  slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              
              slides[slideIndex - 1].style.display = "block";  
              
            }
            window.onload= function () {
             setInterval(function(){ 
                 nextSlide(1);
             }, 10000);
             }
        