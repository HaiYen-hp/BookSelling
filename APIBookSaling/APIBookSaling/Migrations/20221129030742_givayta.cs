using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace APIBookSaling.Migrations
{
    public partial class givayta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageFake",
                table: "books",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageFake",
                table: "books");
        }
    }
}
