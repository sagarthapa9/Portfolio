using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.IO;
using System.Net;
using System.Net.Mail;

public partial class Contact : System.Web.UI.Page
{

    protected void SendMail()
    {
       /* MailMessage Msg = new MailMessage();

        //sender email address
        Msg.From = new MailAddress(email.Text);

        //Recipent e-mail address

        Msg.To.Add(new MailAddress("sagarthapa_9@yahoo.com"));
        Msg.Subject = subject.Text;
        Msg.Body = MsgBox.Text;
        

        //smtp settings
        SmtpClient smtp = new SmtpClient();

          
        smtp.Host="smtp.mail.yahoo.com";
        smtp.Port=587;
        smtp.EnableSsl=true;
       // smtp.DeliveryMethod= System.Net.Mail.SmtpDeliveryMethod.Network;
        smtp.Credentials= new System.Net. NetworkCredential("sagarthapa_9@yahoo.com","dotnetprogramer");
        smtp.Timeout=20000;
        
  


        //passing values to smtp object
          smtp.Send(Msg);*/
     }


     
    
    
    
    protected void btnSubmit_Click(object sender, EventArgs e)
       {

           try
           {
              


        MailMessage msg = new MailMessage();

        msg.From = new MailAddress(emailadd.Text);
        msg.To.Add(new MailAddress("sagarthapa_9@yahoo.com"));
        msg.Subject = subject.Text;
        msg.Body =  emailadd.Text+ Environment.NewLine  + Fname.Text + Environment.NewLine + MsgBox.Text;
        SmtpClient client = new SmtpClient();
        client.Host = "smtp.gmail.com";
        client.Port =587;
        client.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
      
        client.Credentials = new System.Net.NetworkCredential("sagarthapa811@gmail.com", "codebreaker619");
        
        client.EnableSsl = true;
        client.Send(msg);

                  

                   DisplayMsg.InnerText = "Thank You for Contacting! ";

                   DisplayMsg.Visible = true;

                   Fname.Focus();
                   subject.Text = "";
                   Fname.Text = "";
                   Lname.Text = "";
                   emailadd.Text = "";
                   subject.Text = "";
                   MsgBox.Text = "";

               }
           
           catch (Exception ex)
           {
               Response.Write("Could not send the e-mail - error: " + ex.Message);  
           
           
           }



      }
}