import styled from "styled-components";

/* ALL FORMS */

export const Button = styled.button`
  display: block;
  height: 42px;
  width: 100%;
  font-size: 16px;
  border-radius: 2px;
  border-style: none;
  letter-spacing: -0.39px;
  background-color: #e86e5a;
  margin-bottom: 8px;
`;

export const InputBorder = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid #b8b8b8;
  position: relative;
  border-radius: 2px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  input{
    width: 70%;
    border: none; 
    left: 0px;
    margin-top: 4px;
    text-align: start;
    height: 18px;
    padding-left: 16px;
  }
`;

export const Label =styled.label`
  width: 60px;  
  letter-spacing: -0.29px;
  color: #b8b8b8;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
  position:relative;
  top:-8px;
  left:5px;
  background-color:white;
  color: ${props => props.thisLabel && (props.redLabel ? "#b8b8b8" : "#e02020")};
`

/* LOGINPAGE AND SIGNUPPAGE */

export const PageContainer = styled.div`
  height: 640px;
  padding: 0 16px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const MainContent = styled.div`
  position: absolute;
  padding: 0 16px;
  width: 100%;
  bottom: 188px;
`;

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  position: absolute;
  top: 88px;
`;

export const Tittle = styled.p`
  width: 100%;
  margin: 12px 0px 20px 0px;
  letter-spacing: -0.39px;
  text-align: center;
`;

export const ShowPasswordIcon = styled.img`
  padding-right: 16px;
  display: block;
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
`;

/* LOGINPAGE */

export const Link = styled.p`
  width: 100%;
  margin: 0px;
  text-align: center;
  padding-top: 12px;
  letter-spacing: -0.39px;
`;

/* SIGNUP PAGE */

export const SignUpMainContent = styled(MainContent)`
  bottom: 26px;
`;

export const SignUpTittle = styled(Tittle)`
  margin-bottom: 20px;
`;

export const SignUpInputBorder = styled(InputBorder)`
  margin-bottom: ${props => props.checkPassword && "0"};
  display: flex;
  flex-direction: column;
  border-color: ${props => props.checkPassword && (props.redBorder ? "#b8b8b8" : "#e02020") };

`;


export const InvalidPassword = styled.p`
  width: 193px;
  height: 18px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #e02020;
  margin: 4px 0 8px 16px;
`
export const Message = styled.span`
  display: ${props => props.show ? "none" : "block"};
`

/* EDITPROFILE AND EDITADDRESS PAGES */

export const EditPagesForm = styled.form`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

/* GOBACK HEADER */

export const GoBack = styled.div`
  height: 64px;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 33px 0 12px 0;
  margin-bottom: 20px; 

  img {
    width: 24px;
    height: 24px;
    margin: 10px 54px 10px 16px;
  }

  span {
    width: 175px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;
