const file = require("../models/file");

// localfileUpload handler function

exports.localFileUpload = async (req, res) => {
    try{
        // fetch file
        const file = req.files.file;
        // This line extracts the uploaded file from the req (request) object.
        console.log(file);

        let path = __dirname + "/files/" + Date.now();
        // let path: This declares a variable path to store the location where the file will be saved.
        // __dirname: This is a Node.js global variable that gives you the direactory name of the current folder you are in (i.e.the folder where the file is located)
        // "/files/": This is the folder inside the current directory where you want to save the uploaded file.
        // Date.now(): This generates a unique timestamp representing the current time in milliseconds. It's used here to create a unique file name, reducing the risk of overwriting existing files.
        // __dirname + "/files/" + Date.now();: Combines these pieces to create the full path where the file will be saved. For example, it might produce something like /your-project-directory/files/1627382930123.

        file.mv(path, (err) => {
            // file.mv: This method is provided by the file object to move the file to the specified location on the server.
            // path: The destination path where you want to move the uploaded file.
            // (err) => {: A callback function that runs after the file has been moved. If there's an error during the move, it will be passed to the err parameter.
            console.log(err);
        });

        res.status(200).json({
            success: true,
            message: "Local file is Uploaded successfully"
        })
    
    }
    catch(error)
    {

    }
}