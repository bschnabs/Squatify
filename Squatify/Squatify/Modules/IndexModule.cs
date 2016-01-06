using Nancy;

namespace Squatify.Modules
{
    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = parameters =>
            {
                return View["sbindex"];
            };
        }
    }
}