-- Up

CREATE TABLE Project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    about TEXT,
    mobile_image TEXT,
    tablet_image TEXT,
    desktop_image TEXT,
    website_link TEXT,
    git_link TEXT
);


CREATE TABLE Aboutinfo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    info_text TEXT
);

CREATE TABLE Contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname text,
    email text,
    msg text,
    created_at DATETIME CURRENT_TIMESTAMP,
    seen boolean
);

CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password Text
);


INSERT INTO Project (title,about,mobile_image,tablet_image,desktop_image,website_link,git_link)  values ('RnR Herberge', 'This is a website', '/public/rnr-mobile.jpg', '/public/rnr-tablet.jpg','/public/rnr-desktop.jpg', 'www.rnrherberge.de', 'gitbal');
INSERT INTO Project (title,about,mobile_image,tablet_image,desktop_image,website_link,git_link)  values ('nahdran', 'This is a website', '/public/rnr-mobile.jpg', '/public/rnr-tablet.jpg','/public/rnr-desktop.jpg', 'www.rnrherberge.de', 'gitbal');
INSERT INTO Aboutinfo (title,info_text)  values ('My fisrt abou', 'This is a website');
INSERT INTO Contact (fullname,email,msg,seen)  values ('a message','sjbv@kjsvnh.de', 'hello there', false );
INSERT INTO Contact (fullname,email,msg,seen)  values ('message nr two', 'jsdcbh@jhbvf.com', 'hello there', true);
INSERT INTO User (username, password) values ('torun', '12345');

-- Down

DROP TABLE Project;
DROP TABLE Aboutinfo;
DROP TABLE Contact;
DROP TABLE User;


-- message
-- user
-- skills
-- menu items