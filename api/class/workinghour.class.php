<?php

class workinghour {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function save($data) {
        $data['created_date'] = date('Y-m-d H:i:s');
        $data['modified_date'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_workinghour', $data);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Inserted.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
        return $return;
    }

    public function getworkingByUser($userId) {
        $this->_db->where("user_id", $userId);
        $results = $this->_db->get('tms_workinghour');
        $return['status'] = 200;
        $return['data'] = $results;
        return $return;
    }

}
