using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MeetUpDemoBackEnd.Models;

namespace MeetUpDemoBackEnd.Controllers
{
    public class ValuesController : ApiController
    {
        public static List<ManageInfoViewModel> Users { get; set; } = new List<ManageInfoViewModel>();

        // GET api/values
        public IEnumerable<ManageInfoViewModel> Get()
        {
            return Users;
        }

        // GET api/values/5
        public ManageInfoViewModel Get(int id)
        {
            return Users[id];
        }

        // POST api/values
        public void Post([FromBody]ManageInfoViewModel value)
        {
            Users.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]ManageInfoViewModel user)
        {
            Users[id] = user;
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            Users.RemoveAt(id);
        }
    }
}
