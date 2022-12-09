$(document).ready((function(){$("form").submit((function(){var t=$(this);return $.ajax({type:"POST",url:"mail.php",data:t.serialize()}).done((function(){alert("Thank you!"),setTimeout((function(){t.trigger("reset")}),1e3)})),!1}))}));
//# sourceMappingURL=index.e35f58d7.js.map
