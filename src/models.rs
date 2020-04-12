use diesel;
use diesel::pg::PgConnection;
use diesel::prelude::*;

use super::schema::users;
use super::schema::users::dsl::users as all_users;

#[derive(Queryable)] // this is to get users from the database
pub struct User {
    pub id: i32,
    pub username: String,
    pub password: String,
    pub first_name: String,
}

#[derive(Insertable)] // this is to insert users to database
#[table_name = "users"]
pub struct NewUser {
    pub username: String,
    pub password: String,
    pub first_name: String,
}

impl User {
    pub fn show(id: i32, conn: &PgConnection) -> Vec<User> {
        all_users
            .find(id)
            .load::<User>(conn)
            .expect("Error loading book")
    }


    pub fn all(conn: &PgConnection) -> Vec<User> {
        all_users
            .order(users::id.desc())
            .load::<User>(conn)
            .expect("error loading the books")
    }

    pub fn insert(user: NewUser, conn: &PgConnection) -> bool {
        diesel::insert_into(users::table)
            .values(&user)
            .execute(conn)
            .is_ok()
    }

//    pub fn update_by_id(id: i32, conn: &PgConnection, book: NewBook) -> bool {
//        use schema::users::dsl::{username as u, password as p, first_name as f};
//        let NewBook {
//            username,
//            password,
//            first_name,
//        } = book;
//
//        diesel::update(all_books.find(id))
//            .set((a.eq(author), p.eq(published), t.eq(title)))
//            .get_result::<Book>(conn)
//            .is_ok()
//    }


    //    pub fn delete_by_id(id: i32, conn: &PgConnection) -> bool {
//        if Book::show(id, conn).is_empty() {
//            return false;
//        };
//        diesel::delete(all_books.find(id)).execute(conn).is_ok()
//    }
//
    pub fn isLoginSuccess(username: String, password: String, conn: &PgConnection) -> bool {
        let usr = all_users
            .filter(username.eq(&username))
            .get_results::<Option<String>>(conn)
            .is_ok();
    }
}