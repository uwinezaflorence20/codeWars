
public class Main {
    public static void main(String[] args){
        System.out.println("hello world");
          var x = 10;
        var y = 20;
        var z = 10;
        
        //type casting
        //widening casting
        double X = x;
        //narrowing casting
        var Y = (int) X;
        
        System.out.println(X);//widening casting
        System.out.println(Y);// narrowing casting
        System.out.println(x + y + z);
        
        //string method
        var name = "Uwineza";
        var secondname ="Florence is wise";
        System.out.println(name.toLowerCase());
        System.out.println(name.toUpperCase());
        System.out.println(secondname.indexOf('i'));
        System.out.println(name.charAt(3));
       
var txt1 = "Hello";
var txt2 = "Hello";

var txt3 = "Greetings";
var txt4 = "Great things";

System.out.println(txt1.equals(txt2));  
System.out.println(txt3.equals(txt4));

var space = " hello ";
System.out.println("Before the trim: [" + space+"]");
System.out.println("Before the trim: [" + space.trim()+"]");

// random math
var randoms = (int)(Math.random()*101);
System.out.println(randoms);


int time = 22;
String message = (time < 12) ? "Good morning."
               : (time < 18) ? "Good afternoon."
               : "Good evening.";
System.out.println(message);

//arrays in java

String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for(var i=0 ; i<=cars.length ;i++){
    System.out.println("car:" +cars[i]);
}


int[] numbers = {1, 5, 10, 25};
int sum = 0;

// Loop through the array and add each element to sum
for (int i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

System.out.println("The sum is: " + sum);

    }
    
}
