#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[macro_use]
extern crate diesel;

extern crate dotenv;

#[get("/world")]
fn world() -> &'static str {
    "Hello, world! meyaw"
}

fn main() {
    rocket::ignite().mount("/hello", routes![world]).launch();
}