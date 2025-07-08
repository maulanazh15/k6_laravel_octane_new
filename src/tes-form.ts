import http from 'k6/http';
import { check, sleep } from 'k6';
import { test } from 'k6/execution';
import { parseHTML } from 'k6/html';

export default function () {
    // Request page containing a form
    let res = http.get('https://phpfpm.homelabchester.my.id');
    // 2. Extract the CSRF token using RegExp
    let doc = res.html();
    let findToken = doc.find('input[name="_token"]')
    console.log(findToken.attr('value'))
    // let match = res.body.match(/name="_token"\s+value="([^"]+)"/);
    // let _token = match ? match[1] : null;

    // // 3. Use the token in your POST payload
    // let payload = `_token=${_token}&email=admin@example.com&password=123123`
    // let headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    // }
    // let login = http.post('https://phpfpm.homelabchester.my.id/login', payload, {
    //     headers
    // })
    // console.log(login.cookies)
}