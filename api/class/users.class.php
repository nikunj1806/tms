<?php

require_once 'functions.class.php';
require_once 'mail_format.class.php';
require_once 'userstatus.class.php';

class users {

    protected $_db;
    protected $_useremail;
    protected $_username;
    protected $_userid;

    public function __construct() {
        $this->_db = db::getInstance();
    }

    protected function getUser_Email() {
        $this->_db->where("vEmailAddress", $this->_useremail);
        return $results = $this->_db->getOne(TBL_USERS);
    }

    protected function getUser_Username() {
        $this->_db->where("vUserName", $this->_username);
        return $results = $this->_db->getOne(TBL_USERS);
    }

    protected function getUser_Id() {
        $this->_db->where("iUserId", $this->_userid);
        return $results = $this->_db->getOne(TBL_USERS);
    }

    public function getUserByField($user_id, $field_name = "") {

        $this->_db->where('iUserId', $user_id);
        $data = $this->_db->get(TBL_USERS);
        if ($field_name == "") {
            return $data;
        } else {
            $field_names = explode(',', $field_name);
            $return_data = "";
            foreach ($field_names as $field) {
                $return_data.= $data[0][$field] . ' ';
            }
            return trim($return_data);
        }
    }

    public function userlist() {
        $userstatus = new userstatus();
        $data = $this->_db->get(TBL_USERS);
        foreach ($data as $key => $value) {
            $status = $userstatus->getTypeById($value['eUserStatus']);
            $data[$key]['is_active'] = $status['status_name'];
        }

        $result['data'] = $data;
        $result['status'] = 200;
        return $result;
    }

    public function userwithType($type) {
        $this->_db->where('iFkUserTypeId', $type);
        $data = $this->_db->get(TBL_USERS);
        $result['data'] = $data;
        $result['status'] = 200;
        return $result;
    }

    public function checkusername($data) {
        $this->_username = $data;
        if ($this->getUser_Username()) {
            $return['status'] = 422;
            $return['msg'] = 'User name already exists.';
        } else {
            $return['status'] = 200;
            $return['msg'] = 'success';
        }
        return $return;
    }

    public function checkemailaddress($data) {
        $this->_useremail = $data;
        if ($this->getUser_Email()) {
            $return['status'] = 422;
            $return['msg'] = 'Email address already exists.';
        } else {
            $return['status'] = 200;
            $return['msg'] = 'success';
        }
        return $return;
    }

    public function saveuserprofile($user) {
        $this->_username = $user['vUserName'];
        $this->_useremail = $user['vEmailAddress'];

        if ($this->getUser_Username()) {
            $return['status'] = 422;
            $return['msg'] = 'User name already exists.';
        } else if ($this->getUser_Email()) {
            $return['status'] = 422;
            $return['msg'] = 'Email address already exists.';
        } else {
            $user['vPassword'] = md5($user['vPassword']);
            $user['vProfilePic'] = $this->uploadimage($user);
            $user['dtBirthDate'] = date('Y-m-d', strtotime($user['dtBirthDate']));
            $user['dtCreationDate'] = self::changeDateFormate($user['dtCreationDate']);
            $user['dtCreatedDate'] = date('Y-m-d H:i:s');
            $user['dtUpdatedDate'] = date('Y-m-d H:i:s');
            unset($user['image']);
            $id = $this->_db->insert(TBL_USERS, $user);
            if ($id) {
                $return['status'] = 200;
                $return['msg'] = 'Inserted Successfully.';
                $return['iUserId'] = $id;
            } else {
                $return['status'] = 422;
                $return['msg'] = 'Not inserted.';
            }
        }
        return $return;
    }

    public function uploadimage($data) {
        $result = explode(',', $data['image']);
        $finalstring = base64_decode($result[1]);

        $mimetype = self::getImageMimeType($finalstring);
        $filename = time() . "." . $mimetype;
        $output_file = UPLOADS_ROOT . "profilePic/" . $filename;
        $ifp = fopen($output_file, "wb");
        fwrite($ifp, $finalstring);
        fclose($ifp);

        return $filename;
    }

    public static function getBytesFromHexString($hexdata) {
        for ($count = 0; $count < strlen($hexdata); $count+=2)
            $bytes[] = chr(hexdec(substr($hexdata, $count, 2)));

        return implode($bytes);
    }

    public static function changeDateFormate($data) {
        $d = explode(" ", $data);
        $date = explode("/", $d[0]);

        if (isset($d[1]))
            return $final_date = $date[2] . "-" . $date[0] . "-" . $date[1] . " " . $d[1];
        else
            return $final_date = $date[2] . "-" . $date[0] . "-" . $date[1];
    }

    public static function getImageMimeType($imagedata) {
        $imagemimetypes = array(
            "jpeg" => "FFD8",
            "png" => "89504E470D0A1A0A",
            "gif" => "474946",
            "bmp" => "424D",
            "tiff" => "4949",
            "tiff" => "4D4D"
        );

        foreach ($imagemimetypes as $mime => $hexbytes) {
            $bytes = self::getBytesFromHexString($hexbytes);
            if (substr($imagedata, 0, strlen($bytes)) == $bytes)
                return $mime;
        }

        return NULL;
    }

    public function authenticate($user) {


        $username = $user["email"];
        $password = md5($user["password"]);
        $this->_db->where("vEmailAddress", $username);
        $this->_db->where('vPassword', $password);
        $results = $this->_db->getOne(TBL_USERS);

        // checking whether any match found or not
        if ($this->_db->count > 0) {


            $_SESSION['is_login'] = 'yes';
            $_SESSION['user_data'] = $results;
            unset($_SESSION['sessionX']);
            $return['status'] = 200;
            $return['msg'] = 'Successfully Login.';
            $return['session_data'] = $results;
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Invalid User Name OR Password.';
        }
        return $return;
    }

    public function resetPassword($user) {
        $fn = new functions();
        $mail_format = new mail_format();

        $username = $user["email"];
        $this->_db->where("vEmailAddress", $username);
        $results = $this->_db->getOne(TBL_USERS);
        if ($this->_db->count > 0) {

            $str = $fn->generateRandomString(5);
            $newPass = md5($str);
            $this->_db->where("vEmailAddress", $results['vEmailAddress']);
            $return['data'] = $this->_db->update(TBL_USERS, array('vPassword' => $newPass));
            $mail_data['username'] = $results['vUserName'];
            $mail_data['email'] = $results['vEmailAddress'];
            $mail_data['password'] = $newPass;
            $subject = $mail_format->render_subject(2, $mail_data);
            $message = $mail_format->render_message(2, $mail_data);
            $return['msg'] = $fn->send_mail($mail_data['email'], '', '', $subject, $message, $alert_msg = '', $attachments = '');

            $return['status'] = 200;
        } else {
            $return['status'] = 422;
            $return['msg'] = 'You are not Registered in System';
        }
        return $return;
    }

    public function updateprofile($id, $user) {

        if (isset($user['image'])) {
            $user['vProfilePic'] = $this->uploadimage($user);
        }
        $user['dtBirthDate'] = date('Y-m-d', strtotime($user['dtBirthDate']));
        $user['dtUpdatedDate'] = date('Y-m-d H:i:s');
        unset($user['image']);
        $this->_db->where('iUserId', $id);
        $id = $this->_db->update(TBL_USERS, $user);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Updated Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }

    public function deleteUser($id) {
        $this->_db->where('iUserId', $id);
        $id = $this->_db->delete(TBL_USERS);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Updated Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }

}
