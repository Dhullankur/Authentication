const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: 'supersecretpassword',
        DATABASE: "mongodb+srv://ankur007:ankur007@cluster0.h0daq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
};
exports.get = function get(env) {
    return config[env] || config.default;
}