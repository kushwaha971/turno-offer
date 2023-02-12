import { Box, styled } from "@mui/material";

const EmiScreenStyle = styled(Box)(({ theme }) => ({
  ".textHeadingStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333333",
    margin: "24px",
  },
  ".loanTextStyle": {
    margin: "4px",
    marginLeft: "10px",
    marginRight: "36px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#333333",
  },
  ".discountValStyle": {
    margin: "4px",
    marginLeft: "20px",
    marginRight: "4px",
    backgroundColor: "#E8345E",
    borderRadius: "2px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "9px",
    color: "#FFFFFF",
    padding: "4px",
    textAlign: "center",
    lineHeight: "20px",
  },
  ".discountAmtStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "39px",
    color: "#333333",
    margin: "0 2px",
  },
  ".loanAmtStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#8E8D8F",
    margin: "0 4px",
    textAlign: "right",
  },

  ".downpaymentTextStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#333333",
    margin: "20px",
  },
  ".downpaymentAmtStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "42px",
    color: "#333333",
    margin: "15px 20px",
  },
  ".minDownpaymentAmtStyle": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "11px",
    lineHeight: "16px",
    color: "#8E8D8F",
    margin: "15px 20px",
  },
  ".tenure": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#333333",
  },
}));
export default EmiScreenStyle;
