#[macro_use] extern crate nickel;


#[macro_use(bson, doc)]
extern crate bson;
extern crate mongodb;


// Nickel
use nickel::{
    Nickel,
    JsonBody,
    HttpRouter,
    Request,
    Response,
    MiddlewareResult,
    MediaType,
    status::StatusCode
};


// MongoDB
 use mongodb::{
    Client,
    error::Result as MongoResult
 };


// bson
use bson::{
    Bson,
    Document,
    oid::ObjectId
};


// rustc_serialize
use rustc_serialize::json::{Json, ToJson};




fn main() {

    let mut server = Nickel::new();
    let mut router = Nickel::router();

    router.get("/users", middleware! {|req, res| 

        format!("Hello from GET /users")

    });

    router.post("/users/new", middleware! {|req, res|

        format!("Hello from POST /users/new")

    });

    router.delete("/users/:id", middleware! {|req, res|

        format!("Hello from DELETE /users/:id")

    });

    server.utilize(router);

    server.listen("127.0.0.1:9000");

}
