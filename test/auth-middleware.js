// const expect = require("chai").expect;
// const authmiddleware = require("../middlewares/is-auth");
// const jwt = require("jsonwebtoken");
// const sinon = require("sinon");
// describe("Auth Middleware", function () {
//   it("should throw an error of not authorized", function () {
//     const req = {
//       get: function () {
//         return null;
//       },
//     };
//     expect(authmiddleware.bind(this, req, {}, () => {})).to.throw(
//       "Not Authenticated"
//     );
//   });

//   it("should trhow an error if authorization header has one string", function () {
//     const req = {
//       get: function () {
//         return "abc";
//       },
//     };

//     expect(authmiddleware.bind(this, req, {}, () => {})).to.throw();
//   });
//   it("Check if userId is attached to the request object", function () {
//     const req = {
//       get: function () {
//         return "Bearer abcd";
//       },
//     };
//     sinon.stub(jwt, "verify");
//     jwt.verify.returns({ userId: "abc" });
//     authmiddleware(req, {}, () => {});
//     expect(req).to.have.property("userId");
//     expect(jwt.verify.called).to.be.true;
//     jwt.verify.restore();
//   });
//   it("should trhow an error if our token is not valid", function () {
//     const req = {
//       get: function () {
//         return "Bearer abcd";
//       },
//     };
//     expect(authmiddleware.bind(this, req, {}, () => {})).to.throw();
//   });
// });
