using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIBookSaling.Migrations
{
    public partial class xgz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageFake",
                table: "Book");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageFake",
                table: "Book",
                type: "varchar(8000)",
                maxLength: 8000,
                nullable: false,
                defaultValue: "");
        }
    }
}
