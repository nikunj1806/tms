<?php

class currency {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function save($data) {

        $data['created_date'] = date('Y-m-d H:i:s');
        $data['updated_date'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_currency', $data);
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

        $data['updated_date'] = date('Y-m-d H:i:s');
        $this->_db->where('currency_id', $id);
        $id = $this->_db->update('tms_currency', $data);
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

        $results = $this->_db->get('tms_currency');
        return $results;
    }

    public function delete($id) {
        $this->_db->where('currency_id', $id);
        $id = $this->_db->delete('tms_currency');
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
        $this->_db->where('currency_id', $id);
        $result = $this->_db->getOne('tms_currency');
        return $result;
    }
    
    public function getActive() {
        $this->_db->where('is_active', 1);
        $result = $this->_db->get('tms_currency');
        return $result;
    }


}
