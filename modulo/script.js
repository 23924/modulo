for(var i = 1; i <= 100; i++){

  var result = "";

  if( i % 3  == 0 ){ result = result + "Drie "; }
  if( i % 5  == 0 ){ result = result + "Vijf "; }
  if( i % 7  == 0 ){ result = result + "Zeven "; }
  if( i % 11 == 0 ){ result = result + "Elff "; }
  if( result == ""){ result = i; }

  console.log(result);

}
