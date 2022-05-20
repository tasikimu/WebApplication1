USE [ECommerce]
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (1, N'asikimu@gmail.com', N'Pasword', N'Tjelaje Asikimu', N'Poortjie', N'Tasikimu')
INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (2, N'asikimu@gmail.com', N'Password', N'Tjelaje Asikimu', N'KZN', N'Tasikimu')
INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (19, N'', N'', N'', N'', N'')
INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (20, N'', N'', N'', N'', N'')
INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (21, N'', N'', N'', N'', N'')
INSERT [dbo].[Customers] ([Id], [Email], [Password], [Fullname], [Address], [UserName]) VALUES (22, N'rabiya@123', N'Password', N'Rabiya Asikimu', N'Gauteng', N'Rabiya')
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [quantity]) VALUES (4, N'Harry potter and the prisoner of azkaban', N'As a result, swarms of Dementors — dark, faceless beings that “suck the soul” out of their victims and serve as the guards of Azkaban — infiltrate', CAST(1400.00 AS Decimal(18, 2)), N'https://upload.wikimedia.org/wikipedia/en/b/bc/Prisoner_of_azkaban_UK_poster.jpg', 0)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [quantity]) VALUES (5, N'Harry Potter and the Goblet of Fire', N'Harry returns to Hogwarts for his fourth year of school', CAST(950.00 AS Decimal(18, 2)), N'https://upload.wikimedia.org/wikipedia/en/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg', 0)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [quantity]) VALUES (6, N'Harry Potter and the Chamber of Secrets.', N'Harry and friends return to Hogwarts with a bang — the bang of a flying Ford Anglia as it crashes into the Whomping Willow, that is', CAST(1800.00 AS Decimal(18, 2)), N'https://flxt.tmsimg.com/NowShowing/28900/28900_da.jpg', 2)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
