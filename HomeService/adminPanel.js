/* sidebar functions */

var table=document.getElementById("Service");
                    var rindex;

                    for(var i=0;i<table.rows.length;i++)
                    {
                          table.rows[i].onclick=function()
                          {
                                rindex=this.rowIndex;
                                var array=new Array();
                              document.getElementById("sname").value=this.cells[0].innerHTML;
                              document.getElementById("sdesc").value=this.cells[1].innerHTML;
                              document.getElementById("price").value=this.cells[2].innerHTML;
                              var time=this.cells[3].innerHTML;
                              array=time.split("-")
                              var from=array[0];
                              var to=array[1];
                              document.getElementById("from").value=from;
                              document.getElementById("to").value=to;
                          };
                    }

     



function openSidebar() {
        document.getElementById("mySidenav").style.width = "250px";
  }

  function closeSidebar() {
        document.getElementById("mySidenav").style.width = "0px";
  }

/* time validation*/
  function print()
  {
  var from=document.getElementById("from1").value;
  var to=document.getElementById("to1").value;
  var fromArray=new Array();
  var toArray=new Array();
  fromArray=from.split(":");
  toArray=to.split(":");
  fromHour=parseInt(fromArray[0]);
  tohour=parseInt(toArray[0]);
  // document.getElementById("dateshow").innerHTML=fromArray[0]+toArray[0];
  if(tohour<fromHour)
  {
  document.getElementById("dateshow").innerHTML="to hour must be greater";
  return false;
  }

  else if(tohour==fromHour)
  {
  if(parseInt(fromArray[1])<=parseInt(toArray[1]))
  document.getElementById("dateshow").innerHTML="valid entries";
  else
  {
  document.getElementById("dateshow").innerHTML="to hour must be greater";
  return false;
  }
  }
  else
  document.getElementById("dateshow").innerHTML="valid entries";
  }