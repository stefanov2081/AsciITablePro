using System.Web;
using System.Web.Optimization;

namespace ascii_table
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/script").Include(
                "~/Scripts/Output/common.js",
                "~/Scripts/Output/printable-char.js",
                "~/Scripts/Output/control-char.js",
                "~/Scripts/Output/char-type.js",
                "~/Scripts/Output/copy-to-clipboard.js",
                "~/Scripts/Output/ascii-table-printer.js",
                "~/Scripts/Output/ascii-table-repository.js",
                "~/Scripts/Output/google-analytics.js",
                "~/Scripts/Output/script.js"));

            bundles.Add(new StyleBundle("~/Content/style").Include(
                      "~/Content/style.min.css"));
        }
    }
}
