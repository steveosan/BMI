$(document).ready(function (){
    $("input#box1").on("change", boxChanged);
    $("input#box2").on("change", boxChanged);
});



function boxChanged(event)
{
    //INPUT//
    let height = $("#box1").val();
    let weight = $("#box2").val();

    //MATH//

    let heightSquared = Math.pow(height, 2)
    let BMI = (weight / heightSquared ) * 703



    
    //OUTPUT// 
    $("p#change-output3").text(BMI.toFixed(1));

    if (BMI.toFixed(1) < 15 ) 

    {$("p#change-output").text("Very severely underweight");

    } else if (BMI.toFixed(1) > 15 && BMI.toFixed(1) < 16 )

    {$("p#change-output").text("Severely underweight");

    } else if (BMI.toFixed(1) > 16 && BMI.toFixed(1) < 18.5 )
    {$("p#change-output").text("Underweight");

    } else if (BMI.toFixed(1) > 18.5 && BMI.toFixed(1) < 25 )
    {$("p#change-output").text("Normal");
    
    } else if (BMI.toFixed(1) > 25 && BMI.toFixed(1) < 30 )
    {$("p#change-output").text("Overweight");
    
    } else if (BMI.toFixed(1) > 30 && BMI.toFixed(1) < 35 )
    {$("p#change-output").text("Obese Class I (Moderately obese)");
    
    } else if (BMI.toFixed(1) > 35 && BMI.toFixed(1) < 40 )
    {$("p#change-output").text("Obese Class II (Severely obese)");
    
    } else if (BMI.toFixed(1) > 40 )
    {$("p#change-output").text("Obese Class III (Very severely obese)");
    }

}


