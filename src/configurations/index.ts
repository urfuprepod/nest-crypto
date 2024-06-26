export default () => ({
    port: process.env.PORT || 5000,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_password: process.env.DB_PASSWORD,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT

})