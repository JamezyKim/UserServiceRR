--Drop table
IF EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' AND TABLE_NAME='User' AND TABLE_SCHEMA='dbo')
BEGIN
	DELETE [User] FROM [User]
	DROP TABLE [User]
END
ELSE
BEGIN
	SELECT 'THE TABLE DID NOT EXITS'
END

--Create table

CREATE TABLE [User](
	[ID] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
	[CreatedDate] DATETIME NOT NULL,
	[CreatedByUserID] UNIQUEIDENTIFIER NOT NULL,
	[ModifiedDate] DATETIME NOT NULL, 
	[ModifiedByUserID] UNIQUEIDENTIFIER NOT NULL,
	[UserName] VARCHAR(50),
	[Password] VARCHAR(50),
)

SELECT 'TABLE IS CREATED'

DECLARE @userID varchar(100) = 'A91F2833-FC81-4A3F-852E-526DE064FBAC'

--Create table

INSERT INTO [dbo].[User] (ID, CreatedDate, CreatedByUserID, ModifiedDate, ModifiedByUserID, UserName, [Password])
VALUES
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'tom.choi@gmail.com','T0mCh0i@'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'kevin.park@yahoo.com','K3v!nPass '),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'helen.bae@aol.com','Hel3n2024'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'lucy.jeong@gmail.com','Lcy2025!'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'sue.jo@hanmail.net','SueJo123'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'daniel.ahn@gmail.com','D@niel!23'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'mark.shin@outlook.com','MarkPwd7'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'ben.han@hanmail.net','B3nHan#1'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'sophia.yun@daum.net','Sophia#1'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'yuna.kang@naver.com','YunaK!55'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'diana.lee@hotmail.com','Diana#89'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'alice.won@gmail.com','Alice2025!'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'eric.kim@daum.net','Er!cK00'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'ryan.jung@outlook.com','Ryun9876'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'minji.seo@gmail.com','M!nji789'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'victor.hwang@kakao.com','V!ctor78'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'julia.kwon@yahoo.com','Juli@998'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'grace.kim@naver.com','Gr@ceK123'),
(NEWID(),GETUTCDATE(), @userID, GETUTCDATE(), @userID,'jenny.ryu@naver.com','Jenny#99')


--------------------------------------


USE [TestDB]
GO

--Drop table

IF OBJECT_ID('dbo.Product', 'U') IS NOT NULL
    DROP TABLE dbo.Product;

--Create table

CREATE TABLE [dbo].[Product](
    [ProductId] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    [CreatedDate] DATETIME NOT NULL DEFAULT GETUTCDATE(),
	[ProductName] VARCHAR(100) NOT NULL,
    [Price] DECIMAL(10, 2) NOT NULL,
    [Stock] INT NOT NULL
) on [PRIMARY] 

--Insert Table

INSERT INTO [dbo].[Product]
           ([ProductId]
           ,[CreatedDate]
           ,[ProductName]
           ,[Price]
           ,[Stock])
     VALUES
(NEWID(), GETUTCDATE(), 'iPhone 15 Pro', 1499.99, 25),
(NEWID(), GETUTCDATE(), 'Samsung Galaxy S24', 1299.99, 30),
(NEWID(), GETUTCDATE(), 'MacBook Pro 16"', 2899.00, 10),
(NEWID(), GETUTCDATE(), 'Dell XPS 13', 1399.99, 12),
(NEWID(), GETUTCDATE(), 'iPad Air', 799.00, 20),
(NEWID(), GETUTCDATE(), 'Apple Watch Series 9', 599.00, 18),
(NEWID(), GETUTCDATE(), 'Sony WH-1000XM5', 399.99, 40),
(NEWID(), GETUTCDATE(), 'Bose QuietComfort 45', 349.99, 35),
(NEWID(), GETUTCDATE(), 'Google Pixel 8', 999.00, 22),
(NEWID(), GETUTCDATE(), 'Microsoft Surface Laptop 5', 1599.00, 8),
(NEWID(), GETUTCDATE(), 'ASUS ROG Zephyrus G14', 1799.00, 15),
(NEWID(), GETUTCDATE(), 'Lenovo ThinkPad X1 Carbon', 1899.99, 7),
(NEWID(), GETUTCDATE(), 'Logitech MX Master 3', 129.99, 60),
(NEWID(), GETUTCDATE(), 'Samsung Galaxy Tab S9', 899.00, 14),
(NEWID(), GETUTCDATE(), 'Nintendo Switch OLED', 449.00, 50),
(NEWID(), GETUTCDATE(), 'PlayStation 5', 649.99, 9),
(NEWID(), GETUTCDATE(), 'Xbox Series X', 629.99, 11),
(NEWID(), GETUTCDATE(), 'GoPro HERO12', 499.00, 13),
(NEWID(), GETUTCDATE(), 'DJI Mini 4 Pro Drone', 999.00, 6),
(NEWID(), GETUTCDATE(), 'Kindle Paperwhite', 179.99, 28);
GO


