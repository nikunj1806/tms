<?php

error_reporting(E_ALL);

require '.././libs/Slim/Slim.php';
require_once '../includes/include.php';
require_once 'dbHelper.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

function api_autoloader($class_name) {
    $directory = '../class/';
    if (file_exists($directory . $class_name . '.class.php')) {
        require_once $directory . $class_name . '.class.php';

        return;
    }
}

spl_autoload_register('api_autoloader');

$db = new db(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

//---------------- login & reset password section----------------------//
$app->post('/authenticate', function() use ($app) {
    $user = new Users();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $user->authenticate($data);
    echoResponse($result['status'], $result);
});
$app->post('/resetpassword', function() use ($app) {
    $user = new Users();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $user->resetPassword($data);
    echoResponse($result['status'], $result);
});
//------------------ communication profile start----------------//
$app->post('/saveuserprofile', function() use ($app) {
    $user = new Users();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $user->saveuserprofile($data);
    echoResponse($result['status'], $result);
});

$app->get('/getProfile/:id', function($id) use ($app) {
    $user = new Users();
    $result = $user->getUserByField($id);
    echoResponse(200, $result[0]);
});
$app->put('/saveuserprofile/:id', function($id) use ($app) {
    $user = new Users();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $user->updateprofile($id, $data);
    echoResponse($result['status'], $result);
});
//---------------------additional info section -------------------------//
$app->post('/additionalinfo', function() use ($app) {
    $profile = new profile();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $profile->saveAddtionalInfo($data);
    echoResponse($result['status'], $result);
});

$app->get('/getAddinfo/:id', function($id) use ($app) {
    $profile = new profile();

    $result = $profile->getAddtionalInfo($id);
    echoResponse(200, $result);
});

$app->put('/additionalinfo/:id', function($id) use ($app) {
    $profile = new profile();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $profile->updateAddtionalInfo($id, $data);
    echoResponse($result['status'], $result);
});
//---------------------payment section -------------------------//
$app->post('/paymentsave', function() use ($app) {
    $payment = new payment();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $payment->save($data);
    echoResponse($result['status'], $result);
});
$app->get('/getuserpayment/:id/:type', function($id, $type) use ($app) {
    $payment = new payment();
    $result = $payment->getPaymentById($id, $type);
    echoResponse(200, $result);
});
$app->post('/paymentsave/:id/:type', function($id, $type) use ($app) {
    $payment = new payment();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $payment->updatePayment($id, $type, $data);
    echoResponse($result['status'], $result);
});
//---------------------Task section -------------------------//
$app->post('/tasksave', function() use ($app) {
    $task = new task();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $task->save($data);
    echoResponse($result['status'], $result);
});
$app->get('/getTask/:id', function($id) use ($app) {
    $task = new task();
    $result = $task->getTaskById($id);
    echoResponse(200, $result);
});
$app->get('/usertask/:id/:type', function($id, $type) use ($app) {
    $task = new task();
    $result = $task->getTaskByUser($id, $type);
    echoResponse($result['status'], $result);
});
$app->post('/tasksave/:id', function($id) use ($app) {
    $task = new task();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $task->updateTask($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/deleteTask/:id', function($id) use ($app) {
    $task = new task();
    $result = $task->deleteTask($id);
    echoResponse($result['status'], $result);
});
//------------------ user section -------------------------//
$app->post('/checkusername', function() use ($app) {
    $user = new Users();
    $result = $user->checkusername($app->request->getBody());
    echoResponse($result['status'], $result);
});
$app->post('/checkemailaddress', function() use ($app) {
    $user = new Users();
    $result = $user->checkemailaddress($app->request->getBody());
    echoResponse($result['status'], $result);
});
$app->get('/users', function() use ($app) {
    $user = new Users();
    $result = $user->userlist();
    echoResponse($result['status'], $result);
});
$app->get('/user/:type', function($type) use ($app) {
    $user = new Users();
    $result = $user->userwithType($type);
    echoResponse($result['status'], $result);
});
$app->delete('/deleteUser/:id', function($id) use ($app) {
    $user = new Users();
    $result = $user->deleteUser($id);
    echoResponse($result['status'], $result);
});
//------------------user type section ---------------------//

$app->get('/usertype', function() {
    $usertype = new usertype();
    $result = $usertype->getAll();
    echoResponse(200, $result);
});
$app->get('/defaultUser', function() {
    $usertype = new usertype();
    $result = $usertype->getDefaultType();
    echoResponse(200, $result);
});
$app->get('/usertype/:id', function($id) use ($app) {
    $usertype = new usertype();
    $result = $usertype->getTypeById($id);
    echoResponse(200, $result);
});
$app->get('/typebyresource/:id', function($id) use ($app) {
    $usertype = new usertype();
    $result = $usertype->getTypeByResource($id);
    echoResponse(200, $result);
});
$app->post('/saveusertype', function() use ($app) {
    $usertype = new usertype();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $usertype->save($data);
    echoResponse($result['status'], $result);
});
$app->post('/updateusertype/:id', function($id) use ($app) {
    $usertype = new usertype();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $usertype->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/deleteType/:id', function($id) use ($app) {
    $usertype = new usertype();
    $result = $usertype->delete($id);
    echoResponse($result['status'], $result);
});
//----------------client section -----------------------//
$app->get('/clients', function() {
    $client = new client();
    $result = $client->clientlist();
    echoResponse(200, $result);
});
$app->get('/client/:id', function($id) use ($app) {
    $client = new client();
    $result = $client->getClientId($id);
    echoResponse(200, $result);
});
$app->post('/clientsave', function() use ($app) {
    $client = new client();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $client->saveClient($data);
    echoResponse($result['status'], $result);
});
$app->put('/clientsave/:id', function($id) use ($app) {
    $client = new client();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $client->updateClient($id, $data);
    echoResponse($result['status'], $result);
});
$app->post('/checkclient', function() use ($app) {
    $client = new client();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $client->checkemailaddress($data);
    echoResponse($result['status'], $result);
});
$app->delete('/clientdelete/:id', function($id) {
    $client = new client();
    $result = $client->deleteClient($id);
    echoResponse($result['status'], $result);
});
//-----------------client contact section -----------------//
$app->get('/editcontact/:id', function($id) use ($app) {
    $contact = new contact();
    $result = $contact->getContactById($id);
    echoResponse(200, $result);
});
$app->get('/contact/:id', function($id) use ($app) {
    $contact = new contact();
    $result = $contact->getContactByClientId($id);
    echoResponse(200, $result);
});
$app->post('/contactsave', function() use ($app) {
    $contact = new contact();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $contact->saveContact($data);
    echoResponse($result['status'], $result);
});
$app->post('/contactsave/:id', function($id) use ($app) {
    $contact = new contact();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $contact->updateContact($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/contactdelete/:id', function($id) {
    $contact = new contact();
    $result = $contact->deleteContact($id);
    echoResponse($result['status'], $result);
});

// ---------------- task type section --------------------//
$app->get('/tasktypeactive', function() use ($app) {
    $tasktype = new tasktype();
    $result = $tasktype->getActive();
    echoResponse(200, $result);
});
$app->get('/tasktype', function() use ($app) {
    $tasktype = new tasktype();
    $result = $tasktype->getAll();
    echoResponse(200, $result);
});
$app->get('/tasktype/:id', function($id) use ($app) {
    $tasktype = new tasktype();
    $result = $tasktype->getTypeById($id);
    echoResponse(200, $result);
});
$app->post('/tasktype', function() use ($app) {
    $tasktype = new tasktype();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $tasktype->save($data);
    echoResponse($result['status'], $result);
});
$app->put('/tasktype/:id', function($id) use ($app) {
    $tasktype = new tasktype();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $tasktype->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/tasktype/:id', function($id) {
    $tasktype = new tasktype();
    $result = $tasktype->delete($id);
    echoResponse($result['status'], $result);
});

//------------------ user status -----------------------//
$app->get('/userstatusactive', function() use ($app) {
    $userstatus = new userstatus();
    $result = $userstatus->getActive();
    echoResponse(200, $result);
});
$app->get('/userstatus', function() use ($app) {
    $userstatus = new userstatus();
    $result = $userstatus->getAll();
    echoResponse(200, $result);
});
$app->get('/userstatus/:id', function($id) use ($app) {
    $userstatus = new userstatus();
    $result = $userstatus->getTypeById($id);
    echoResponse(200, $result);
});
$app->post('/userstatus', function() use ($app) {
    $userstatus = new userstatus();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $userstatus->save($data);
    echoResponse($result['status'], $result);
});
$app->put('/userstatus/:id', function($id) use ($app) {
    $userstatus = new userstatus();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $userstatus->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/userstatus/:id', function($id) {
    $userstatus = new userstatus();
    $result = $userstatus->delete($id);
    echoResponse($result['status'], $result);
});

//------------------currency section -----------------------//
$app->get('/currencyactive', function() use ($app) {
    $currency = new currency();
    $result = $currency->getActive();
    echoResponse(200, $result);
});
$app->get('/currency', function() use ($app) {
    $currency = new currency();
    $result = $currency->getAll();
    echoResponse(200, $result);
});
$app->get('/currency/:id', function($id) use ($app) {
    $currency = new currency();
    $result = $currency->getTypeById($id);
    echoResponse(200, $result);
});
$app->post('/currency', function() use ($app) {
    $currency = new currency();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $currency->save($data);
    echoResponse($result['status'], $result);
});
$app->put('/currency/:id', function($id) use ($app) {
    $currency = new currency();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $currency->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/currency/:id', function($id) {
    $currency = new currency();
    $result = $currency->delete($id);
    echoResponse($result['status'], $result);
});


//------------------property section -----------------------//
$app->get('/propertyactive', function() use ($app) {
    $property = new property();
    $result = $property->getActive();
    echoResponse(200, $result);
});
$app->get('/property', function() use ($app) {
    $property = new property();
    $result = $property->getAll();
    echoResponse(200, $result);
});
$app->get('/property/:id', function($id) use ($app) {
    $property = new property();
    $result = $property->getTypeById($id);
    echoResponse(200, $result);
});
$app->post('/property', function() use ($app) {
    $property = new property();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $property->save($data);
    echoResponse($result['status'], $result);
});
$app->put('/property/:id', function($id) use ($app) {
    $property = new property();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $property->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/property/:id', function($id) {
    $property = new property();
    $result = $property->delete($id);
    echoResponse($result['status'], $result);
});

//------------------properties values section -----------------------//
$app->get('/propertyvalues/:id', function($id) use ($app) {
    $value = new value();
    $result = $value->getValueByProperty($id);
    echoResponse(200, $result);
});
$app->get('/searchByCreteria/:property_id/:user_id/:type', function($property_id, $user_id, $type) use ($app) {
    $property = new property();
    $result = $property->searchResult($property_id, $user_id, $type);
    echoResponse(200, $result);
});
$app->post('/values', function() use ($app) {
    $value = new value();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $value->save($data);
    echoResponse($result['status'], $result);
});
$app->put('/values/:id', function($id) use ($app) {
    $value = new value();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $value->update($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/values/:id', function($id) {
    $value = new value();
    $result = $value->delete($id);
    echoResponse($result['status'], $result);
});

//-------------user/client property --------------------//

$app->get('/getUserProperty/:id/:type', function($id, $type) use ($app) {
    $property = new property();
    $result = $property->getUserProperty($id, $type);
    echoResponse(200, $result);
});
$app->get('/getUserProperty/:id', function($id) use ($app) {
    $property = new property();
    $result = $property->userPropertyById($id);
    echoResponse(200, $result);
});
$app->post('/userProperty', function() use ($app) {
    $property = new property();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $property->addUserProperty($data);
    echoResponse(200, $result);
});
$app->put('/userProperty/:id', function($id) use ($app) {
    $property = new property();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $property->updateUserProperty($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/deleteUserProperty/:id', function($id) use ($app) {
    $property = new property();
    $result = $property->deleteUserProperty($id);
    echoResponse($result['status'], $result);
});
//-----------event creation ------------------------//

$app->get('/userevents/:id', function($id) use ($app) {
    $event = new event();
    $result = $event->getAllEvent($id);
    echoResponse(200, $result);
});
$app->post('/events', function() use ($app) {
    $event = new event();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $event->save($data);
    echoResponse(200, $result);
});
$app->put('/events/:id', function($id) use ($app) {
    $event = new event();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $event->updateEvent($id, $data);
    echoResponse(200, $result);
});
//-------------working hour ----------------------//
$app->post('/workinghour', function() use ($app) {
    $workinghour = new workinghour();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $workinghour->save($data);
    echoResponse(200, $result);
});
$app->get('/workinghour/:user_id', function($user_id) use ($app) {
    $workinghour = new workinghour();
    $result = $workinghour->getworkingByUser($user_id);
    echoResponse(200, $result);
});
//---------------- product section----------------------//
$app->get('/products', function() {
    $product = new product();
    $result = $product->getAllProduct();
    echoResponse($result['status'], $result);
});
$app->post('/products', function() use ($app) {
    $product = new product();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $product->AddProduct($data);
    echoResponse($result['status'], $result);
});
$app->put('/products/:id', function($id) use ($app) {
    $product = new product();
    $data = json_decode($app->request->getBody(), TRUE);
    $result = $product->updateProduct($id, $data);
    echoResponse($result['status'], $result);
});
$app->delete('/products/:id', function($id) {
    $product = new product();
    $result = $product->deleteProduct($id);
    echoResponse($result['status'], $result);
});

function echoResponse($status_code, $response) {
    global $app;
    $app->status($status_code);
    $app->contentType('application/json');
    echo json_encode($response, JSON_NUMERIC_CHECK);
}

$app->run();
?>