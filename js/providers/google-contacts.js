/**
 * Created with IntelliJ IDEA.
 * User: Daniel
 * Date: 7/14/13
 * Time: 2:13 AM
 * To change this template use File | Settings | File Templates.
 */

function load() {
    gapi.client.setApiKey('YOUR API KEY');
    gapi.client.load('urlshortener', 'v1', makeRequest);
}