--------------------------------------

USE [TestDB]
GO

--Drop table

IF OBJECT_ID('[dbo].[Transaction]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Transaction];
GO

--Create table

CREATE TABLE [Transaction](
	[TransactionId] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID() PRIMARY KEY,
	[UserId] UNIQUEIDENTIFIER NOT NULL,
	[Amount] DECIMAL(10, 2),
	[TransactionDate] DATETIME DEFAULT GETUTCDATE(),
	FOREIGN KEY (UserId) REFERENCES [User](ID)
)

--Insert table

DECLARE @userID varchar(100) = 'A91F2833-FC81-4A3F-852E-526DE064FBAC'

INSERT INTO [dbo].[Transaction] (TransactionId, UserId, Amount, TransactionDate)
VALUES
(NEWID(), '7416A0C9-03CA-4B58-8EE3-073C073585B5', 3, GETUTCDATE()),
(NEWID(), '945C98DA-BEB7-4C7C-971E-2B611ED61446', 4, GETUTCDATE()),
(NEWID(), 'EDF999C8-89BC-4E30-99FA-2D2B68ED0514', 5, GETUTCDATE()),
(NEWID(), '7140BE16-92FC-4621-83DD-3BC3A596D1E8', 5, GETUTCDATE()),
(NEWID(), '7C0A8F8B-0464-45C6-A621-4C62490E7F1C', 6, GETUTCDATE()),
(NEWID(), '0D106866-4C4C-4D9E-B23A-59BC12DED83C', 7, GETUTCDATE()),
(NEWID(), 'CC571B4A-61CD-4B65-9534-79D7EFBFA80C', 333, GETUTCDATE()),
(NEWID(), '3D4FA671-1E62-476C-BD11-7ED79DCABC5B', 6, GETUTCDATE()),
(NEWID(), 'D464126D-F894-4D75-B4B5-80F10C621F3F', 5, GETUTCDATE()),
(NEWID(), 'A0833F5A-0FB8-48CC-85EB-B2830C431991', 88, GETUTCDATE()),
(NEWID(), '7D427379-4659-4D12-8FA1-B9936A808CA5', 54, GETUTCDATE()),
(NEWID(), '2A618B02-8C21-4D7F-9D87-C63B34FADAA3', 6, GETUTCDATE()),
(NEWID(), '18DB9181-580E-48A7-85FA-C7FFBDA28FDB', 456, GETUTCDATE()),
(NEWID(), 'ED83B6E2-4953-4623-8620-D1A505212C79', 54, GETUTCDATE()),
(NEWID(), 'EDCDDB07-B899-438C-8BF8-D62EF2902C35', 6, GETUTCDATE()),
(NEWID(), '8698270D-CB32-4999-AF82-DDEEA1B0B832', 54, GETUTCDATE()),
(NEWID(), '9FE26972-C06C-4F59-A73D-E2259584188D', 7, GETUTCDATE()),
(NEWID(), '1FB3A735-0A66-49D4-B7CC-ED36992EDA08', 76, GETUTCDATE()),
(NEWID(), '260A28DA-7680-4BF8-99AA-F5FDBED1EFD3', 57, GETUTCDATE())
