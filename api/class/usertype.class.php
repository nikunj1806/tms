<?php

class usertype {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function save($data) {

        $data['dtCreatedDate'] = date('Y-m-d H:i:s');
        $data['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_user_type', $data);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Insert Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }
    public function update($id, $data) {

        $data['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $this->_db->where('iTypeId', $id);
        $id = $this->_db->update('tms_user_type', $data);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Insert Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }
    public function getAll() {

        $results = $this->_db->get('tms_user_type');
        return $results;
    }
    public function getDefaultType() {
        $this->_db->where('iDefault', 1);
        $results = $this->_db->get('tms_user_type');
        return $results;
    }
    public function delete($id) {
        $this->_db->where('iTypeId', $id);
        $id = $this->_db->delete('tms_user_type');
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Deleted Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }
    public function getTypeById($id) {
        $this->_db->where('iTypeId', $id);
        $result = $this->_db->getOne('tms_user_type');
        

        return $result;
    }
    public function getTypeByResource($id) {
        $this->_db->where('iResourceType', $id);
        $result = $this->_db->get('tms_user_type');
        

        return $result;
    }
}
