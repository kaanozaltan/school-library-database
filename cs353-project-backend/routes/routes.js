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
    router.post("/bringMyItems", new ManageLibrarianController().BringMyItems);
    router.post(
        "/bringAllAvailableAndHoldedItemsForLend",
        new ManageLibrarianController().BringAllAvailableAndHoldedItemsForLend
    );
    router.post("/lendItem", new ManageLibrarianController().LendItem);
    router.post(
        "/bringAllReturnableItems",
        new ManageLibrarianController().BringAllReturnableItems
    );
    router.post("/returnItem", new ManageLibrarianController().ReturnItem);
    router.post("/warnUser", new ManageLibrarianController().WarnUser);
    router.post(
        "/bringWarnings",
        new ManageLibrarianController().BringWarnings
    );
    router.post(
        "/removeAWarning",
        new ManageLibrarianController().RemoveAWarning
    );
    router.post(
        "/bringAllCourses",
        new ManageLibrarianController().BringAllCourses
    );
    router.post("/addCourse", new ManageLibrarianController().AddCourse);
    router.post(
        "/bringMyCourses",
        new ManageLibrarianController().BringMyCourses
    );
    router.post(
        "/bringStudentsForChoosenCourse",
        new ManageLibrarianController().BringStudentsForChoosenCourse
    );
    router.post(
        "/assignLibraryItem",
        new ManageLibrarianController().AssignLibraryItem
    );
    router.post(
        "/bringAssignedLibraryItems",
        new ManageLibrarianController().BringAssignedLibraryItems
    );
    router.post(
        "/bringFilteredLibraryItems",
        new ManageLibrarianController().BringFilteredLibraryItems
    );
    router.post("/bringReports", new ManageLibrarianController().BringReports);
};

module.exports = routes;
