const icon = document.getElementById('arrow-icon');

  window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
         }
      });



      var count = document.getElementById("counter")

      var valid = true
      window.addEventListener('scroll', function() {
        var i = 0
        if ( window.scrollY > 900) { 
          if(valid){
            var  interval = setInterval(() => {
              count.innerText = i
              if (i == 8000) {
                  clearInterval(interval) 
                  valid = false
              }
              i+=100
          }, 20)
          }
      }  
      });


      var count1 = document.getElementById("counter1")

      var valid1 = true
      window.addEventListener('scroll', function() {
        var i = 0
        if ( window.scrollY > 900) { 
          if(valid1){
            var  interval = setInterval(() => {
              count1.innerText = i
              if (i == 810) {
                  clearInterval(interval) 
                  valid1 = false
              }
              i+=30
          }, 50)
          }
      }  
      });



      var count2 = document.getElementById("counter2")

      var valid2 = true
      window.addEventListener('scroll', function() {
        var i = 0
        if ( window.scrollY > 900) { 
          if(valid2){
            var  interval = setInterval(() => {
              count2.innerText = i
              if (i == 2000) {
                  clearInterval(interval) 
                  valid2 = false
              }
              i+=40
          }, 30)
          }
      }  
      });


      var count3 = document.getElementById("20")

      window.addEventListener('scroll', function() {
        var valid3 = true
        var i = 0
        if ( window.scrollY > 900) { 
          if(valid3){
            var  interval = setInterval(() => {
              count3.innerText = i
              if (i == 20) {
                  clearInterval(interval) 
                  valid3 = false
              }
              i+=1
          }, 60)
          }
      }  
      });

      $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          items : 2,
          margin :20,
          nav : true ,
          navText: ['<i class="fa-solid fa-arrow-left rounded-start-pill px-4 py-2 m-2 border border-1 border-primary bg-primary text-white"></i>',
                    '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-2 border border-1 border-primary bg-primary text-white"></i>'],
        }
        );
      });

var form = document.getElementById('form1');

form.addEventListener('input', function(e) {
    if (e.target.id === 'name') {
        checkName(e.target);
    } else if (e.target.id === 'userEmail') {
        emailCheck(e.target);
    } else if (e.target.id === 'subject') {
        checkSubject(e.target);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    var isValidName = checkName(document.getElementById('name'));
    var isValidEmail = emailCheck(document.getElementById('userEmail'));
    var isValidSubject = checkSubject(document.getElementById('subject'));
    
    if (isValidName && isValidEmail && isValidSubject) {
        alert('Form submitted successfully!');
        
    } else {
        alert('Please fill out the form correctly.');
    }
});

function emailCheck(input) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputValue = input.value;
    if (emailRegex.test(inputValue)) {
        input.nextElementSibling.innerText = "";
        return true; 
    } else {
        input.nextElementSibling.innerText = "Enter a valid email";
        return false;
    }
}


function checkName(input) {
    var nameValue = input.value;
    if (nameValue.length < 3) {
        input.nextElementSibling.innerText = "Please enter more than 3 characters";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}


function checkSubject(input) {
    var subjectValue = input.value.trim(); 
    if (subjectValue === "") {
        input.nextElementSibling.innerText = "Subject cannot be empty";
        return false; 
    } else {
        input.nextElementSibling.innerText = "";
        return true; 
    }
}
