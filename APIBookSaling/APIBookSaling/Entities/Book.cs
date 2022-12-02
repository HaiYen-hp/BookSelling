namespace APIBookSaling.Entities
{
    public class Book
    {
        public int Id { get; set; }
        // ten quyen sach
        public string BookName { get; set; }
        // tac gia
        public string Author { get; set; }
        // the loai sach
        public string TypeOfBook { get; set; }
        // gia quyen sach
        public float Price { get; set; }
        //code của sách
        public string BookCode { get; set; }
        //public byte[] Image { get; set; }
        public string Image { get; set; }
        public int TotalLike { get; set; }
    }
}
