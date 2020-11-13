const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1Mjc4MDE3LCJleHAiOjE2MDc4NzAwMTd9.lTxwERVWSslhkEJl3WFJpITN2Ay4g4kCv2pt88Hon_4";
export const BaseUrl = "http://localhost:1337/";
export const ContactUrl = BaseUrl + "contact-messages";
export const FETCH_OPTIONS = {
    headers: {
        "Content-Type": "application/json",
        key: KEY,
    },
};

