db.createUser(
    {
        user: "admin",
        pwd: "admin_password",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);