
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/SessionTrack")
public class SessionTrack extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(true);

        Date createTime =
                new Date(session.getCreationTime());

        Date lastAccessTime =
                new Date(session.getLastAccessedTime());

        String title = "Welcome Back to my website";

        Integer visitCount = 0;

        String visitCountKey = "visitCount";
        String userIDKey = "userID";

        String userID = "ABCD";

        if (session.isNew()) {

            title = "Welcome to my website";

            session.setAttribute(userIDKey, userID);
            session.setAttribute(visitCountKey, visitCount);

        } else {

            visitCount =
                    (Integer) session.getAttribute(visitCountKey);

            visitCount++;

            userID =
                    (String) session.getAttribute(userIDKey);

            session.setAttribute(visitCountKey, visitCount);
        }

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        out.println("<html><body>");

        out.println("<h1>" + title + "</h1>");

        out.println("<h2>Session Information</h2>");

        out.println("<p>Session ID: "
                + session.getId() + "</p>");

        out.println("<p>Creation Time: "
                + createTime + "</p>");

        out.println("<p>Last Access Time: "
                + lastAccessTime + "</p>");

        out.println("<p>User ID: "
                + userID + "</p>");

        out.println("<p>Number of Visits: "
                + visitCount + "</p>");

        out.println("</body></html>");
    }
}