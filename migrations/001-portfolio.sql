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

INSERT INTO Project (title,about,mobile_image,tablet_image,desktop_image,website_link,git_link)  values ('RnR Herberge', 'This is a website', '/public/rnr-mobile.jpg', '/public/rnr-tablet.jpg','/public/rnr-desktop.jpg', 'www.rnrherberge.de', 'gitbal');
INSERT INTO Project (title,about,mobile_image,tablet_image,desktop_image,website_link,git_link)  values ('nahdran', 'This is a website', '/public/rnr-mobile.jpg', '/public/rnr-tablet.jpg','/public/rnr-desktop.jpg', 'www.rnrherberge.de', 'gitbal');

-- Down

DROP TABLE Project;



-- about
-- message
-- user
-- skills
-- menu items