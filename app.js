const age = (prompt("Ingrese su edad"));

if (age >= 21){
    document.writeln ("Eres un Adult de " + age + " años");
} else if ( age < 21 && age >= 18){
    document.writeln ("Eres un Young Adult de " + age + " años");
} else if ( age < 18 && age >= 12){
    document.writeln ("Eres un Teenager de " + age + " años" );
} else if ( age < 12 && age >= 5){
    document.writeln ("Eres un Gradeschooler de " + age + " años");
} else if ( age < 5 && age >= 3){
    document.writeln ("Eres un Preschooler de " + age + " años");
} else if ( age < 3 && age >= 1){
    document.writeln ("Eres un Todler de " + age + " años");
} else  { ( age != age )
    document.writeln ("Error");
} 