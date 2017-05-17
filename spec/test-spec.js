const test = require("../server/config/express");
const request = require("request");
const config = require("../server/config/config");

const base_url = "http://localhost:"+ config.development.port+"/";
console.log(base_url);
describe("should return valid html ", function() {
    describe("GET /", function() {

        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });

        });
        it("returns status code 200",function(){
            request.get(base_url+"login", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        })

    });

});