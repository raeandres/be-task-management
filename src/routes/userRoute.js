

const routes = (app) => {

    const testCredential = {
        username: "test",
        password: "password"
    }

    app.route('/login')
        .post((req,res,next) => {
            if(req.body.username == testCredential.username) {
                res.status(200).send("Success!");
            } else {
                userLogin(req,res);
            }
        }, (req,res) => {
            res.sent("Post request from login");
        });


}

export default routes;