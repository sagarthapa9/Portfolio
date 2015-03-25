<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   <title>Sagar Thapa/Contact Me</title>
    <link href="workandcontact.css" rel="Stylesheet" type="text/css" />  
      <script src="jquery-1.3.2.js" type="text/javascript"></script> 
   


    <script type="text/javascript">

        $(function () {

            $("nav a.anime").hover(
             function () {

                 $(this).animate({ top: "-8px" });

             },

             function () {

                 $(this).animate({ top: "0" });

             });
            $('.top').click(function () { $('html, body').animate({ scrollTop: 0 }, 'slow'); return false; });

        });
     </script>
</head>
<body>
    <div id="wrapper">
    
         <div id="projects">

             <nav>
                     <ul>
         
                            <li> <a href="Default.htm" class="anime">About</a></li>
                            <li> <a href="work.htm" class="anime">Work</a></li>
                            <li> <a href="../Blog/default.aspx" rel="external" class="anime">Blog</a></li>
                            <li> <a href="#" class="first">Contact</a></li>
                    </ul>

          
             </nav>
              <section id="contactstyles">
               
                    <div class="info">
                          <h2>Contact Me..</h2>  
                         
                         <p  class="Text2col"> Please Contact me using  this form or add me in facebook or LinkedIn to know more about me and my work.
                          <span style="font-weight:bold">Thanks for visiting My site!</span></p>
                    </div>

                   <aside id="form">
                          &nbsp;<form id="Contactdetails" method="post" action="#" runat="server" >

                        <label  ID="DisplayMsg"  runat="server"/><br />


                         <label for="Fname" style="position:relative;left:-160px">First Name:</label>

                           <asp:RequiredFieldValidator style="position:relative;left:-183px" ID="RequiredFieldValidator1" runat="server" ErrorMessage="* Please enter your first Name" 
                            ControlToValidate="Fname" ValidationGroup="save" ForeColor="Red" /><br />
                            
                         <asp:TextBox ID="Fname" runat="server" Width="300px"/>
                              
                              
                         
                         <label for="Lname" style="position:relative; top:-39px">Last Name:</label>
                   
                          <asp:RequiredFieldValidator style="position:relative; top:-39px" ID="LnameValidate" runat="server" ErrorMessage="*Please enter your Last Name" ControlToValidate="Lname"
                           ValidationGroup="save" ForeColor="Red" /> 

                          <asp:TextBox style="position:relative; top:-80px;right:-172px" ID="Lname" runat="server" Width="300px" /> 
                         <br />



                         <label style="position:relative;top:-80px; left:-257px" for="email" >Email Address:</label><br />
                           <!-- <input type="email" name="email" id="email" tabindex="20" />-->
                            
                            <asp:TextBox style="position:relative; top:-70px; left:136px" ID="emailadd" runat="server" Width="300px" />

                             <asp:RequiredFieldValidator style="position:relative;top:-30px; left:-180px" ID="emailValidate" runat="server" ControlToValidate="emailadd" ValidationGroup="save"
                                ErrorMessage="*Please enter email id" ForeColor="Red" />

                            <asp:RegularExpressionValidator style="position:relative;top:-30px; left:-257px" ID="emailvalidator" SetFocusOnError="true"  runat="server"
                             ControlToValidate="emailadd" ErrorMessage="*Please Enter valid Email add"  ForeColor="Red" ValidationGroup="save"
                             ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" />
                           
                            


                          <label  style="position:relative;top:-118px; left:-220px" >Subject:</label>

                               <asp:RequiredFieldValidator style="position:relative;top:-118px; left:-200px" ID="SubjectValidator" runat="server" ControlToValidate="subject" ValidationGroup="save"
                                ErrorMessage="*Please enter subject" ForeColor="Red" />

                                <asp:TextBox style="position:relative; top:-150px;right:-172px" ID="subject" runat="server" Width="300px" /><br />



                        
                         <label style="position:relative;top:-118px; left:-150px" for="txtArea" id="msg" >---Message---</label><br />

                            
                          <!-- <textarea name="message" id="message" tabindex="70" cols="45" rows="10"></textarea>-->

                           <asp:RequiredFieldValidator style="position:relative;top:-118px; left:-20px" ID="Msg" runat="server" ControlToValidate="MsgBox" ValidationGroup="save" ErrorMessage="*please enter your Message" 
                            ForeColor="Red" />

                              <asp:TextBox style="position:relative;top:-118px; left:-20px" ID="MsgBox" runat="server" 
                                TextMode="MultiLine" Rows="10" Width="800px" />



                           <p class="clear" />

                           <asp:Button ID="btnSubmit" runat="server" Text="Submit" 
                                  ValidationGroup="save" onclick="btnSubmit_Click" />
                    
                     </form>
                   </aside>
               
               </section>


           </div>
             <p class="clear" />

             <div id="scroll">
                   <a title="Scroll to the top" class="top" href="#"><img src="images/top.png" alt="top" /></a>
            </div>
    </div>
      <footer>
                      <h2>Follow me and get in touch on...</h2>
                     <a class="socialntw" href="http://www.facebook.com/sagar.thapa.338"><img src="images/fb.png" alt="facebook" /></a>
                     <a class="socialntw" href="http://www.linkedin.com/profile/view?id=151319796&trk=hb_tab_pro_top"><img src="images/linked.png" alt="linkedin"/></a>
                     <a class="socialntw" href="#"><img src="images/yahoo.png" alt="yahoo"/></a>
  
                    <p>Copyright &copy; 2013 Sagar Thapa </p>
    

          </footer>


    
</body>
</html>
