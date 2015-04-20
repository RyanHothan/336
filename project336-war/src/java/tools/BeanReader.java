/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.JspFragment;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 *
 * @author Ryan Hothan
 */
public class BeanReader extends SimpleTagSupport
{

    private FormData bean;

    public void setBean(FormData theBean)
    {
        bean = theBean;
    }

    @Override
    public void doTag() throws JspException
    {
        Class b;
        try
        {
            b = Class.forName("tools.FormData");
            JspWriter out = getJspContext().getOut();
            Field[] fields = b.getDeclaredFields();
            JspFragment frag = getJspBody();
            for (Field f : fields)
            {
                String name = f.getName();
                String camelName = "get"
                        + (name.substring(0, 1).toUpperCase() + name.substring(1));
                Method m = b.getMethod(camelName);
                getJspContext().setAttribute("name", name);
                getJspContext().setAttribute("value", m.invoke(bean));
                if (frag != null)
                {
                    frag.invoke(out);
                }
                return;
            }
        } catch (Exception ex)
        {
            System.out.println("booger");
        }

    }
}
