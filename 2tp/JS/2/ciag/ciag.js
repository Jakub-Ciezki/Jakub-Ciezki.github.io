function ciagliczb()
{
    var inleft = document.getElementById("inleft").value;
    var inright = document.getElementById("inright").value;
    var napis = "";
    
    if (inleft < inright) 
    {
        for (i=inleft; i<inright; i++)
        {
            napis = napis + i + " ";
        }
        napis = napis + " " + inright;
        document.getElementById("wynik").innerHTML = napis;

    } else if (inleft > inright) 
    {
        for (i=inleft; i>inright; i--)
        {
            napis = napis + i + " ";
        }
        napis = napis + " " + inright;
        document.getElementById("wynik").innerHTML = napis;

    } else if (inleft = inright) document.getElementById("wynik").innerHTML = inleft + " " + inright;
    else document.getElementById("wynik").innerHTML = "Błąd!!!";
}