<?php

require_once 'functions.class.php';
require_once 'mail_format.class.php';

class client {

    protected $_db;
    protected $_clientemail;
    protected $_clientid;

    public function __construct() {
        $this->_db = db::getInstance();
    }

    protected function getClientEmail() {
        $this->_db->where("vEmail", $this->_clientemail);
        return $results = $this->_db->getOne('tms_client');
    }

    public function getClientId($id) {
        $this->_db->where("iClientId", $id);
        return $results = $this->_db->getOne('tms_client');
    }

    public function getClientByField($client_id, $field_name = "") {

        $this->_db->where('iClientId', $client_id);
        $data = $this->_db->get('tms_client');
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

    public function clientlist() {
        $data['data'] = $this->_db->get('tms_client');
        $data['status'] = 200;
        return $data;
    }

    public function checkemailaddress($data) {
        $this->_clientemail = $data;
        if ($this->getClientEmail()) {
            $return['status'] = 422;
            $return['msg'] = 'Email address already exists.';
        } else {
            $return['status'] = 200;
            $return['msg'] = 'Ok';
        }
        return $return;
    }

    public function saveClient($info) {
        $this->_clientemail = $info['vEmail'];

        if ($this->getClientEmail()) {
            $return['status'] = 422;
            $return['msg'] = 'Email address already exists.';
        } else {
            $info['vLogo'] = $this->uploadimage($info);
            $info['dtCreationDate'] = self::changeDateFormate($info['dtCreationDate']);
            $info['dtCreatedDate'] = date('Y-m-d H:i:s');
            $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
            unset($info['image']);
            $id = $this->_db->insert('tms_client', $info);
            if ($id) {
                $return['status'] = 200;
                $return['msg'] = 'Inserted Successfully.';
                $return['iClientId'] = $id;
            } else {
                $return['status'] = 422;
                $return['msg'] = 'Not inserted.';
            }
        }
        return $return;
    }

    public function updateClient($id, $info) {

        if (isset($info['image'])) {
            $info['vLogo'] = $this->uploadimage($info);
        }
        $info['dtCreatedDate'] = date('Y-m-d H:i:s');
        $info['dtUpdatedDate'] = date('Y-m-d H:i:s');
        unset($info['image']);
        $this->_db->where('iClientId', $id);
        $id = $this->_db->update('tms_client', $info);
        if ($id) {
            $return['status'] = 200;
            $return['msg'] = 'Updated Successfully.';
            $return['iClientId'] = $id;
        } else {
            $return['status'] = 422;
            $return['msg'] = 'Not inserted.';
        }
        return $return;
    }

    public function uploadimage($data) {
        $result = explode(',', $data['image']);
        $finalstring = base64_decode($result[1]);

        $mimetype = self::getImageMimeType($finalstring);
        $filename = time() . "." . $mimetype;
        $output_file = UPLOADS_ROOT . "logo/" . $filename;
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


    public function deleteClient($id) {
        $this->_db->where('iClientId', $id);
        $id = $this->_db->delete('tms_client');
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
