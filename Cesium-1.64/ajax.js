<html>
<head>
  <script src="http://code.jquery.com/jquery-1.6.2.min.js"></script>    
  
</script>
</head>
<body>

<form>
   <input type="button" id="enter" value="Enter">
</form>
<script type="text/javascript">

      $('#enter').click(function(){  

     $.ajax({ 
           url: '/ajax',
           type: 'POST',
           cache: false, 
           data: { field1: 1, field2: 2 }, 
           success: function(data){
              alert('Success!')
           }
           , error: function(jqXHR, textStatus, err){
               alert('text status '+textStatus+', err '+err)
           }
        })
     });            

</body> 
</html>