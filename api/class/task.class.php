<?php

require_once 'users.class.php';
require_once 'client.class.php';
require_once 'tasktype.class.php';

class Task {

    public function __construct() {
        $this->_db = db::getInstance();
    }

    public function save($taskdata) {
        $taskdata['dtCreatedDate'] = date('Y-m-d H:i:s');
        $taskdata['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $id = $this->_db->insert('tms_task', $taskdata);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Inserted.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
        return $return;
    }

    public function getTaskByUser($userId, $type) {
        $this->_db->where("iType", $type);
        $this->_db->where("iUserId", $userId);
        $results = $this->_db->get('tms_task');
        $users = new users();
        $client = new client();
        $tasktype = new tasktype();
        foreach ($results as $key => $value) {
            $type = $tasktype->getTypeById($value['vTaskType']);
            $results[$key]['task_type'] = $type['task_type'];
            $contact = $client->getClientByField($value['iContact']);
            $results[$key]['contact_person'] = $contact[0]['vClientName'];
            $responsible = $users->getUserByField($value['iPersonResponsible']);
            $results[$key]['person_responsible'] = $responsible[0]['vFirstName'] . ' ' . $responsible[0]['vLastName'];
        }
        $return['status'] = 200;
        $return['data'] = $results;

        return $return;
    }


    public function getTaskById($id) {
        $this->_db->where("iTaskId", $id);
        $results = $this->_db->getOne('tms_task');
        return $results;
    }

    public function updateTask($id, $info) {
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        $this->_db->where('iTaskId', $id);
        $id = $this->_db->update('tms_task', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Successfully Updated.';
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not Saved.';
        }
        return $return;
    }

    public function deleteTask($id) {
        $this->_db->where('iTaskId', $id);
        $id = $this->_db->delete('tms_task');
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
