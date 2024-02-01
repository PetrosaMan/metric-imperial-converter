const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);
  test("GET /api/convert?input=10L", (done) => {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=10L")
      .end((req, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, "L");
        assert.equal(res.body.returnNum, 2.64172);
        assert.equal(res.body.returnUnit, "gal");
        done();
      });
  });

  test("GET /api/convert?input=32g", (done) => {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=32g")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.initUnit, undefined);
        done();
      });
  });

  test("GET /api/convert?input=3/7.2/4kg", (done) => {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=3/7.2/4kg")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.initUnit, undefined);
        done();
      });
  });
  test("GET /api/convert?input=3/7.2/4kilomegagram", (done) => {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=3/7.2/4kilomegagram")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.initUnit, undefined);
        done();
      });
  });

  test("GET /api/convert?input=kg", (done) => {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=kg")
      .end((err, res) => {
        assert.equal(res.status, 200);
        console.log(res.body.initNum);
        assert.equal(res.body.initNum, "1");
        assert.equal(res.body.intUnit, undefined);
        done();
      });
  });
});
