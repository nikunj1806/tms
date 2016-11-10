<?php

require_once 'functions.class.php';
require_once 'mail_format.class.php';

class payment {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function save($info) {
        $info['dtCreatedDate'] = date('Y-m-d H:i:s');
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_payment', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Inserted.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
        return $return;
    }

    public function getPaymentById($user_id, $type) {
        $this->_db->where('iUserId', $user_id);
        $this->_db->where('iType', $type);
        return $data = $this->_db->getOne('tms_payment');
    }

    public function updatePayment($id, $type, $info) {
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $this->_db->where('iUserId', $id);
        $this->_db->where('iType', $type);
        $id = $this->_db->update('tms_payment', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Updated.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
        return $return;
    }

}
