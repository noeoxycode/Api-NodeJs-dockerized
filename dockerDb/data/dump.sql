CREATE DATABASE IF NOT EXISTS library;
USE library;
DROP TABLE IF EXISTS `Book`;
CREATE TABLE IF NOT EXISTS `Book` (
  `ISBN` varchar(13) NOT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `Author` varchar(150) DEFAULT NULL,
  `Overview` varchar(1500) DEFAULT NULL,
  `Picture` varchar(500) DEFAULT NULL,
  `Read_Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`ISBN`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `Book` (`ISBN`, `Title`, `Author`, `Overview`, `Picture`, `Read_Count`) VALUES
('9781408855652', 'Harry Potter and the Philosopher Stone', 'J. K. Rowling', 'It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he is a wizard', 'img\\harryPotterPhiloStone.gif', 1),
('9782290133941', 'Hamlet', 'William Shakespeare', 'Hamlet Summary. The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet is uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.', 'img\\helmet.gif', 2),
('9798753408020', 'Macbeth ', 'William Shakespeare', 'Hamlet Summary. The ghost of the King of Denmark tells his son Hamlet to avenge his murder by killing the new king, Hamlet is uncle. Hamlet feigns madness, contemplates life and death, and seeks revenge. His uncle, fearing for his life, also devises plots to kill Hamlet.', 'img\\Macbeth.gif', 2),
('9780300122008', 'King Lear', 'William Shakespeare', 'King Lear divides his kingdom among the two daughters who flatter him and banishes the third one who loves him. His eldest daughters both then reject him at their homes, so Lear goes mad and wanders through a storm.', 'img\\kinglear.gif', 4),
('9781538719107', 'Seven Days in June', 'Tia Williams', 'Shane Hall is a reclusive, enigmatic, award-winning literary author who, to everyone is surprise, shows up in New York. When Shane and Eva meet unexpectedly at a literary event, sparks fly, raising not only their past buried traumas, but the eyebrows of New York is Black literati.', 'img\\sdij.gif', 4),
('9798705893843', 'The Spanish Love Deception', 'Elena Armas', 'Elena Armas is debut novel, “The Spanish Love Deception” (2021) follows Catalina Martin, who fled Spain to live in Brooklyn, New York, to pursue a career at an engineering firm. Although her primary purpose in coming to America is to live out her dreams, it is also a means of escape', 'img\\spanishlove.gif', 2),
('9780593200124', 'The Ex Talk', 'Rachel Lynn Solomon', 'When the struggling station needs a new concept, S...', 'img\\extalk.gif', 1),
('9782081282575', 'Jane Eyre', 'Charlotte Brontë', 'Jane Eyre is the story of a young, orphaned girl (shockingly, she is named Jane Eyre) who lives with her aunt and cousins, the Reeds, at Gateshead Hall. Like all nineteenth-century orphans, her situation pretty much sucks. Mrs. Reed hates Jane and allows her son John to torment the girl.', 'img\\eyre.gif', 2),
('9781594631207', 'Emotional First Aid: Practical Strategies for Treating Failure', 'Guy Winch', 'Emotional First Aid explores the link between rejection and violence and the self-defeating behaviors that cause us to withdraw when we are lonely or have low self-esteem, starting a vicious cycle and hampering effective relationships.', 'img\\healthbook.gif', 2),
('9780802412713', 'The 5 Love Languages: The Secret to Love That Lasts', 'Gary Chapman', 'In The Five Love Languages: The Secret to a Love that Lasts, Dr. Gary Chapman asserts that every person speaks one of these “primary” love languages: Words of Affirmation, Acts of Service, Physical Touch, Quality Time, or Gifts. People can also speak a secondary language, but the primary language is the most important.', 'img\\5languagetolove.gif', 4);

flush privileges;