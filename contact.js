$(function(){
    $("#contact").validate({
        rules:{
            name:{
                required:true,
                minlength:3
                
            },
            place:{
                required:true,
                minlength:3

            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:10,
                
            },
            msg:{
                required:true

            }
        },
        
        messages:{
            name:{
                required:"Please enter your name",
                minlength:"Please enter atleast 3 characters"

            },
            place:{
                required:"Please enter your place",
                minlength:"Please enter atleast 3 characters"
            },
            email:{
                required:"Please enter your email",
                email:"Please enter a valid email"
            },
            phone:{
                required:"Please enter your Mobile number",
                minlength:"Please enter a valid number"
                
                },
            msg:{
                required:"Please enter a Message"
            }
           
        }
    });
});