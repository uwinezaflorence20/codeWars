public class Solution {

  public int solution(int number) {
    int sum = 0;
    for (int i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}

public class Kata {
    public static int quarterOf(int month) {
        return (month + 2) / 3;
    }
}

public class Kata {
  public static String createPhoneNumber(int[] numbers) {
    return String.format("(%d%d%d) %d%d%d-%d%d%d%d",
                         numbers[0], numbers[1], numbers[2],
                         numbers[3], numbers[4], numbers[5],
                         numbers[6], numbers[7], numbers[8], numbers[9]);
  }
}

public class NumberUtils {

    public static boolean isNarcissistic(int number) {
        String numStr = Integer.toString(number);
        int length = numStr.length();
        int sum = 0;

        for (int i = 0; i < length; i++) {
            int digit = numStr.charAt(i) - '0';  // convert char to int digit
            sum += Math.pow(digit, length);
        }

        return sum == number;
    }

}