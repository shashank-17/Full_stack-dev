create database db2;
use db2;
 create table registers(
  doctorid int auto_increment,
 username varchar(100),
  emailid varchar(100),
 mobilenumber bigint,
 password1 varchar(20),
address varchar(200),
primary key(doctorid)
);
select *from registers;
create table reception(
 receptionid int auto_increment,
 username varchar(100),
  emailid varchar(100),
 mobilenumber bigint,
 password1 varchar(20),
address varchar(200),
primary key(receptionid)
);
create table patient(
 patientid int auto_increment,
 username varchar(100),
  emailid varchar(100),
 mobilenumber bigint,
 password1 varchar(20),
address varchar(200),
primary key(patientid)
);
create table nurses(
 nurseid int auto_increment,
 username varchar(100),
  emailid varchar(100),
 mobilenumber bigint,
 password1 varchar(20),
address varchar(200),
primary key(nurseid)
);
create table admin(
 adminid int auto_increment,
 username varchar(100),
  emailid varchar(100),
 mobilenumber bigint,
 password1 varchar(20),
address varchar(200),
primary key(adminid)
);

 create table reports(
 patientid int auto_increment,
 patientname varchar(30),
 mobilenumber bigint,
 address varchar(200),
 status varchar(200),
 primary key(patientid)
 );
  create table login(
 id int auto_increment,
 username varchar(30),
email varchar(100),
 mobilenumber bigint,
 address varchar(200),
  password varchar(20),
 primary key(id)
 );
 select * from nurseupd;
  create table recept(
 name varchar(30),
 feedback varchar(50)
 );
 create table appointment(
 patientid int auto_increment,
 name varchar(100),
  email varchar(100),
 mobilenumber bigint,
address varchar(200),
primary key(patientid)
);
create table updation(
name varchar(30),
feedback varchar(50)
);
create table attendance(
name varchar(30),
feedback varchar(50)
);
create table nurseupd(
name varchar(30),
feedback varchar(50)
);
select * from login;
show tables;
select * from patient;
select * from attendance;
select * from updation;
select * from nurseupd;