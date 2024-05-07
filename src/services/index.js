const getFileByName = (req, res) => {
    const { test } = req.query;

    console.log("test: ", test);

    res.json({ message: "Hello, World!" });
};

module.exports = { getFileByName };