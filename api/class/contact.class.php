<?php

require_once 'functions.class.php';
require_once 'mail_format.class.php';

class contact {

    protected $_db;
    protected $_contactemail;
    protected $_contact_id;

    public function __construct() {
        $this->_db = db::getInstance();
    }

    protected function getContactEmail() {
        $this->_db->where("vEmail", $this->_contactemail);
        return $results = $this->_db->getOne('tms_client_contact');
    }

    public function getContactById($id) {
        $this->_db->where("iContactId", $id);
        return $results = $this->_db->getOne('tms_client_contact');
    }

    public function getContactField($client_id, $field_name = "") {

        $this->_db->where('iClientId', $client_id);
        $data = $this->_db->get('tms_client_contact');
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

    public function getContactByClientId($id) {
        $this->_db->where("iClientId", $id);
        $data['data'] = $this->_db->get('tms_client_contact');
        $data['status'] = 200;
        return $data;
    }

    public function checkemailaddress($data) {
        $this->_contactemail = $data;
        if ($this->getContactEmail()) {
            $return['status'] = 422;
            $return['msg'] = 'Email address already exists.';
        } else {
            $return['status'] = 200;
            $return['msg'] = 'Ok';
        }
        return $return;
    }

    public function saveContact($info) {

        $info['dtCreatedDate'] = date('Y-m-d H:i:s');
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_client_contact', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Inserted Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }

    public function updateContact($id, $info) {

        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $this->_db->where('iContactId', $id);
        $id = $this->_db->update('tms_client_contact', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Inserted Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }

    public function deleteContact($id) {
        $this->_db->where('iContactId', $id);
        $id = $this->_db->delete('tms_client_contact');
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Deleted Successfully.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }

        return $return;
    }

}
