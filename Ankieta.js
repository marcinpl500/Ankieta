

function SendMail(Klasa,Kierunek,Plec,Imie,Opis,Ema)
{
    
    Email.send({
        SecureToken: "64193a64-19ed-49d4-9f9a-c0f6446d7890",
        To: Ema,
        From: "TestAnkietaSZKAS@gmail.com",
        Subject: "Twoje odpowiedzi z ankiety JS",
        Body: "Witaj "+Imie+".\nW tej wiadomości mailowej ujrzysz swoje odpowiedzi na ankiecie.\n Jesteś w "+Klasa+" na kierunku "+Kierunek+".\n Masz na imię "+Imie+" i jesteś płci "+ Plec+"\nTwój opis: \n"+Opis+". \n Dziękuję za skorzystanie.\nPozdrawiam,\nMarcin Gardy"
    })
    .then(function(message){alert("Mail sent successufully")});
}
function GetValue(id ) //, isDropdown = false
{
//if(isDropdown == true)
//{
    return document.getElementById(id).value;
//}
/*else
{
    let el = document.getElementById(id);
    return el.options[el.SelectedIndex].innerHTML;
}*/
}

function GetSexChoice()
{
    var checkRadio = document.querySelector('input[name="Plec"]:checked');
    if(checkRadio != null )
    {
        return checkRadio.value;
    }
    else
    {
        return "Nie Podano";
    }
}

function EndForm()
{
    var Klasa = GetValue("Klasy-Btns");
    var Kierunek = GetValue("Kierunek-Btns");
    var Plec = GetSexChoice();
    var Imie = GetValue("Imie");
    var Opis = GetValue("Opis");
    var Email = GetValue("Email");
    SendMail(Klasa,Kierunek,Plec,Imie,Opis,Email);

}
