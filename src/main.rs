#[macro_use]
extern crate diesel;

extern crate dotenv;

use dotenv::dotenv;
use std::env;
use diesel::prelude::*;
use diesel::pg::PgConnection;

mod schema;
mod models;

fn main() {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("set DATABASE_URL");
    let conn = PgConnection::establish(&database_url).unwrap();

    let user = models::NewUser {
        username: String::from("Nemo"),
        password: String::from("123"),
        first_name: String::from("Nemo S"),
    };

    if models::User::insert(user, &conn) {
        println!("success");
    } else {
        println!("failed");
    }

//    if models::User::isLoginSuccess(String::from("Nemo"), String::from("123"), &conn) {
//        println!("success");
//    } else {
//        println!("failed");
//    }
}