import java.util.Calendar;

public class Test {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        System.out.println(calendar.toString());
        System.out.println(calendar.getTime().toInstant());
        System.out.println(calendar.getTime().toString());
        System.out.println();
        System.out.println();
    }
}
