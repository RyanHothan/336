<%-- 
    Document   : congrats
    Created on : Apr 12, 2015, 3:39:35 PM
    Author     : Ryan Hothan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" 
           uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="myLib"
          uri="/WEB-INF/tlds/myTld"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Congrats page</title>
    </head>
    <body>
        <h1>Congratulations!</h1>
        <h2>param</h2>
        <table border="1">
            <c:forEach items="${param}" var="i">
                <tr>
                    <td>${i.key}</td>
                    <td>${i.value}</td>
                </tr>
            </c:forEach>
        </table>

        <h2>
            header
        </h2>
        <table border="1">
            <c:forEach items="${header}" var="i">
                <tr>
                    <td>${i.key}</td>
                    <td>${i.value}</td>
                </tr>
            </c:forEach>

        </table>
        <h2>
            session object
        </h2>
        <table border="1">
            <c:forEach items="${pageContext.session.attributeNames}" var="i">
                <tr>
                    <td>${i}</td>
                    <td>${pageContext.session.getAttribute(i)}</td>
                </tr>
            </c:forEach>
        </table>
        <h2> request object </h2>
        <table border="1">
            <c:forEach items="${pageContext.request.attributeNames}" var="i">
                <tr>
                    <td>${i}</td>
                    <td>${pageContext.request.getAttribute(i)}</td>
                </tr>
            </c:forEach> 
        </table>
        <h2>Bean Printed using Custom Tags </h2>
        <table border="1">
            <myLib:myBean bean="${b}">
                <tr>
                    <td>${name}</td>
                    <td>${value}</td>
                </tr>
            </myLib:myBean>
        </table>
        <h2> servlet context</h2>
        <table border="1">
            <c:forEach items="${pageContext.servletContext.attributeNames}" var="i">
                <tr>
                    <td>${i}</td>
                    <td>${pageContext.servletContext.getAttribute(i)}</td>
                </tr>
            </c:forEach>
        </table>
    </body>
</html>
