$(function (){

    $("#nome").keyup(function(event) {
        var data=$(this).val();
        $('#nomevalor').val(data);
    });
    
    $("#email").keyup(function(event) {
        var data=$(this).val();
        $('#emailvalor').val(data);
    });
    
    $("#telefone").keyup(function(event) {
        var data=$(this).val();
        $('#telefonevalor').val(data);
    });
    
    $("#assunto").keyup(function(event) {
        var data=$(this).val();
        $('#assuntovalor').val(data);
    });
    
    $("#mensagem").keyup(function(event) {
        var data=$(this).val();
        $('#mensagemvalor').val(data);
    });

      
        $('#nomesalvo').val(sessionStorage.nomefront);
        $('#emailsalvo').val(sessionStorage.emailfront);
        $('#telefonesalvo').val(sessionStorage.telfront);
        $('#assuntosalvo').val(sessionStorage.assuntofront);
        $('#mensagemsalvo').val(sessionStorage.mensagemfront);
     
    
    $('#salvaalteracao').click(function(){

        var nomefront = $('#nomesalvo').val(function(){
            sessionStorage.nomefront = $(this).val();
        });

        var emailfront = $('#emailsalvo').val(function(){
            sessionStorage.emailfront = $(this).val();
        });

        var telfront = $('#telefonesalvo').val(function(){
            sessionStorage.telfront = $(this).val();
        });

        var assuntofront = $('#assuntosalvo').val(function(){
            sessionStorage.assuntofront = $(this).val();
        });
        
        var mensagemfront = $('#mensagemsalvo').val(function(){
            sessionStorage.mensagemfront = $(this).val();
        });      

   })


    $('#enviar').click(function(){
        
        var nomefront = $('#nome').val(function(){
            sessionStorage.nomefront = $(this).val();
        });

        var emailfront = $('#email').val(function(){
            sessionStorage.emailfront = $(this).val();
        });

        var telfront = $('#telefone').val(function(){
            sessionStorage.telfront = $(this).val();
        });

        var assuntofront = $('#assunto').val(function(){
            sessionStorage.assuntofront = $(this).val();
        });
        
        var mensagemfront = $('#mensagem').val(function(){
            sessionStorage.mensagemfront = $(this).val();
        });            
    })  

    $('#mostracampos').click(function(){    
        $('#nomesalvo').val(sessionStorage.nomefront);
        $('#emailsalvo').val(sessionStorage.emailfront);
        $('#telefonesalvo').val(sessionStorage.telfront);
        $('#assuntosalvo').val(sessionStorage.assuntofront);
        $('#mensagemsalvo').val(sessionStorage.mensagemfront);
     })


     $("#email").blur(function() 
        {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
        var emailaddress = $("#email").val();
        if(!emailReg.test(emailaddress)) {
            alert('Por Favor insira um email valido')
            $("#email").focus();
        }       
        else
            Console.log('');  
        });
 
   
    $('#mostracampos').click(function(){
        $('#editarform').addClass('formshow');
    })

    $('.mask_phone').mask('(00) 0000-0000#', options);


   $('#mostracampos').click(function(){    
        $('#nomesalvo').val(sessionStorage.nomefront);
        $('#emailsalvo').val(sessionStorage.emailfront);
        $('#telefonesalvo').val(sessionStorage.telfront);
        $('#assuntosalvo').val(sessionStorage.assuntofront);
        $('#mensagemsalvo').val(sessionStorage.mensagemfront);
   })


 
   
   
    
    $("#email").blur(function() 
    {
     var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
     var emailaddress = $("#email").val();
     if(!emailReg.test(emailaddress)) {
         alert('Por Favor insira um email valido')
        $("#email").focus();
     }
       
     else
        Console.log('');  
    });


    
      
    
  

})


