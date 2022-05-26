using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    public partial class initials : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.RenameColumn(
                name: "ShippingAdress",
                table: "Orders",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "OrderEmail",
                table: "Orders",
                newName: "image");

            migrationBuilder.RenameColumn(
                name: "Amount",
                table: "Orders",
                newName: "Price");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "quantity",
                table: "Orders",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "quantity",
                table: "Orders");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Orders",
                newName: "ShippingAdress");

            migrationBuilder.RenameColumn(
                name: "image",
                table: "Orders",
                newName: "OrderEmail");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Orders",
                newName: "Amount");

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.Id);
                });
        }
    }
}
