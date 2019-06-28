const sendmail=require("./sendmail");



const env={
    to: "iarjona@ittepic.edu.mx",
    subject:"Tarea 4 - Alesi",
    text:`AAAA`,
    /*attachments:[
        {filename:"pag.jpg",path:"./pag.jpg"},
    ],*/
    html:`<div style="background-color:blue"><font color="#ffffff"><h2>Teatro Oceania presenta:</h2></font></div>
    <div style="background-color:lightblue"><font face="Kunstler Script" color="#111100"><h1></h1></font></div>
    <div><img src="pag.jpg" /></div>
    <div>Clic aqui para recibir boletos</div>-
    <div><a rel='nofollow' href='https://es.qr-code-generator.com/a1/?ut_source=google_m&ut_medium=cpc&ut_campaign=rest_variations&ut_content=qr_hacer_exact&ut_term=como%20generar%20un%20codigo%20qr_e&gclid=CjwKCAjw0tHoBRBhEiwAvP1GFZp_-vqVjfUHgdEoMOOvG0AeEaY8ZAcZITaLeFDhFEHXatqWlsyGNRoCC-8QAvD_BwE
    ' border='0' style='cursor:default'><img src='https://chart.googleapis.com/chart?cht=qr&chl=Boletos%20recibidos.&chs=180x180&choe=UTF-8&chld=L|2' alt=''></a></div>`
}

sendmail.send(env);










