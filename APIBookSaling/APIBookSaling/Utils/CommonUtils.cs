using System.Security.Cryptography;
using System.Text;

namespace APIBookSaling.Utils
{
    public static class CommonUtils
    {
        private static Random random = new Random();

        public static string CreateMD5(string input)
        {
            // Use input string to calculate MD5 hash
            MD5 md5 = MD5.Create();
            byte[] inputBytes = Encoding.UTF8.GetBytes(input);
            byte[] hashBytes = md5.ComputeHash(inputBytes);
            return Convert.ToHexString(hashBytes);
        }

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public static string GetCurrentUsername(IHttpContextAccessor httpContextAccessor)
        {
            var usr = httpContextAccessor.HttpContext?.User.FindFirst(APIBookSaling.ClaimTypes.Username);
            return usr != null ? usr.Value : "";
        }
    }
}
