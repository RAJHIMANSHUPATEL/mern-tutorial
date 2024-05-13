 

//  Home Page

const home = async (req, res) => {
    try {
        res.status(200).send("This is home page");
    } catch (error) {
        res.status(400).send("Page not found");
    }
}

//Register Page

const register = async (req, res) => {
    try {
        res.status(200).send("Welcome to my mern series using controllers");
    } catch (error) {
        res.status(400).send("Page not found");
    }
}

module.exports = { home, register }