# LoginPage
 Frontend: http://localhost:5173/<br>
<ul>Cằi đặt: 
  <li>npm install vite</li>
  <li>npm install axios</li>
</ul>
         
 Backend: localhost:8081/login/?=user1&password=123456
<ul>Cằi đặt: 
  <li>npm install express</li>
  <li>npm install mysql noedmon cors</li>
</ul>
 
 MySQL: <br>
use logintest<br>
create database logintest<br>
CREATE TABLE users (<br>
    userID int,<br>
    username varchar(255),<br>
    password varchar(255)<br>
);<br>

INSERT INTO `logintest`.`users`
(`userID`,
`username`,
`password`)
VALUES
(1,
'user1',
'123456');<br>
INSERT INTO `logintest`.`users`
(`userID`,
`username`,
`password`)
VALUES
(2,
'user2',
'123456');

