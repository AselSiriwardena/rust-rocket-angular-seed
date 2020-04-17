use super::db::Conn as DbConn;
use rocket_contrib::json::Json;
use super::models::{User, NewUser};
use serde_json::Value;
use crate::models::UserData;

#[post("/users", format = "application/json")]
pub fn index(conn: DbConn) -> Json<Value> {
    let users = User::all(&conn);

    Json(json!({
        "status": 200,
        "result": users,
    }))
}

#[post("/newUser", format = "application/json", data = "<new_user>")]
pub fn new(conn: DbConn, new_user: Json<NewUser>) -> Json<Value> {
    Json(json!({
        "status": User::insert(new_user.into_inner(), &conn),
        "result": User::all(&conn).first(),
    }))
}

#[post("/getUser", format = "application/json", data = "<user_data>")]
pub fn get_user(conn: DbConn, user_data: Json<UserData>) -> Json<Value> {
    Json(json!({
        "status": 200,
        "result": User::get_by_username(user_data.into_inner(), &conn),
    }))
}
