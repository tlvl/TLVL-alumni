/*
 * Node.js Login Boilerplate
 * More Info : https://github.com/braitsch/node-login
 * Copyright (c) 2013-2018 Stephen Braitsch

Node-login is distributed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License) which basically means you can do anything you want commercial or private provided you keep the copyright within the source files intact. If you'd like to contribute to the project please fork and issue a pull request.

---

Copyright (c) 2013 Stephen Braitsch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
*/
const router = require('express').Router();
const CT = require('../modules/country-list');
const AM = require('../modules/account-manager');
const EM = require('../modules/email-dispatcher');

/*
	login & logout
*/

	router.get('/', function(req, res){
	// check if the user has an auto login key saved in a cookie //
		if (req.cookies.login !== undefined) {
	// attempt automatic login //
			AM.validateLoginKey(req.cookies.login, req.ip, function(e, o){
				if (o){
					AM.autoLogin(o.user, o.pass, function(o){
						req.session.user = o;
					});
				}
			});
        }
        res.redirect('/map');
	});
	
	router.post('/login', function(req, res){
		AM.manualLogin(req.body['user'], req.body['password'], function(e, o){
			if (!o){
				res.status(400).send(e);
			}	else{
				req.session.user = o;
				if (req.body['remember-me'] == 'false'){
					res.status(200).send(o);
				}	else{
					AM.generateLoginKey(o.user, req.ip, function(key){
						res.cookie('login', key, { maxAge: 900000 });
						res.status(200).send(o);
					});
				}
			}
		});
	});

	router.post('/logout', function(req, res){
		res.clearCookie('login');
		req.session.destroy(function(e){ res.status(200).send('ok'); });
	});

/*
	new accounts
*/

router.get('/reg', function(req, res) {
    res.render('reg', {  title: 'Зарегистрироваться', countries : CT });
});

router.post('/reg', function(req, res){
    console.log(req.body);
    AM.addNewAccount({
        name 	: req.body['fullName'],
        email 	: req.body['email'],
        pass	: req.body['password'],
    }, function(e){
        if (e){
            res.status(400).send(e);
        }	else{
            res.status(200).send('ok');
        }
    });
});

/*
password reset
*/

router.post('/lost-password', function(req, res){
    let email = req.body['email'];
    AM.generatePasswordKey(email, req.ip, function(e, account){
        if (e){
            res.status(400).send(e);
        }	else{
            EM.dispatchResetPasswordLink(account, function(e, m){
        // TODO this callback takes a moment to return, add a loader to give user feedback //
                if (!e){
                    res.status(200).send('ok');
                }	else{
                    for (k in e) console.log('ERROR : ', k, e[k]);
                    res.status(400).send('unable to dispatch password reset');
                }
            });
        }
    });
});

router.get('/reset-password', function(req, res) {
    AM.validatePasswordKey(req.query['key'], req.ip, function(e, o){
        if (e || o == null){
            res.redirect('/');
        } else{
            req.session.passKey = req.query['key'];
            res.render('reset', { title : 'Reset Password' });
        }
    })
});

router.post('/reset-password', function(req, res) {
    let newPass = req.body['pass'];
    let passKey = req.session.passKey;
// destory the session immediately after retrieving the stored passkey //
    req.session.destroy();
    AM.updatePassword(passKey, newPass, function(e, o){
        if (o){
            res.status(200).send('ok');
        }	else{
            res.status(400).send('unable to update password');
        }
    })
});

/*
	view, delete & reset accounts
*/

router.post('/delete', function(req, res){
    AM.deleteAccount(req.session.user._id, function(e, obj){
        if (!e){
            res.clearCookie('login');
            req.session.destroy(function(e){ res.status(200).send('ok'); });
        }	else{
            res.status(400).send('record not found');
        }
    });
});

module.exports = router;