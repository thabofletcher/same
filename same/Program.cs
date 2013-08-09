using System;
using System.Net;
using System.Text;
using System.Collections.Generic;
using System.IO;

namespace same
{
    class Program
    {
        public static void Main(string[] args)
        {
            if (args.Length != 2)
            {
                Console.WriteLine("Usage: same baseline compare");
                return;
            }

            var baselineLines = File.ReadAllLines(args[0]);
            var compareLines = File.ReadAllLines(args[1]);

            var compare = new HashSet<string>();
            foreach (var line in compareLines)
                compare.Add(line);

            foreach (var line in baselineLines)
            {
                if (compare.Contains(line))
                    Console.WriteLine(line);
            }
        }
    }
}