-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2015 at 05:48 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kanhawhp_tms`
--

-- --------------------------------------------------------

--
-- Table structure for table `tms_additional_info`
--

CREATE TABLE IF NOT EXISTS `tms_additional_info` (
  `iAdditionInfoId` int(11) NOT NULL AUTO_INCREMENT,
  `iUserId` int(11) NOT NULL,
  `tComment` text NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iAdditionInfoId`),
  KEY `iUserId` (`iUserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tms_client`
--

CREATE TABLE IF NOT EXISTS `tms_client` (
  `iClientId` int(11) NOT NULL AUTO_INCREMENT,
  `vClientName` varchar(255) NOT NULL,
  `vCodeInvoice` varchar(255) NOT NULL,
  `vCodeRights` varchar(255) NOT NULL,
  `vEmail` varchar(255) NOT NULL,
  `vPhone` varchar(255) NOT NULL,
  `vSkype` varchar(255) NOT NULL,
  `vLogo` varchar(255) NOT NULL,
  `vWebsite` varchar(255) NOT NULL,
  `vAddress1` varchar(255) NOT NULL,
  `vAddress2` varchar(255) NOT NULL,
  `address1Detail` text NOT NULL,
  `address2Detail` text NOT NULL,
  `iBussinessDeveloper` int(11) NOT NULL,
  `vProjectCoordinator` int(11) NOT NULL,
  `vProjectManager` int(11) NOT NULL,
  `vQASpecialist` int(11) NOT NULL,
  `vCustomerType` varchar(255) NOT NULL,
  `vStatus` varchar(255) NOT NULL,
  `iSaleId` int(11) NOT NULL,
  `vTextType` varchar(255) NOT NULL,
  `vClientNumber` varchar(255) NOT NULL,
  `dtCreationDate` datetime NOT NULL,
  `iTemplate` int(11) NOT NULL,
  `vTimeZone` varchar(255) NOT NULL,
  `tMemo` text NOT NULL,
  `tPoInfo` text NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iClientId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tms_client`
--

INSERT INTO `tms_client` (`iClientId`, `vClientName`, `vCodeInvoice`, `vCodeRights`, `vEmail`, `vPhone`, `vSkype`, `vLogo`, `vWebsite`, `vAddress1`, `vAddress2`, `address1Detail`, `address2Detail`, `iBussinessDeveloper`, `vProjectCoordinator`, `vProjectManager`, `vQASpecialist`, `vCustomerType`, `vStatus`, `iSaleId`, `vTextType`, `vClientNumber`, `dtCreationDate`, `iTemplate`, `vTimeZone`, `tMemo`, `tPoInfo`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(7, 'August', 'Sosa', 'Itaque pariatur Consectetur irure minima magni voluptate consectetur officia odio laborum', 'pegu@hotmail.com', 'Lucas', 'Voluptas quod ullamco necessitatibus voluptates sit aspernatur possimus officia sapiente sed non ullamco id dolore ea sit', '1445685173.png', 'http://www.kifuvazejys.com.au', 'Ahmedabad JN, Saraspur, Ahmedabad, Gujarat, India', 'Ahmedabad JN, Saraspur, Ahmedabad, Gujarat, India', '[{"id":"address1_street_number","value":""},{"id":"address1_locality","value":"Ahmedabad"},{"id":"address1_administrative_area_level_1","value":"GJ"},{"id":"address1_country","value":"India"},{"id":"address1_postal_code","value":"380002"}]', '[{"id":"address2_street_number","value":""},{"id":"address2_locality","value":"Ahmedabad"},{"id":"address2_administrative_area_level_1","value":"GJ"},{"id":"address2_country","value":"India"},{"id":"address2_postal_code","value":"380002"}]', 1, 1, 12, 13, 'Direct/Indirect Customer', 'Inactive', 0, 'non-taxable', '2682', '0000-00-00 00:00:00', 0, '-6', 'Lorem illum, dolorum perferendis minus quas quia maxime rem placeat, voluptatem, sequi est vitae laborum voluptas aspernatur sit proident.', 'Qui dolor omnis nostrud voluptate minim sunt, et et veniam, ipsam modi eiusmod illo.', '2015-11-03 11:53:57', '2015-11-03 11:53:57'),
(8, 'Brady', 'Mcclain', 'Nihil corporis quia quasi praesentium consequatur dolorem at laborum', 'qavanamyvo@yahoo.com', '6504504545', 'darshanchudasama', '1445836482.jpeg', 'http://www.kanhasoft.com', 'Sanand, Gujarat, India', 'Sanand, Ahmedabad, Gujarat, India', '[{"id":"address1_street_number","value":""},{"id":"address1_locality","value":"Sanand"},{"id":"address1_administrative_area_level_1","value":"GJ"},{"id":"address1_country","value":"India"},{"id":"address1_postal_code","value":"382110"}]', '[{"id":"address2_street_number","value":"asd"},{"id":"address2_locality","value":"asd"},{"id":"address2_administrative_area_level_1","value":"GJ"},{"id":"address2_country","value":"India"},{"id":"address2_postal_code","value":"382115"}]', 13, 1, 12, 13, 'Direct/Indirect Customer', 'Prospect', 0, 'EU with VAT', '1177', '0000-00-00 00:00:00', 0, '5.5', 'Labore atque qui proident, incididunt qui anim ex nostrud incidunt, dolor praesentium et omnis adipisicing doloribus inventore ipsum aliqua. Dolor.', 'Tenetur ut eaque est aliqua. Voluptate exercitationem quam illo maxime eligendi elit, quod.', '2015-11-04 11:52:41', '2015-11-04 11:52:41');

-- --------------------------------------------------------

--
-- Table structure for table `tms_client_contact`
--

CREATE TABLE IF NOT EXISTS `tms_client_contact` (
  `iContactId` int(11) NOT NULL AUTO_INCREMENT,
  `iClientId` int(11) NOT NULL,
  `vFirstName` varchar(255) NOT NULL,
  `vLastName` varchar(255) NOT NULL,
  `vEmail` varchar(255) NOT NULL,
  `vDepartment` varchar(255) NOT NULL,
  `vJobTitle` varchar(255) NOT NULL,
  `vPhone` varchar(255) NOT NULL,
  `vSkype` varchar(255) NOT NULL,
  `vActive` enum('active','inactive','Not Contacted') NOT NULL,
  `tMemo` text NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iContactId`),
  KEY `iClientId` (`iClientId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tms_client_contact`
--

INSERT INTO `tms_client_contact` (`iContactId`, `iClientId`, `vFirstName`, `vLastName`, `vEmail`, `vDepartment`, `vJobTitle`, `vPhone`, `vSkype`, `vActive`, `tMemo`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(1, 7, 'Qonoh', 'Kelela', 'teqabebewa@gmail.com', 'Leroy Alexander', 'Aurora Webster', '+282-78-9253572', 'Inga Mcintyre', 'active', 'asd dqwed', '2015-10-24 16:43:02', '2015-10-24 16:43:02'),
(2, 7, 'Masipihu', 'Savilyde', 'vadoc@hotmail.com', 'Damian Burke', 'Kylee Lester', '+756-37-1875990', 'Zoe Robertson', 'Not Contacted', 'asdas dsad sad', '2015-10-24 16:43:14', '2015-10-24 16:43:14'),
(3, 7, 'Galovoxi', 'Ragutenij', 'rucyzyzyk@yahoo.com', 'Theodore Bailey', 'Rebecca Alvarez', '+761-62-7305176', 'Sonya Knight', 'inactive', 'qwe wqe wqewqe we', '2015-10-26 10:47:34', '2015-10-26 10:47:34'),
(4, 8, 'Maryxol', 'Zegyw', 'qysym@gmail.com', 'Lewis Savage', 'Cedric Hardy', '+375-90-2265633', 'Nola Roberts', 'active', 'wq ewqe wqewqe', '2015-10-26 10:47:57', '2015-10-26 10:47:57');

-- --------------------------------------------------------

--
-- Table structure for table `tms_currency`
--

CREATE TABLE IF NOT EXISTS `tms_currency` (
  `currency_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) NOT NULL,
  `currency_code` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`currency_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tms_currency`
--

INSERT INTO `tms_currency` (`currency_id`, `country_name`, `currency_code`, `is_active`, `created_date`, `updated_date`) VALUES
(2, 'India', 'INR', 0, '2015-10-15 13:09:25', '2015-10-15 15:39:57'),
(3, 'USA', 'USD', 1, '2015-10-15 13:09:37', '2015-10-15 13:09:37'),
(4, 'Europe country', 'EURO', 1, '2015-10-15 13:10:04', '2015-10-15 13:10:10'),
(5, 'Englang', 'GBP', 1, '2015-10-15 13:10:57', '2015-10-15 13:10:57');

-- --------------------------------------------------------

--
-- Table structure for table `tms_events`
--

CREATE TABLE IF NOT EXISTS `tms_events` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `start` varchar(255) NOT NULL,
  `end` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `tms_events`
--

INSERT INTO `tms_events` (`event_id`, `title`, `start`, `end`, `user_id`, `created_by`, `updated_by`, `created_date`, `updated_date`) VALUES
(1, 'nick Events', '2015-10-08T07:05:00.000Z', '2015-10-09T07:05:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-10-29 19:32:51'),
(2, 'nick event2', '2015-10-25T00:00:00.000Z', '2015-10-25T14:55:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-11-02 12:02:32'),
(3, 'lunch', '2015-10-27T13:00:00.000Z', '2015-10-27T13:00:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-10-29 19:37:14'),
(4, 'Break', '2015-10-17T06:30:00.000Z', '2015-10-17T18:43:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-10-31 18:14:01'),
(5, 'ad', '2015-10-28T00:00:00.000Z', '2015-10-28T09:44:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-10-31 18:14:50'),
(6, 'Happy diwali', '2015-11-11T00:00:00.000Z', '2015-11-11T06:37:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-11-02 14:37:48'),
(7, 'Dhanteras', '2015-11-09T00:00:00.000Z', '2015-11-09T02:30:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-11-02 11:11:46'),
(8, 'Happy Diwali', '2015-11-02T00:00:00.000Z', '2015-11-02T12:00:00.000Z', 14, 1, 1, '0000-00-00 00:00:00', '2015-11-02 11:04:58'),
(9, 'DEMO', '2015-10-29T06:30:00.000Z', '2015-10-29T20:30:00.000Z', 1, 1, 1, '0000-00-00 00:00:00', '2015-11-04 11:25:10');

-- --------------------------------------------------------

--
-- Table structure for table `tms_mail_format`
--

CREATE TABLE IF NOT EXISTS `tms_mail_format` (
  `mail_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` text NOT NULL,
  `subject` varchar(200) NOT NULL,
  `message` text NOT NULL,
  `placeholder` varchar(200) NOT NULL,
  `is_active` varchar(2) CHARACTER SET latin1 NOT NULL,
  `created_by` double NOT NULL,
  `modified_by` double NOT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  PRIMARY KEY (`mail_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tms_mail_format`
--

INSERT INTO `tms_mail_format` (`mail_id`, `name`, `description`, `subject`, `message`, `placeholder`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 'REGISTRATION', 'Registration at COMPANY_NAME', 'Thank you for choosing to subscribe to COMPANY_NAME', 'Dear FIRST_NAME LAST_NAME,<br><br>Thank you for choosing to subscribe to COMPANY_NAME!<br><br>Please use following information to log in to the system.<br><br>Username : EMAIL<br>\nPassword : PASSWORD<br><br>\nPlease <a href="LINK_FORWARD" target="_blank" rel="nofollow">click Here</a> to login.\n<br><br>Kind regards,\n<br><br>\n Noel Wilson <br>\n General Manager <br>\n Ph: (02) 80034451 <br>\nadmin@checkthemplease.com.au <br>\nwww.checkthemplease.com.au <br>\n', 'FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,PHONE,COMPANY_NAME,LINK_FORWARD', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-07 00:00:00'),
(2, ' LINK_FORWARD', 'Reset Password', 'Reset Password', 'Hi USERNAME,<br /><br /> Your password has been sucessfully reseted. <br />Please Use below \n\ncredential to Login <br />\nemail : EMAIL<br/>\nPassword : PASSWORD\n<br />\n<br /><br>Kind regards, <br>\n TMS Team <br>\n', 'USERNAME,EMAIL,PASSWORD', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-26 00:00:00'),
(3, ' LINK_FORWARD', 'resend Link', 'Applicant Feedback Form', 'Hi FIRST_NAME LAST_NAME,<br /><br/>We know you are very busy. This is just a friendly reminder.  Could you please assist the Job  <br />Applicant by clicking on the link below & completing the survey? It is designed to be very quick and <br />only takes about 1 to 2 minutes to complete<br /><a href="LINK_FORWARD" target="_blank" rel="nofollow">click it</a> <br /><br />Kind regards,<br /><br />Noel Wilson<br />General Manager<br />Ph: (02) 80034451<br /><a href="noel@checkthemplease.com.au">noel@checkthemplease.com.au</a><br /><a href="www.checkthemplease.com.au">www.checkthemplease.com.au</a><br />', 'LINK_FORWARD,FIRST_NAME,LAST_NAME', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-26 00:00:00'),
(4, 'REGISTRATION_EFT', 'This format will be used when company register through EFT Patment', 'Thank you for choosing to subscribe to COMPANY_NAME', 'Dear FIRST_NAME LAST_NAME,<br><br>Thank you for choosing to subscribe to COMPANY_NAME!<br><br>Here are the <b>next steps</b> to complete your purchase and to start setting up your complex:<br><br><ol><li>Make the payment of <b>R </b>TOTAL_AMOUNT\ninto our bank account.<br><br>Bank:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FIRST\nNATIONAL BANK&nbsp;<br>Account\nName: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;IAM BUSINESS\nMANAGEMENT <br>CONCEPTS\n\nAccount\nNumber: &nbsp; &nbsp; 62420305543\n\n<br>Branch: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Greenstone\n\n<br>Branch\nCode: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 00201510\n\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;\n<br>*Reference: <i>Please use the complex name you registered\nas the transaction reference.<br><br></i></li><li><span>As soon as we pick up the payment on our bank statement, we will initiate your account.<br></span></li><li><span>As soon as your account has been initiated, we will send you an eMail with the necessary login details as well as instructions on how to setup your complex.<br></span></li></ol>You can then setup your complex and enjoy all the benefits of&nbsp;COMPANY_NAME!<br><br>Regards,<br>COMPANY_NAME<br>', 'FIRST_NAME,LAST_NAME,COMPANY_NAME,TOTAL_AMOUNT', '1', 1, 1, '2014-07-17 00:00:00', '2014-07-31 00:00:00'),
(5, 'NEW_REFEREE', 'New Referee Submited', 'An applicant has just submitted a reference for your approval', 'Dear FIRST_NAME LAST_NAME,<br>An applicant has just submitted a reference. Can you please login & approve by selecting the survey type relevant to the position & payment method? <br><br>\n<a href="LINK_FORWARD" target="_blank" rel="nofollow">click Here</a> <br /><br>\nRegards,\n<br/><br>\n<b>Check Them Please<b><br>\nPh: (02) 80034451<br> \nadmin@checkthemplease.com.au<br>\nwww.checkthemplease.com.au<br>\n', 'FIRST_NAME,LAST_NAME,LINK_FORWARD', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-26 00:00:00'),
(6, ' OWNER_COMPLAINTS', 'Change Owner of Complaint', 'Change Owner of Complaint', 'Dear FIRST_NAME LAST_NAME,<br>&nbsp;You have been assigned as a owner of Complaint&nbsp;COMPLAINT_NUMBER<br>&nbsp;&nbsp;<br>', 'FIRST_NAME,LAST_NAME,COMPANY_NAME,COMPLAINT_NUMBER', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-26 00:00:00'),
(7, 'ESCALATE_COMPLAINTS', 'Escalate Complaint', 'Escalate Complaint', 'Dear FIRST_NAME LAST_NAME,<br>&nbsp;Complaint &nbsp;COMPLAINT_NUMBER has been escalated &nbsp;to &nbsp;you<br>&nbsp;&nbsp;<br>', 'FIRST_NAME,LAST_NAME,COMPANY_NAME,COMPLAINT_NUMBER', '1', 1, 1, '2014-07-17 00:00:00', '2014-08-27 00:00:00'),
(8, 'Referee Check Completed', 'Referee Check Completed', 'Referee Check Completed', 'To FIRST_NAME LAST_NAME,<br><br>\nPlease find attached a completed reference report for one of your applicants. Please remember you can contact the referee (s) for further clarification should you require it.\n<br><br>\nRegards,\n<br><br>\n<b>\nCheck Them Please<b><br>\nPh: (02) 80034451<br>\nadmin@checkthemplease.com.au<br>\nwww.checkthemplease.com.au\n', 'FIRST_NAME,LAST_NAME', '1', 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tms_payment`
--

CREATE TABLE IF NOT EXISTS `tms_payment` (
  `iPaymentId` int(11) NOT NULL AUTO_INCREMENT,
  `iUserId` int(11) NOT NULL,
  `iType` int(11) NOT NULL COMMENT '1=user,2=client',
  `vPaymentInfo` text NOT NULL,
  `vBankInfo` text NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iPaymentId`),
  KEY `iUserId` (`iUserId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tms_payment`
--

INSERT INTO `tms_payment` (`iPaymentId`, `iUserId`, `iType`, `vPaymentInfo`, `vBankInfo`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(1, 12, 1, '{"tax_id":"asd65260","target_days":92,"reminder1":79,"reminder2":7,"reminder3":99,"currency":"3","memos":"Reiciendis exercitation sint rerum ratione ut non officia eaque quo non autem et ipsum, laborum. Saepe rerum quae maiores.","preselected_tax":"tax 1,2","tax_type":"non-taxable"}', '{"bank_name":"Barrett Benton","bank_code":"Ad aliquam provident corrupti optio culpa aliquip quis eius aliquid magni atque ut minima aliqua Voluptate dolor et","address":"Qui sed corporis optio non ut omnis consequatur Molestiae","acc_number":"6871084854054","holder_name":"Hadley Knowles","iban":"SDF910485","bic":"6810asd","sort_code":"6500","paypal_address":"asdsad.adsf","payment_method":"Credit Card"}', '2015-10-24 16:41:18', '2015-10-24 16:41:18'),
(2, 7, 2, '{"tax_id":"Maiores quae in consequatur dolores corrupti dolor placeat quaerat id placeat sed illum illo magnam enim quo esse","target_days":27,"reminder1":1,"reminder2":51,"reminder3":48,"currency":"3","memos":"Et esse, quas et autem aliquam neque ex ipsa, voluptatum cupiditate quae occaecat dolore distinctio. Ipsam sed est ipsam repudiandae.","preselected_tax":"tax 1,2","tax_type":"EU with VAT"}', '{"bank_name":"Dean Floyd","bank_code":"Unde commodi quam quo commodo reprehenderit debitis ipsa eum praesentium odio","address":"Anim enim fugiat aute autem","acc_number":"Veniam aliqua Nihil et sequi nisi officia","holder_name":"Madaline Holden","iban":"Sint aute ipsum harum consequatur veniam molestiae corporis ex reiciendis odit alias nisi","bic":"Et fuga Praesentium non consequatur Aliquam occaecat quibusdam ex ullam hic sed eligendi aspernatur sunt nemo odio amet quis placeat","sort_code":"Dicta est voluptatum impedit omnis accusamus illum deleniti iusto nemo ut praesentium et optio architecto irure","paypal_address":"Voluptate irure modi quis placeat quia eveniet porro voluptatem sit dolor dolore esse rem","payment_method":"Check"}', '2015-10-24 16:43:33', '2015-10-24 16:43:33'),
(3, 1, 1, '{"tax_id":"Debitis suscipit provident rerum fugiat est ipsa rem omnis delectus","target_days":84,"reminder1":92,"reminder2":53,"reminder3":85,"currency":"4","memos":"Labore dolore eum laboriosam, fugiat odit nihil iste ipsum, earum expedita fugit, esse, est aliqua. Quia.","preselected_tax":"tax 1(0.25%)","tax_type":"EU without VAT"}', '{"bank_name":"Gail Rogers","bank_code":"Sunt fugiat rem ea eos","address":"Repudiandae pariatur Saepe earum saepe veritatis omnis dolores exercitationem est aliqua Ad consequatur Temporibus anim","acc_number":"Ut sed voluptatibus odio impedit placeat quaerat irure cum ad","holder_name":"Nyssa Bright","iban":"Aut ea dolorum ab similique repellendus Eos et et aliquam hic odio anim quod laboriosam et ex ea ea excepturi","bic":"Amet cumque dolor culpa qui aute explicabo Velit incididunt nulla animi duis ullam non autem fugiat vero","sort_code":"Deleniti error ducimus libero cumque odit aspernatur voluptates ipsa qui dolores voluptates","paypal_address":"Commodi aliquip nemo alias architecto ducimus deserunt consequuntur est in numquam blanditiis labore molestias qui ea","payment_method":"Check"}', '2015-10-24 17:14:28', '2015-11-03 23:25:36'),
(4, 8, 2, '{"tax_id":"Beatae sed et assumenda eveniet deserunt rerum","target_days":54,"reminder1":90,"reminder2":79,"reminder3":13,"currency":"4","memos":"Ut voluptatum ut vel delectus, culpa autem debitis labore odio in placeat, incidunt.","preselected_tax":"tax 1(0.25%)","tax_type":"non-taxable"}', '{"bank_name":"Mira Mosley","bank_code":"Est dignissimos rerum culpa commodi fuga Molestiae ipsam modi natus sed voluptatibus et voluptate placeat eum doloribus consectetur amet et","address":"Eos quae quia error aliqua Sed sint distinctio Maxime earum","acc_number":"Illum eaque magnam sint aspernatur quod cupiditate consequuntur vel recusandae","holder_name":"Yen Herrera","iban":"Amet mollit nisi sunt ullamco consequuntur","bic":"Aut facere modi magnam incididunt possimus rem dolor consectetur nostrum","sort_code":"Voluptatum neque nostrum et qui eum accusantium inventore minus dolor consequat Ipsam earum commodi odio veniam itaque quasi nemo","paypal_address":"Vel incidunt ex rerum assumenda eos ipsa laborum Cupiditate dolore fugiat dolorum facilis","payment_method":"Credit Card"}', '2015-10-26 10:49:12', '2015-10-26 10:49:12');

-- --------------------------------------------------------

--
-- Table structure for table `tms_property`
--

CREATE TABLE IF NOT EXISTS `tms_property` (
  `property_id` int(11) NOT NULL AUTO_INCREMENT,
  `property_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `tms_property`
--

INSERT INTO `tms_property` (`property_id`, `property_name`, `description`, `is_active`, `created_date`, `updated_date`) VALUES
(1, 'software', 'software description', 0, '2015-10-16 14:47:14', '2015-10-24 17:16:17'),
(4, 'Language', 'asd', 1, '2015-10-16 14:55:31', '2015-10-19 20:13:04'),
(5, 'Expertise', 'gfdgsxfg', 1, '2015-10-16 19:21:59', '2015-10-19 20:13:12'),
(8, 'Hardware', 'Computer Hardware', 1, '2015-10-21 12:08:32', '2015-10-26 14:55:55'),
(9, 'New', 'new properties', 1, '2015-10-24 20:02:57', '2015-10-24 20:02:57');

-- --------------------------------------------------------

--
-- Table structure for table `tms_property_values`
--

CREATE TABLE IF NOT EXISTS `tms_property_values` (
  `value_id` int(11) NOT NULL AUTO_INCREMENT,
  `property_id` int(11) NOT NULL,
  `value_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`value_id`),
  KEY `property_id` (`property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `tms_property_values`
--

INSERT INTO `tms_property_values` (`value_id`, `property_id`, `value_name`, `description`, `created_date`, `updated_date`) VALUES
(1, 1, 'adobe reader', 'fas dasd asd', '2015-10-16 14:47:36', '2015-10-20 20:07:59'),
(6, 4, 'php', 'asd', '2015-10-16 14:55:58', '2015-10-20 19:08:50'),
(7, 5, 'coding', 'coding expert', '2015-10-16 19:22:06', '2015-10-20 19:08:09'),
(8, 5, 'designing', 'design expert', '2015-10-16 19:22:06', '2015-10-20 19:08:09'),
(26, 1, 'photoshope', 'craete psd and images with dynamically design', '2015-10-21 11:05:17', '2015-10-21 11:05:17'),
(27, 4, 'python', 'phython language', '2015-10-21 11:06:06', '2015-10-21 11:06:06'),
(28, 4, '.net', '.net language', '2015-10-21 11:06:06', '2015-10-21 11:06:06'),
(29, 8, 'CPU', 'central processing unit', '2015-10-21 12:08:51', '2015-10-21 12:08:51'),
(32, 8, 'Mouse', 'Mouse description', '2015-10-21 12:41:41', '2015-10-21 12:41:41'),
(33, 8, 'Monitor', 'New Monitor', '2015-10-21 12:41:41', '2015-10-21 12:41:41'),
(34, 8, 'keyBoard', 'keyboard', '2015-10-21 12:41:41', '2015-10-21 12:41:41'),
(36, 9, 'second', 'second values', '2015-10-26 11:23:30', '2015-10-26 11:23:30'),
(37, 9, 'third', 'Third values', '2015-10-26 11:24:07', '2015-10-26 11:24:07'),
(38, 9, 'first', 'first values', '2015-10-26 11:25:05', '2015-10-26 11:25:05');

-- --------------------------------------------------------

--
-- Table structure for table `tms_task`
--

CREATE TABLE IF NOT EXISTS `tms_task` (
  `iTaskId` int(11) NOT NULL AUTO_INCREMENT,
  `iUserId` int(11) NOT NULL,
  `iType` int(11) NOT NULL COMMENT '1=user, 2=client',
  `iStatus` varchar(255) NOT NULL,
  `vDue` varchar(255) NOT NULL,
  `vTaskType` varchar(255) NOT NULL,
  `iContact` int(11) NOT NULL,
  `iPersonResponsible` int(11) NOT NULL,
  `vPriority` varchar(255) NOT NULL,
  `tMemo` text NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iTaskId`),
  KEY `iUserId` (`iUserId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tms_task`
--

INSERT INTO `tms_task` (`iTaskId`, `iUserId`, `iType`, `iStatus`, `vDue`, `vTaskType`, `iContact`, `iPersonResponsible`, `vPriority`, `tMemo`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(1, 7, 2, 'completed', '10/24/2015 4:43 PM', '3', 7, 1, 'Normal', 'aw eqwe wqewq ew', '2015-10-24 16:43:46', '2015-10-24 16:43:46'),
(2, 1, 1, 'pending', '10/24/2015 5:14 PM', '2', 7, 14, 'Normal', 'sad asdsa d', '2015-10-24 17:14:40', '2015-11-02 10:56:36'),
(3, 1, 1, 'completed', '10/13/2015 5:14 PM', '3', 8, 12, 'High', 'sad asd sadsad', '2015-10-24 17:14:53', '2015-11-02 10:56:22'),
(4, 8, 2, 'completed', '10/06/2015 10:49 AM', '2', 7, 12, 'Normal', 'sadf afas fafs', '2015-10-26 10:49:33', '2015-10-26 10:49:33'),
(5, 14, 1, 'pending', '10/30/2015 1:11 PM', '3', 7, 12, 'Low', 'Test task :)', '2015-10-29 17:41:47', '2015-10-29 17:41:47');

-- --------------------------------------------------------

--
-- Table structure for table `tms_task_type`
--

CREATE TABLE IF NOT EXISTS `tms_task_type` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task_type` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tms_task_type`
--

INSERT INTO `tms_task_type` (`task_id`, `task_type`, `description`, `is_active`, `created_date`, `updated_date`) VALUES
(2, 'Type 1', 'this is type 1', 1, '2015-10-15 12:13:02', '2015-10-15 16:53:56'),
(3, 'Type 2', 'this is type 2', 1, '2015-10-23 17:55:44', '2015-10-23 17:55:44'),
(4, 'Type3', 'Type 3 task', 1, '2015-10-26 15:19:19', '2015-10-26 15:20:15');

-- --------------------------------------------------------

--
-- Table structure for table `tms_users`
--

CREATE TABLE IF NOT EXISTS `tms_users` (
  `iUserId` int(11) NOT NULL AUTO_INCREMENT,
  `vUserName` varchar(255) NOT NULL,
  `vEmailAddress` varchar(255) NOT NULL,
  `vPassword` varchar(50) NOT NULL,
  `eUserStatus` int(11) NOT NULL,
  `vResourceType` int(11) NOT NULL,
  `iFkUserTypeId` int(11) NOT NULL,
  `iResourceNumber` varchar(255) NOT NULL,
  `dtCreationDate` datetime NOT NULL,
  `vTimeZone` varchar(50) NOT NULL,
  `vUTC` varchar(50) NOT NULL,
  `vFirstName` varchar(50) NOT NULL,
  `vLastName` varchar(50) NOT NULL,
  `dtBirthDate` date NOT NULL,
  `iGender` int(11) NOT NULL COMMENT '1=male,2=female,3=other',
  `iMobile` int(11) NOT NULL,
  `vPhoneNumber` varchar(50) NOT NULL,
  `vWebsite` varchar(500) NOT NULL,
  `vSkypeName` varchar(255) NOT NULL,
  `vFileManage` varchar(500) NOT NULL,
  `vEmailTemplate` varchar(255) NOT NULL,
  `tMemo` text NOT NULL,
  `vAddress1` varchar(255) NOT NULL,
  `vAddress2` varchar(255) NOT NULL,
  `address1Detail` text NOT NULL,
  `address2Detail` text NOT NULL,
  `vSalesId` varchar(255) NOT NULL,
  `vComapanyCode` varchar(255) NOT NULL,
  `vTaxationId` varchar(255) NOT NULL,
  `vProfilePic` varchar(255) NOT NULL,
  `created_by` int(11) NOT NULL,
  `modified_by` int(11) NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iUserId`),
  UNIQUE KEY `vUserName` (`vUserName`,`vEmailAddress`),
  KEY `iFkUserTypeId` (`iFkUserTypeId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `tms_users`
--

INSERT INTO `tms_users` (`iUserId`, `vUserName`, `vEmailAddress`, `vPassword`, `eUserStatus`, `vResourceType`, `iFkUserTypeId`, `iResourceNumber`, `dtCreationDate`, `vTimeZone`, `vUTC`, `vFirstName`, `vLastName`, `dtBirthDate`, `iGender`, `iMobile`, `vPhoneNumber`, `vWebsite`, `vSkypeName`, `vFileManage`, `vEmailTemplate`, `tMemo`, `vAddress1`, `vAddress2`, `address1Detail`, `address2Detail`, `vSalesId`, `vComapanyCode`, `vTaxationId`, `vProfilePic`, `created_by`, `modified_by`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(1, 'Darshan Chudasama', 'admin@tms.com', '202cb962ac59075b964b07152d234b70', 3, 1, 1, '#89562145114', '1899-11-14 06:15:00', '-9', '', 'Darshan', 'Chudasama', '2015-11-20', 1, 2147483647, '65456415', 'http://sad.sda', 'asd asdsa', '', 'Mail 2', 'sadas dsadf', 'A11, Radhaswami Road, Ranip, Ahmedabad, Gujarat, India', 'A11, Radhaswami Road, Ranip, Ahmedabad, Gujarat, India', '[{"id":"address1_street_number","value":"A11"},{"id":"address1_locality","value":"Ahmedabad"},{"id":"address1_administrative_area_level_1","value":"Gujarat"},{"id":"address1_country","value":"India"},{"id":"address1_postal_code","value":"382480"}]', '[{"id":"address2_street_number","value":"A11"},{"id":"address2_locality","value":"Ahmedabad"},{"id":"address2_administrative_area_level_1","value":"GJ"},{"id":"address2_country","value":"India"},{"id":"address2_postal_code","value":"382480"}]', '', '550540', '', '1450002150.jpg', 1, 0, '2015-09-29 08:17:13', '2015-11-03 12:04:49'),
(12, 'Nikunj Savaliya', 'nikunj@gmail.com', '3e7b7df028dd5cab2b5f05c247aa9bad', 2, 1, 2, '5083', '0000-00-00 00:00:00', '5.5', '', 'Nikunj', 'Savaliya', '2015-10-15', 1, 2147483647, '1545505450', 'prime.com', 'nikunj', '', 'Mail 2', 'as dasd asdasd asd', 'Mendarda, Gujarat, India', 'Juna Vadaj Bus Stop, Ashram Road, Sorabji Compound, Ahmedabad, Gujarat, India', '[{"id":"locality","value":"Mendarda"},{"id":"country","value":"India"}]', '[{"id":"locality","value":"Ahmedabad"},{"id":"country","value":"India"},{"id":"postal_code","value":"380014"}]', '', '69740', '', '1445685022.png', 1, 0, '2015-10-24 16:40:22', '2015-10-24 18:31:22'),
(13, 'As Mccall', 'wugid@gmail.com', '96b056ce33db33efb7a47a2af64d01ad', 3, 1, 3, '120', '0000-00-00 00:00:00', '2', '', 'As', 'Mccall', '2015-11-18', 0, 83, '+797-40-9569205', 'http://www.mysepu.org.uk', 'Colin Lowe', '', 'Mail 1', 'Voluptate sint tempor natus laborum. Ipsum, sed neque aute reprehenderit, et quia non ad qui eum magnam.', 'ASDF, Chembur, Mumbai, Maharashtra, India', 'zxc, Trent Hills, ON, Canada', '[{"id":"address1_street_number","value":""},{"id":"address1_locality","value":""},{"id":"address1_administrative_area_level_1","value":""},{"id":"address1_country","value":""},{"id":"address1_postal_code","value":""}]', '[{"id":"address2_street_number","value":""},{"id":"address2_locality","value":""},{"id":"address2_administrative_area_level_1","value":""},{"id":"address2_country","value":""},{"id":"address2_postal_code","value":""}]', '', 'Minim', '', '1445691760.jpeg', 1, 0, '2015-10-24 18:32:40', '2015-11-03 12:00:57'),
(14, 'Ingvild Test', 'isundland@beconnected.no', '83a7c087ca7d3daacc38fdfb3ba35adb', 3, 1, 2, '5795', '0000-00-00 00:00:00', '1', '', 'Ingvild', 'Test', '2015-11-21', 2, 2147483647, '004794053446', 'www.beconnected.no', 'isundland', '', '', '', 'Munthes gate 1, Oslo, Norway', '', '[{"id":"locality","value":"Oslo"},{"id":"country","value":"Norway"},{"id":"postal_code","value":"0260"},{"id":"street_number","value":"1"},{"id":"locality","value":"Oslo"},{"id":"country","value":"Norway"},{"id":"postal_code","value":"0260"}]', '', '', 'BeConnected', '', '1446120396.jpeg', 1, 0, '2015-10-29 17:36:36', '2015-10-29 17:36:36'),
(16, 'AK Master', 'akmaster@gmail.com', '901e27e06c4788bcb3db1414485356c4', 3, 1, 2, '7433', '2015-03-11 11:39:54', '-6', '', 'AK', 'Master', '2015-11-03', 1, 2147483647, '650655060560', 'kanhasoft.com', 'akmaster', '', 'Mail 3', 'asf asdfasd sadasdasdasdasd', 'Ahmedabad Railway Station, Kalupur Road, Laxmi Bazar, Ahmedabad, Gujarat, India', 'A11, Radhaswami Road, Ranip, Ahmedabad, Gujarat, India', '[{"id":"address1_street_number","value":"Railway 512"},{"id":"address1_locality","value":"Ahmedabad"},{"id":"address1_administrative_area_level_1","value":"GJ"},{"id":"address1_country","value":"India"},{"id":"address1_postal_code","value":"380001"}]', '[{"id":"address2_street_number","value":"A11"},{"id":"address2_locality","value":"Ahmedabad"},{"id":"address2_administrative_area_level_1","value":"GJ"},{"id":"address2_country","value":"India"},{"id":"address2_postal_code","value":"382480"}]', '', 'asfdasdf', '', '1446531144.jpeg', 1, 0, '2015-11-03 11:42:24', '2015-11-03 11:42:24');

-- --------------------------------------------------------

--
-- Table structure for table `tms_user_property`
--

CREATE TABLE IF NOT EXISTS `tms_user_property` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `type` int(11) NOT NULL COMMENT '1=user, 2=client',
  `property_id` int(11) NOT NULL,
  `value_id` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `tms_user_property`
--

INSERT INTO `tms_user_property` (`id`, `user_id`, `type`, `property_id`, `value_id`, `created_date`, `updated_date`) VALUES
(1, 7, 2, 4, '6,27,28', '2015-10-24 18:08:09', '2015-10-24 18:08:09'),
(2, 7, 2, 5, '7,8', '2015-10-24 18:22:58', '2015-10-24 18:24:21'),
(3, 7, 2, 8, '29,33,32,34', '2015-10-24 18:24:29', '2015-10-24 18:25:12'),
(4, 1, 1, 4, '27,6', '2015-10-24 18:25:37', '2015-10-24 18:25:37'),
(5, 1, 1, 8, '34,33', '2015-10-24 18:25:41', '2015-11-02 10:58:21'),
(6, 12, 1, 5, '8', '2015-10-24 18:25:52', '2015-10-24 18:25:52'),
(7, 12, 1, 8, '32,34', '2015-10-24 18:25:55', '2015-10-24 18:25:59'),
(8, 13, 1, 5, '7', '2015-10-24 18:32:46', '2015-10-24 18:32:46'),
(10, 7, 2, 9, '36', '2015-10-26 15:20:49', '2015-10-26 15:20:49'),
(11, 14, 1, 4, '6', '2015-10-29 17:38:25', '2015-10-29 17:38:25'),
(12, 8, 2, 5, '8,7', '2015-11-02 16:27:45', '2015-11-02 16:29:19');

-- --------------------------------------------------------

--
-- Table structure for table `tms_user_status`
--

CREATE TABLE IF NOT EXISTS `tms_user_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `is_active` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tms_user_status`
--

INSERT INTO `tms_user_status` (`status_id`, `status_name`, `description`, `is_active`, `created_date`, `updated_date`) VALUES
(2, 'New', 'new', 1, '2015-10-15 12:28:14', '0000-00-00 00:00:00'),
(3, 'Active', 'Active User', 1, '2015-10-15 18:06:28', '2015-10-29 17:44:43'),
(4, 'Inactive', 'Inactive User', 1, '2015-10-15 18:06:46', '2015-10-29 17:44:32'),
(5, 'Under testing', 'New freelancer currently being tested', 1, '2015-10-29 17:44:19', '2015-10-29 17:44:19');

-- --------------------------------------------------------

--
-- Table structure for table `tms_user_type`
--

CREATE TABLE IF NOT EXISTS `tms_user_type` (
  `iTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `iResourceType` int(11) NOT NULL COMMENT '1=External, 2=internal',
  `vType` varchar(255) NOT NULL,
  `iDefault` int(11) NOT NULL,
  `eTypeStatus` enum('Active','Inactive') NOT NULL,
  `dtCreatedDate` datetime NOT NULL,
  `dtUpdatedDate` datetime NOT NULL,
  PRIMARY KEY (`iTypeId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tms_user_type`
--

INSERT INTO `tms_user_type` (`iTypeId`, `iResourceType`, `vType`, `iDefault`, `eTypeStatus`, `dtCreatedDate`, `dtUpdatedDate`) VALUES
(1, 1, 'Project Coordinator', 1, 'Active', '2015-10-24 18:30:16', '2015-10-24 18:30:16'),
(2, 1, 'Project Manager', 1, 'Active', '2015-10-24 18:30:25', '2015-10-24 18:30:25'),
(3, 1, 'QA Specialist', 1, 'Active', '2015-10-24 18:30:36', '2015-10-24 18:30:36'),
(4, 2, 'Resource Coordinator', 1, 'Active', '2015-10-29 17:43:49', '2015-10-29 17:43:49');

-- --------------------------------------------------------

--
-- Table structure for table `tms_workinghour`
--

CREATE TABLE IF NOT EXISTS `tms_workinghour` (
  `wh_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `wh_data` text NOT NULL,
  `for_type` int(11) NOT NULL COMMENT '1=current_week,2=for all in month, 3=for current year',
  `wh_type_value` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  PRIMARY KEY (`wh_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tms_workinghour`
--

INSERT INTO `tms_workinghour` (`wh_id`, `user_id`, `wh_data`, `for_type`, `wh_type_value`, `created_date`, `modified_date`) VALUES
(1, 1, '{"monday":{"from":"6:42 PM","to":"6:42 PM","value":1},"tuesday":{"from":"6:42 PM","to":"6:42 PM","value":1},"wednesday":{"from":"6:42 PM","to":"6:42 PM","value":1},"thursday":{"from":"9:00 AM","to":"6:42 PM"},"friday":{"from":"6:42 PM","to":"6:42 PM","value":1},"saturday":{"from":"6:42 PM","to":"6:42 PM", "value":1},"sunday":{"from":"6:42 PM","to":"6:42 PM","value":1}}', 1, '2015-11-03T13:12:40.239Z', '2015-11-03 18:42:44', '2015-11-03 18:42:44');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tms_additional_info`
--
ALTER TABLE `tms_additional_info`
  ADD CONSTRAINT `tms_additional_info_ibfk_1` FOREIGN KEY (`iUserId`) REFERENCES `tms_users` (`iUserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tms_client_contact`
--
ALTER TABLE `tms_client_contact`
  ADD CONSTRAINT `tms_client_contact_ibfk_1` FOREIGN KEY (`iClientId`) REFERENCES `tms_client` (`iClientId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tms_property_values`
--
ALTER TABLE `tms_property_values`
  ADD CONSTRAINT `tms_property_values_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `tms_property` (`property_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
