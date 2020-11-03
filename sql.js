show databases /////// is use to display all databases
use dbname ///// is use to change using databases
show tables;   /// to show all tablse
status   // to see database status

create database stu{                                         /// create database
    colname datatype(size) constrain,
    colname datatype(size),
    colname datatype(size),
}

insert into stu (conlane,colname) values(values,values);   ////// to insert data 

select * from tablename;  //// to view all data

update tablename set colname=value, colname=value where some condition;    //// update data

delete from tablename where somecondition;    ////// delete data

select name,email from stu; ///// to select limited column

/////////////// clauses

select * from table where colname in ('anything','anything');

select * from table where colname in ('anything','anything');
select * from table where colname != 'anyname';

select * from table where colname notin ('anything','anything');

select * from tablename between value And value;

select * from tablename where colname between value AND value AND colname Not in ('value');

select * from tablename where colname between value AND value AND colname Not in ('value');

select * from customer ORDER BY CUST_CODE ;    //// By default Assending 

select * from customer ORDER BY CUST_CODE desc;  //// By default Dessending

select distinct name from tablename;

////////////////////////////////////////////////////////////////////// Alter commands
alter table tablename add column column_name datatype(size);
alter table tablename change column oldname newname datatype(size)


//////////////////////////////////////////////////////// joins
types of joins
    -> inner joins
    ->outer joins  ->left right full
    ->self joins
    -> natural join

// ----------------------------------  natural join
////////// it is use whan both tables have common column
select colname,colname from table1 NATURAL JOIN tables2;
// ----------------------------------natural join end


// ----------------------------------  right outer join
select CUST_NAME,orders.CUST_CODE from customer RIGHT OUTER JOIN orders ON(orders.CUST_CODE = customer.CUST_CODE);
// ----------------------------------right outer join end



// ----------------------------------  left outer join
select CUST_NAME,orders.CUST_CODE from customer RIGHT OUTER JOIN orders ON(orders.CUST_CODE = customer.CUST_CODE);
// ----------------------------------left outer join end


// ---------------------------------- inner join
select CUST_NAME,orders.CUST_CODE from customer INNER JOIN orders ON orders.CUST_CODE = customer.CUST_CODE;
// ----------------------------------inner join end





