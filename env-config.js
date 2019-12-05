const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod ? "https://ajax27.herokuapp.com" : "http://localhost:3000",
  "process.env.NAMESPACE": "https://ajax27.herokuapp.com",
  "process.env.CLIENT_ID": "E9pwenTnQjEN60yivBNLJrZB6D7J2IVp"
};
