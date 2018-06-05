﻿using System.Web;
using System.Web.Optimization;

namespace ascii_table
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/script").Include(
                "~/Scripts/char.js",
                "~/Scripts/control-char.js",
                "~/Scripts/printable-char.js",
                "~/Scripts/char-type.js",
                "~/Scripts/ascii-table-printer.js",
                "~/Scripts/ascii-table-repository.js",
                "~/Scripts/script.js"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Content/style.min.css"));
        }
    }
}
