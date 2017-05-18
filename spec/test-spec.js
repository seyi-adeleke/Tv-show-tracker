const test = require("../server/config/express");
const request = require("request");
const config = require("../server/config/config");

const jasmine = require("jasmine");

const base_url = "http://localhost:"+ config.development.port+"/";

describe("should return valid status codes ", function() {
    describe("GET /", function() {
        it('should return 200 response code', function (done) {
            request.get(base_url, function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });
        it('should return 404 response code for faulty routes', function (done) {
            request.get(base_url+"asdfgh", function (error, response) {
                expect(response.statusCode).toEqual(404);
                done();
            });
        });

        it('should return 200 response code for routes', function (done) {
            request.get(base_url+"login", function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });
        it('should return 200 response code for routes', function (done) {
            request.get(base_url+"signup", function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });
        });
        it('should return 200 response code for routes', function (done) {
            request.get(base_url+"favourites", function (error, response) {
                expect(response.statusCode).toEqual(200);
                done();
            });

        });



    });

    describe("POST / ",function(){
        it('should pass on POST', function (done) {
            request.post(base_url+"signup", {json: true, body: {}}, function (error, response) {
                expect(response.statusCode).toEqual(302);
                done();
            });
        });

        it('should pass on POST', function (done) {
            request.post(base_url+"login", {json: true, body: {}}, function (error, response) {
                expect(response.statusCode).toEqual(302);
                done();
            });
        });

        it('should pass on POST', function (done) {
            request.post(base_url, {json: true, body: {}}, function (error, response) {
                expect(response.statusCode).toEqual(500);
                done();
            });
        });

    })

});