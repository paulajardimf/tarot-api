-- Active: 1680711141418@@127.0.0.1@3306
CREATE TABLE cards (
  id STRING NOT NULL,
  number INT NOT NULL,
  name STRING NOT NULL,
  img STRING NOT NULL,
  arcana STRING NOT NULL,
  suit STRING NOT NULL
);

SELECT * FROM cards;

INSERT INTO cards (id, number, name, img, arcana, suit) VALUES 
('00', 0, 'The Fool', "m00.jpg", 'Major Arcana', 'Trump'),
('01', 1, 'The Magician', "m01.jpg", 'Major Arcana', 'Trump'),
('02', 2, 'The High Priestess', "m02.jpg", 'Major Arcana', 'Trump'),
('03', 3, 'The Empress', "m03.jpg", 'Major Arcana', 'Trump'),
('04', 4, 'The Emperor', "m04.jpg", 'Major Arcana', 'Trump'),
('05', 5, 'The Hierophant', "m05.jpg", 'Major Arcana', 'Trump'),
('06', 6, 'The Lovers', "m06.jpg", 'Major Arcana', 'Trump'),
('07', 7, 'The Chariot', "m07.jpg", 'Major Arcana', 'Trump'),
('08', 8, 'Strength', "m08.jpg", 'Major Arcana', 'Trump'),
('09', 9, 'The Hermit', "m09.jpg", 'Major Arcana', 'Trump'),
('10', 10, 'Wheel Of Fortune', "m10.jpg", 'Major Arcana', 'Trump'),
('11', 11, 'Justice', "m11.jpg", 'Major Arcana', 'Trump'),
('12', 12, 'The Hanged Man', "m12.jpg", 'Major Arcana', 'Trump'),
('13', 13, 'Death', "m13.jpg", 'Major Arcana', 'Trump'),
('14', 14, 'Temperance', "m14.jpg", 'Major Arcana', 'Trump'),
('15', 15, 'The Devil', "m15.jpg", 'Major Arcana', 'Trump'),
('16', 16, 'The Tower', "m16.jpg", 'Major Arcana', 'Trump'),
('17', 17, 'The Star', "m17.jpg", 'Major Arcana', 'Trump'),
('18', 18, 'The Moon', "m18.jpg", 'Major Arcana', 'Trump'),
('19', 19, 'The Sun', "m19.jpg", 'Major Arcana', 'Trump'),
('20', 20, 'The World', "m20.jpg", 'Major Arcana', 'Trump');