package tools;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.beans.*;
import java.io.Serializable;

/**
 *
 * @author Javier
 */
public class FormData implements Serializable
{

    private String fName;
    private String lName;
    private String email;

    private String password;
    private String rePassword;
    private String alias;
    private String countryOfResidence;
    private String city;
    private String language;
    private String securityQuestion;
    private String securityAnswer;
    private String customQuestion;

    
    public boolean contactByEmail;
    public boolean contactByOther;
    private PropertyChangeSupport propertySupport;

    public FormData()
    {
        propertySupport = new PropertyChangeSupport(this);
    }

    public String getfName()
    {
        return fName;
    }

    public String getlName()
    {
        return lName;
    }

    public String getPassword()
    {
        return password;
    }

    public String getRePassword()
    {
        return rePassword;
    }

    public String getAlias()
    {
        return alias;
    }

    public String getCountryOfResidence()
    {
        return countryOfResidence;
    }

    public String getCity()
    {
        return city;
    }

    public String getLanguage()
    {
        return language;
    }

    public String getSecurityQuestion()
    {
        return securityQuestion;
    }

    public String getSecurityAnswer()
    {
        return securityAnswer;
    }

    public boolean getContactByEmail()
    {
        return contactByEmail;
    }

    public boolean getContactByOther()
    {
        return contactByOther;
    }

    public String getEmail()
    {
        return email;
    }
    
    public String getCustomQuestion()
    {
        return customQuestion;
    }

    public void setCustomQuestion(String customQuestion)
    {
        this.customQuestion = customQuestion;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public void setfName(String fName)
    {
        this.fName = fName;
    }

    public void setlName(String lName)
    {
        this.lName = lName;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public void setRePassword(String rePassword)
    {
        this.rePassword = rePassword;
    }

    public void setAlias(String alias)
    {
        this.alias = alias;
    }

    public void setCountryOfResidence(String countryOfResidence)
    {
        this.countryOfResidence = countryOfResidence;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public void setLanguage(String language)
    {
        this.language = language;
    }

    public void setSecurityQuestion(String securityQuestion)
    {
        this.securityQuestion = securityQuestion;
    }

    public void setSecurityAnswer(String securityAnswer)
    {
        this.securityAnswer = securityAnswer;
    }

    public void setContactByEmail(boolean contactByEmail)
    {
        this.contactByEmail = contactByEmail;
    }

    public void setContactByOther(boolean contactByOther)
    {
        this.contactByOther = contactByOther;
    }

    public void addPropertyChangeListener(PropertyChangeListener listener)
    {
        propertySupport.addPropertyChangeListener(listener);
    }

    public void removePropertyChangeListener(PropertyChangeListener listener)
    {
        propertySupport.removePropertyChangeListener(listener);
    }
    
    public boolean isValid(String email)
    {
        if(email.equals(""))
        {
            return false;
        }
        return true;
    }

}
