package sort.On2;
import java.util.Arrays;

public class Insertion {

  public static void main(String[] args) {
    int[] test = {9,8,7,6,5,4,3,2,1};
    test = insertion(test);
    System.out.println(Arrays.toString(test));
  }

  public static int[] insertion(int[] array) {
    for(int i = 0; i < array.length; i++){
      int current = array[i];
      int j = i - 1;
      while(j >= 0 && array[j] > current){
        array[j+1] = array[j];
        j = j - 1;
      }
      array[++j] = current;
    }
    return array;
  }
}

