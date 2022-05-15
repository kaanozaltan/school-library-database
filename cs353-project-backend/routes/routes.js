const ManageLoginController = require("../controllers/ManageLoginController");
const ManageLibrarianController = require("../controllers/ManageLibrarianController");
const routes = (router) => {
    router.post("/login", new ManageLoginController().Login);
    router.post("/register", new ManageLoginController().Register);
    router.post(
        "/registerLibraryItem",
        new ManageLibrarianController().RegisterLibraryItem
    );
    router.post(
        "/bringAllUsers",
        new ManageLibrarianController().BringAllUsers
    );
    router.post(
        "/bringFilteredUsers",
        new ManageLibrarianController().BringFilteredUsers
    );
    router.post(
        "/bringAllLibraryItems",
        new ManageLibrarianController().BringAllLibraryItems
    );
    router.post(
        "/holdALibraryItem",
        new ManageLibrarianController().HoldALibraryItem
    );
};

module.exports = routes;
