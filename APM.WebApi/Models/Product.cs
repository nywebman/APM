using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace APM.WebApi.Models
{
    public class Product
    {
        public string Description { get; set; }
        public decimal Price { get; set; }

        [Required(ErrorMessage="Product code is required",AllowEmptyStrings=false)]
        [MinLength(6,ErrorMessage="min is 6")]
        public string ProductCode { get; set; }

        public int ProductId { get; set; }

        [Required(ErrorMessage="Product Name is required",AllowEmptyStrings=false)]
        [MinLength(5,ErrorMessage="min is 5")]
        [MaxLength(12,ErrorMessage="max is 12")]
        public string ProductName { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}