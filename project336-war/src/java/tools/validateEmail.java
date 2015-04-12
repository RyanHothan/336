package tools;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.io.IOException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Javier
 */
@WebServlet(urlPatterns =
{
    "/validateEmail"
})
public class validateEmail extends HttpServlet
{

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
 
        response.setContentType("text/html;charset=UTF-8");
        FormData formData = new FormData();
        formData.setEmail(request.getParameter("UserID"));
        formData.setfName(request.getParameter("FName"));
        formData.setlName(request.getParameter("LName"));
        formData.setAlias(request.getParameter("alias"));
        formData.setCity(request.getParameter("City"));
        formData.setPassword(request.getParameter("Password"));
        formData.setRePassword(request.getParameter("RePassword"));
        formData.setCountryOfResidence(request.getParameter("CountryOfRes"));
        formData.setLanguage(request.getParameter("Language"));
        formData.setContactByEmail(Boolean.valueOf(request.getParameter("NC_CHECK_EMAIL")));
        formData.setContactByOther(Boolean.valueOf(request.getParameter("NC_CHECK_OTHER")));
        formData.setSecurityQuestion(request.getParameter("SecurityQues"));
        formData.setSecurityAnswer(request.getParameter("SecurityAns"));
        formData.setCustomQuestion(request.getParameter("custom_question"));
        request.getServletContext().setAttribute("b", formData);
        String url;
        if(formData.isValid(formData.getEmail()))
        {
            url = "congrats.jsp";
        }
        else
        {
            url = "secondindex.jsp";
        }
        RequestDispatcher rd = request.getRequestDispatcher(url);
        rd.forward(request, response);
            
            
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo()
    {
        return "Short description";
    }// </editor-fold>

}
