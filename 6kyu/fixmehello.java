import java.util.*;

public class Dinglemouse {

    private String name;
    private Integer age;
    private Character sex;

    // To track insertion order
    private final List<String> order = new ArrayList<>();

    private void addOrder(String attr) {
        if (!order.contains(attr)) {
            order.add(attr);
        }
    }

    public Dinglemouse setAge(int age) {
        this.age = age;
        addOrder("age");
        return this;
    }

    public Dinglemouse setSex(char sex) {
        this.sex = sex;
        addOrder("sex");
        return this;
    }

    public Dinglemouse setName(String name) {
        this.name = name;
        addOrder("name");
        return this;
    }

    public String hello() {
        if (order.isEmpty()) {
            return "Hello.";
        }

        List<String> parts = new ArrayList<>();
        for (String attr : order) {
            switch (attr) {
                case "name":
                    if (name != null) parts.add("My name is " + name);
                    break;
                case "age":
                    if (age != null) parts.add("I am " + age);
                    break;
                case "sex":
                    if (sex != null) {
                        parts.add("I am " + (sex == 'M' ? "male" : "female"));
                    }
                    break;
            }
        }

        return "Hello. " + String.join(". ", parts) + ".";
    }

}