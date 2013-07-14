/**
 * Created with IntelliJ IDEA.
 * User: Daniel
 * Date: 7/14/13
 * Time: 1:41 AM
 * To change this template use File | Settings | File Templates.
 */

function githubInit(cb) {
    github = new Github({
        token: access_token,
        auth: "oauth"
    });
    cb();
}