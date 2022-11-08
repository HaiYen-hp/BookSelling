namespace APIBookSaling.Page
{
    public class FilterDto
    {
        [FromQuery(Name = "pageSize")]
        public int PageSize { get; set; }

        [FromQuery(Name = "pageIndex")]
        public int PageIndex { get; set; }

        private string _keyword { get; set; }
        [FromQuery(Name = "keyword")]
        public string Keyword
        {
            get => _keyword;
            set => _keyword = value?.Trim();
        }
    }
}
