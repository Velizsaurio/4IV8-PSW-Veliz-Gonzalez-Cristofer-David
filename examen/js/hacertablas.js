function validar(formulario)
{
    var checkOK = "0123456789";
    var costoCarro = formulario.costoCarro.value;
    var Enorden = true;
    var cuotaInicial = formulario.cuotaInicial.value;

    for(var i = 0; i < costoCarro.length; i++)
    {
        var ch = costoCarro.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length)
        {
            Enorden = false;
            break;
        }
    }

    for(var i = 0; i < cuotaInicial.length; i++)
    {
        var ch = cuotaInicial.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length)
        {
            Enorden = false;
            break;
        }
    }

    
    
    if(cuotaInicial < costoCarro*0.1)
    {
        alert("El valor mínimo de la cuota inicial debe ser por lo menos un 10% del valor del automóvil");
        formulario.cuotaInicial.focus();
        todoBien = false;
    }

        capitalFuturo.innerHTML = costoCarro*n;
        lugarCapitalFuturo.appendChild(capitalFuturo);
    }
