using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace APIBookSaling.Dtos.MapperProfiles
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Book, BookDto>();
        }
    }
}
