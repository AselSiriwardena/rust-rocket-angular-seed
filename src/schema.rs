table! {
    customers (id) {
        id -> Int4,
        username -> Varchar,
        password -> Varchar,
        first_name -> Varchar,
        last_name -> Varchar,
    }
}

table! {
    users (id) {
        id -> Int4,
        username -> Varchar,
        password -> Varchar,
        first_name -> Varchar,
    }
}

allow_tables_to_appear_in_same_query!(
    customers,
    users,
);
