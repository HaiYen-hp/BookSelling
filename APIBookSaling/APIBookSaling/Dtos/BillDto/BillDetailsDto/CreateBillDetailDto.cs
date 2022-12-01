﻿using APIBookSaling.Entities;

namespace APIBookSaling.Dtos.BillDto.BillDetailsDto
{
    public class CreateBillDetailDto
    {
        public int IdBook { get; set; }
        public float TotalPrice { get; set; }
        // tên quyển sách
        public string BookName { get; set; }
        // số lượng
        public int Quatity { get; set; }
        // ngày tạo
        public DateTime CreateDate { get; set; }
        // người tạo
        public string CreateBy { get; set; }
    }
}
