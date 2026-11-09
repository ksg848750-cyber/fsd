package complex3;

public import java.sql.*;
import java.util.Scanner;

public class StudentCrud {

    public static void main(String[] args) throws Exception {

        Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/week5f", "root", "root");

        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n1.Insert 2.View 3.Update 4.Delete 5.Exit");
            System.out.print("Choose: ");
            int ch = sc.nextInt();

            if (ch == 1) {
                System.out.print("ID: ");
                int id = sc.nextInt();

                System.out.print("Name: ");
                String name = sc.next();

                System.out.print("Address: ");
                String address = sc.next();

                PreparedStatement ps = con.prepareStatement(
                    "INSERT INTO STUDENT VALUES (?, ?, ?)");

                ps.setInt(1, id);
                ps.setString(2, name);
                ps.setString(3, address);

                ps.executeUpdate();
                System.out.println("Student inserted!");
                ps.close();
            }

            else if (ch == 2) {
                ResultSet rs = con.createStatement().executeQuery(
                    "SELECT * FROM STUDENT");

                while (rs.next()) {
                    System.out.println(
                        rs.getInt(1) + " " +
                        rs.getString(2) + " " +
                        rs.getString(3));
                }
                rs.close();
            }

            else if (ch == 3) {
                System.out.print("ID: ");
                int id = sc.nextInt();

                System.out.print("New Name: ");
                String name = sc.next();

                PreparedStatement ps = con.prepareStatement(
                    "UPDATE STUDENT SET SNAME=? WHERE STUDENTID=?");

                ps.setString(1, name);
                ps.setInt(2, id);

                ps.executeUpdate();
                System.out.println("Student updated!");
                ps.close();
            }

            else if (ch == 4) {
                System.out.print("ID: ");
                int id = sc.nextInt();

                PreparedStatement ps = con.prepareStatement(
                    "DELETE FROM STUDENT WHERE STUDENTID=?");

                ps.setInt(1, id);
                ps.executeUpdate();

                System.out.println("Student deleted!");
                ps.close();
            }

            else if (ch == 5) {
                break;
            }

            else {
                System.out.println("Invalid choice!");
            }
        }

        con.close();
        sc.close();
    }
}
