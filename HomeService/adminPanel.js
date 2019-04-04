
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

  