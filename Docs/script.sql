USE [TAsikimu]
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [Quantity]) VALUES (1, N'Harry potter and the prisoner of azkaban', N'As a result, swarms of Dementors — dark, faceless beings that “suck the soul” out of their victims and serve as the guards of Azkaban — infiltrate', CAST(1400.00 AS Decimal(18, 2)), N'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330l/5._SY475_.jpg', 1)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [Quantity]) VALUES (2, N'Harry Potter and the Chamber of Secrets.', N'Harry and friends return to Hogwarts with a bang — the bang of a flying Ford Anglia as it crashes into the Whomping Willow, that is', CAST(1800.00 AS Decimal(18, 2)), N'https://booklounge.co.za/wp-content/uploads/2020/10/hp2.jpg', 1)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Price], [Image], [Quantity]) VALUES (3, N'Harry Potter and the Half-Blood Prince', N'As the Harry Potter series draws to a close, Harry''s greatest adventure yet is just beginning . . . and it arrives in paperback July 25, 2006. The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. ', CAST(1050.00 AS Decimal(18, 2)), N'https://img.thriftbooks.com/api/images/m/4b357ed472d1c66bc9ee85dacb26c9021360837f.jpg', 1)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
