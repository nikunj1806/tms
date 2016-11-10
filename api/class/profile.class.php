<?php

require_once 'functions.class.php';
require_once 'mail_format.class.php';

class profile {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function saveAddtionalInfo($info) {
        $info['dtCreatedDate'] = date('Y-m-d H:i:s');
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_additional_info', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Inserted.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
    }
    public function getAddtionalInfo($userId) {
        $this->_db->where("iUserId", $userId);
        $results = $this->_db->getOne('tms_additional_info');
        return $results;
    }
    
    public function updateAddtionalInfo($id, $info) {
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $this->_db->where('iUserId', $id);
        $id = $this->_db->update('tms_additional_info', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Inserted.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
    }
}
