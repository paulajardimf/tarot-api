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

INSERT INTO cards (id, number, name, img, arcana, suit) VALUES 
('21', 1, "Ace of Cups", "c01.jpg", 'Minor Arcana', 'Cups'),
('22', 2, "Two of Cups", "c02.jpg", 'Minor Arcana', 'Cups'),
('23', 3, "Three of Cups", "c03.jpg", 'Minor Arcana', 'Cups'),
('24', 4, "Four of Cups", "c04.jpg", 'Minor Arcana', 'Cups'),
('25', 5, "Five of Cups", "c05.jpg", 'Minor Arcana', 'Cups'),
('26', 6, "Six of Cups", "c06.jpg", 'Minor Arcana', 'Cups'),
('27', 7, "Seven of Cups", "c07.jpg", 'Minor Arcana', 'Cups'),
('28', 8, "Eight of Cups", "c08.jpg", 'Minor Arcana', 'Cups'),
('29', 9, "Nine of Cups", "c09.jpg", 'Minor Arcana', 'Cups'),
('30', 10, "Ten of Cups", "c10.jpg", 'Minor Arcana', 'Cups'),
('31', 11, "Page of Cups", "c11.jpg", 'Minor Arcana', 'Cups'),
('32', 12, "Knight of Cups", "c12.jpg", 'Minor Arcana', 'Cups'),
('33', 13, "Queen of Cups", "c13.jpg", 'Minor Arcana', 'Cups'),
('34', 14, "King of Cups", "c14.jpg", 'Minor Arcana', 'Cups');

INSERT INTO cards (id, number, name, img, arcana, suit) VALUES
('35', 1, "Ace of Swords", "s01.jpg", 'Minor Arcana', 'Swords'),
('36', 2, "Two of Swords", "s02.jpg", 'Minor Arcana', 'Swords'),
('37', 3, "Three of Swords", "s03.jpg", 'Minor Arcana', 'Swords'),
('38', 4, "Four of Swords", "s04.jpg", 'Minor Arcana', 'Swords'),
('39', 5, "Five of Swords", "s05.jpg", 'Minor Arcana', 'Swords'),
('40', 6, "Six of Swords", "s06.jpg", 'Minor Arcana', 'Swords'),
('41', 7, "Seven of Swords", "s07.jpg", 'Minor Arcana', 'Swords'),
('42', 8, "Eight of Swords", "s08.jpg", 'Minor Arcana', 'Swords'),
('43', 9, "Nine of Swords", "s09.jpg", 'Minor Arcana', 'Swords'),
('44', 10, "Ten of Swords", "s10.jpg", 'Minor Arcana', 'Swords'),
('45', 11, "Page of Swords", "s11.jpg", 'Minor Arcana', 'Swords'),
('46', 12, "Knight of Swords", "s12.jpg", 'Minor Arcana', 'Swords'),
('47', 13, "Queen of Swords", "s13.jpg", 'Minor Arcana', 'Swords'),
('48', 14, "King of Swords", "s14.jpg", 'Minor Arcana', 'Swords');

INSERT INTO cards (id, number, name, img, arcana, suit) VALUES
('49', 1, "Ace of Wands", "w01", 'Minor Arcana', "Wands"),
('50', 2, "Two of Wands", "w02", 'Minor Arcana', "Wands"),
('51', 3, "Three of Wands", "w03", 'Minor Arcana', "Wands"),
('52', 4, "Four of Wands", "w04", 'Minor Arcana', "Wands"),
('53', 5, "Five of Wands", "w05", 'Minor Arcana', "Wands"),
('54', 6, "Six of Wands", "w06", 'Minor Arcana', "Wands"),
('55', 7, "Seven of Wands", "w07", 'Minor Arcana', "Wands"),
('56', 8, "Eight of Wands", "w08", 'Minor Arcana', "Wands"),
('57', 9, "Nine of Wands", "w09", 'Minor Arcana', "Wands"),
('58', 10, "Ten of Wands", "w10", 'Minor Arcana', "Wands"),
('59', 11, "Page of Wands", "w11", 'Minor Arcana', "Wands"),
('60', 12, "Knight of Wands", "w12", 'Minor Arcana', "Wands"),
('61', 13, "Queen of Wands", "w13", 'Minor Arcana', "Wands"),
('62', 14, "King of Wands", "w14", 'Minor Arcana', "Wands");

INSERT INTO cards (id, number, name, img, arcana, suit) VALUES
('63', 1, "Ace of Pentacles", "p01", 'Minor Arcana', "Pentacles"),
('64', 2, "Two of Pentacles", "p02", 'Minor Arcana', "Pentacles"),
('65', 3, "Three of Pentacles", "p03", 'Minor Arcana', "Pentacles"),
('66', 4, "Four of Pentacles", "p04", 'Minor Arcana', "Pentacles"),
('67', 5, "Five of Pentacles", "p05", 'Minor Arcana', "Pentacles"),
('68', 6, "Six of Pentacles", "p06", 'Minor Arcana', "Pentacles"),
('69', 7, "Seven of Pentacles", "p07", 'Minor Arcana', "Pentacles"),
('70', 8, "Eight of Pentacles", "p08", 'Minor Arcana', "Pentacles"),
('71', 9, "Nine of Pentacles", "p09", 'Minor Arcana', "Pentacles"),
('72', 10, "Ten of Pentacles", "p10", 'Minor Arcana', "Pentacles"),
('73', 11, "Page of Pentacles", "p11", 'Minor Arcana', "Pentacles"),
('74', 12, "Knight of Pentacles", "p12", 'Minor Arcana', "Pentacles"),
('75', 13, "Queen of Pentacles", "p13", 'Minor Arcana', "Pentacles"),
('76', 14, "King of Pentacles", "p14", 'Minor Arcana', "Pentacles");